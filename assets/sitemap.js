/**
   IlmuAlam Sitemap v3.0
   Architecture: Batch-fetch ALL posts via token-chain,
   store client-side, paginate+filter+search in JS only.
   No broken start-index. No page-3 failure.
 * @license MIT
 * @repository https://github.com/ilmualam/sitemap
 */

(function(){
'use strict';
const BLOG_URL   = 'https://www.ilmualam.com';
const BATCH_SIZE = 150;   // Blogger max per call
const PER_PAGE   = 12;    // Cards per page

/* ── State ── */
let allPosts      = [];
let filteredPosts = [];
let currentPage   = 1;
let activeLabel   = 'all';
let searchQuery   = '';
let sortMode      = 'newest';
let isLoading     = true;

/* ── DOM refs ── */
const grid        = document.getElementById('ilmx-grid');
const pagination  = document.getElementById('ilmx-pagination');
const searchInput = document.getElementById('ilmx-search');
const clearBtn    = document.getElementById('ilmx-search-clear');
const sortSel     = document.getElementById('ilmx-sort');
const resultsLbl  = document.getElementById('ilmx-results-label');
const errorBox    = document.getElementById('ilmx-error');
const backtop     = document.getElementById('ilmx-backtop');

/* ── Token-chain fetch: load ALL posts ── */
async function fetchAllPosts(){
  let nextToken = null;
  let batch     = 0;

  try {
    do {
      batch++;
      let url = `${BLOG_URL}/feeds/posts/default?alt=json&max-results=${BATCH_SIZE}`;
      if(nextToken) url += `&start-index=${nextToken}`;

      const res  = await fetch(url);
      if(!res.ok) throw new Error('Feed fetch failed');
      const data = await res.json();
      const feed = data.feed;

      /* Parse entries */
      const entries = feed.entry || [];
      entries.forEach(e => {
        const title = e.title?.$t || '';
        const link  = (e.link || []).find(l => l.rel === 'alternate')?.href || '#';
        const date  = e.published?.$t || '';
        const thumb = e.media$thumbnail?.url?.replace(/\/s[0-9]+(-[a-z])?\//,'/s400/') || '';
        const cats  = (e.category || []).map(c => c.term);
        allPosts.push({ title, link, date, thumb, cats });
      });

      /* Check if more pages exist via openSearch total */
      const total   = parseInt(feed.openSearch$totalResults?.$t || '0');
      const loaded  = allPosts.length;
      nextToken     = loaded < total ? loaded + 1 : null;

    } while(nextToken);

  } catch(err){
    console.error('[IlmuAlam Sitemap]', err);
    errorBox.style.display = 'block';
  }

  isLoading = false;
  buildUI();
}

/* ── Build tabs — horizontal scroll row ── */
function buildTabs(){
  const labelMap = {};
  allPosts.forEach(p => {
    p.cats.forEach(c => {
      labelMap[c] = (labelMap[c] || 0) + 1;
    });
  });

  /* Sort by post count desc */
  const sorted = Object.entries(labelMap).sort((a,b) => b[1]-a[1]);

  document.getElementById('ilmx-count-all').textContent = allPosts.length;

  const row = document.getElementById('ilmx-tabs');
  sorted.forEach(([lbl, cnt]) => {
    const btn = document.createElement('button');
    btn.className     = 'ilmx-smp-tab';
    btn.dataset.label = lbl;
    btn.setAttribute('role','tab');
    btn.setAttribute('aria-selected','false');
    btn.innerHTML = `${escHtml(lbl)} <span class="ilmx-smp-tab-count">${cnt}</span>`;
    row.appendChild(btn);
  });

  /* Hide right-fade arrow when scrolled to end */
  const arrow = document.getElementById('ilmx-filter-arrow');
  row.addEventListener('scroll', () => {
    const atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 8;
    arrow.classList.toggle('hidden', atEnd);
  }, {passive:true});

  /* Update hero stats */
  const years = new Set(allPosts.map(p => p.date.slice(0,4)));
  document.getElementById('ilmx-total-count').textContent = allPosts.length;
  document.getElementById('ilmx-cat-count').textContent   = sorted.length;
  document.getElementById('ilmx-year-count').textContent  = years.size;
}

/* ── Filter + sort posts ── */
function applyFilter(){
  let result = allPosts.slice();

  /* Label filter */
  if(activeLabel !== 'all'){
    result = result.filter(p => p.cats.includes(activeLabel));
  }

  /* Search filter */
  if(searchQuery.trim()){
    const q = searchQuery.toLowerCase();
    result = result.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.cats.some(c => c.toLowerCase().includes(q))
    );
  }

  /* Sort */
  switch(sortMode){
    case 'newest': result.sort((a,b) => new Date(b.date) - new Date(a.date)); break;
    case 'oldest': result.sort((a,b) => new Date(a.date) - new Date(b.date)); break;
    case 'az':     result.sort((a,b) => a.title.localeCompare(b.title,'ms')); break;
    case 'za':     result.sort((a,b) => b.title.localeCompare(a.title,'ms')); break;
  }

  filteredPosts = result;
  currentPage   = 1;
  renderPage();
}

/* ── Render current page of cards ── */
function renderPage(){
  const total   = filteredPosts.length;
  const pages   = Math.ceil(total / PER_PAGE);
  const start   = (currentPage - 1) * PER_PAGE;
  const slice   = filteredPosts.slice(start, start + PER_PAGE);

  /* Results label */
  const from = total ? start + 1 : 0;
  const to   = Math.min(start + PER_PAGE, total);
  resultsLbl.innerHTML = total
    ? `Menunjukkan <strong>${from}–${to}</strong> daripada <strong>${total}</strong> artikel`
    : 'Tiada artikel ditemui';

  /* Grid */
  if(total === 0){
    grid.innerHTML = `
      <div class="ilmx-smp-empty" style="grid-column:1/-1">
        <div class="ilmx-smp-empty-icon">🔍</div>
        <div class="ilmx-smp-empty-title">Tiada Artikel Ditemui</div>
        <p>Cuba kata kunci lain atau pilih kategori yang berbeza.</p>
      </div>`;
    pagination.innerHTML = '';
    return;
  }

  grid.innerHTML = slice.map(p => cardHTML(p)).join('');
  renderPagination(pages);

  /* Lazy images */
  grid.querySelectorAll('img[data-src]').forEach(img => {
    if('IntersectionObserver' in window){
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if(en.isIntersecting){
            en.target.src = en.target.dataset.src;
            en.target.removeAttribute('data-src');
            io.disconnect();
          }
        });
      },{rootMargin:'200px'});
      io.observe(img);
    } else {
      img.src = img.dataset.src;
    }
  });
}

/* ── Card HTML ── */
function cardHTML(p){
  const date    = p.date ? new Date(p.date).toLocaleDateString('ms-MY',{day:'numeric',month:'short',year:'numeric'}) : '';
  const label   = p.cats[0] || 'Umum';
  const thumbEl = p.thumb
    ? `<img data-src="${p.thumb}" alt="${escHtml(p.title)}" width="400" height="225" loading="lazy" style="display:block">`
    : `<div class="ilmx-smp-card-thumb-placeholder">📖</div>`;

  return `<a href="${p.link}" class="ilmx-smp-card" target="_blank" rel="noopener">
    <div class="ilmx-smp-card-thumb">${thumbEl}</div>
    <div class="ilmx-smp-card-body">
      <span class="ilmx-smp-card-label">${escHtml(label)}</span>
      <div class="ilmx-smp-card-title">${escHtml(p.title)}</div>
      <div class="ilmx-smp-card-date">📅 ${date}</div>
    </div>
  </a>`;
}

/* ── Pagination ── */
function renderPagination(pages){
  if(pages <= 1){ pagination.innerHTML = ''; return; }

  const cur = currentPage;
  let html  = '';

  /* Prev */
  html += `<button class="ilmx-smp-page-btn" id="ilmx-pg-prev" ${cur===1?'disabled':''} aria-label="Halaman sebelumnya">‹</button>`;

  /* Page numbers with ellipsis */
  const range = pageRange(cur, pages);
  let prev = null;
  range.forEach(n => {
    if(prev !== null && n - prev > 1){
      html += `<span class="ilmx-smp-page-ellipsis">…</span>`;
    }
    html += `<button class="ilmx-smp-page-btn${n===cur?' active':''}" data-page="${n}" aria-label="Halaman ${n}" aria-current="${n===cur?'page':'false'}">${n}</button>`;
    prev = n;
  });

  /* Next */
  html += `<button class="ilmx-smp-page-btn" id="ilmx-pg-next" ${cur===pages?'disabled':''} aria-label="Halaman seterusnya">›</button>`;

  pagination.innerHTML = html;

  pagination.querySelector('#ilmx-pg-prev')?.addEventListener('click',()=>goPage(cur-1));
  pagination.querySelector('#ilmx-pg-next')?.addEventListener('click',()=>goPage(cur+1));
  pagination.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click',()=>goPage(parseInt(btn.dataset.page)));
  });
}

function pageRange(cur, total){
  /* Always show first, last, cur-1, cur, cur+1 */
  const set = new Set([1, total, cur, cur-1, cur+1].filter(n => n>=1 && n<=total));
  return [...set].sort((a,b)=>a-b);
}

function goPage(n){
  currentPage = n;
  renderPage();
  /* Scroll to grid top */
  const gridTop = grid.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({top: gridTop, behavior:'smooth'});
}

/* ── Build full UI after data loaded ── */
function buildUI(){
  buildTabs();
  applyFilter();
}

/* ── Escape HTML ── */
function escHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Events ── */

/* Tab click — delegated on scroll row */
document.getElementById('ilmx-tabs').addEventListener('click', e => {
  const btn = e.target.closest('.ilmx-smp-tab');
  if(!btn) return;
  document.querySelectorAll('#ilmx-tabs .ilmx-smp-tab').forEach(t => {
    t.classList.remove('active');
    t.setAttribute('aria-selected','false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
  activeLabel = btn.dataset.label;
  /* Snap active tab into view */
  btn.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  applyFilter();
});

/* Search */
let searchTimer;
searchInput.addEventListener('input', () => {
  clearBtn.classList.toggle('visible', !!searchInput.value);
  clearTimeout(searchTimer);
  searchTimer = setTimeout(()=>{
    searchQuery = searchInput.value;
    applyFilter();
  }, 280);
});

clearBtn.addEventListener('click', ()=>{
  searchInput.value = '';
  searchQuery       = '';
  clearBtn.classList.remove('visible');
  applyFilter();
  searchInput.focus();
});

/* Sort */
sortSel.addEventListener('change', ()=>{
  sortMode = sortSel.value;
  applyFilter();
});

/* Back to top */
window.addEventListener('scroll', ()=>{
  backtop.classList.toggle('visible', window.scrollY > 400);
}, {passive:true});

backtop.addEventListener('click', ()=>{
  window.scrollTo({top:0,behavior:'smooth'});
});

/* ── Boot ── */
setTimeout(()=>{ fetchAllPosts(); }, 300);
  
  function ilmxSitemapFaq(btn){
  const ans=btn.nextElementSibling;
  const icon=btn.querySelector(".ilmx-sitemap-faq-icon");

  ans.classList.toggle("open");
  icon.textContent=ans.classList.contains("open")?"\u207B":"+";
}

})();
</script>
