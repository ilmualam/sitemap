/**
   IlmuAlam Sitemap v3.1
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

/* ── DOM refs (resolved once the DOM is ready, see init()) ── */
let grid, pagination, searchInput, clearBtn, sortSel, resultsLbl, errorBox, backtop, tabsRow;

/* ── Token-chain fetch: load ALL posts ── */
async function fetchAllPosts(){
  let nextToken = null;

  try {
    do {
      let url = `${BLOG_URL}/feeds/posts/default?alt=json&max-results=${BATCH_SIZE}`;
      if(nextToken) url += `&start-index=${nextToken}`;

      const res  = await fetch(url);
      if(!res.ok) throw new Error('Feed fetch failed');
      const data = await res.json();
      const feed = data.feed;

      /* Parse entries */
      const entries = feed?.entry || [];
      entries.forEach(e => {
        const title = e.title?.$t || '';
        const link  = (e.link || []).find(l => l.rel === 'alternate')?.href || '#';
        const date  = e.published?.$t || '';
        const thumb = e.media$thumbnail?.url?.replace(/\/s[0-9]+(-[a-z])?\//,'/s400/') || '';
        const cats  = (e.category || []).map(c => c.term);
        allPosts.push({ title, link, date, thumb, cats });
      });

      /* Check if more pages exist via openSearch total */
      const total   = parseInt(feed?.openSearch$totalResults?.$t || '0');
      const loaded  = allPosts.length;
      nextToken     = (entries.length && loaded < total) ? loaded + 1 : null;

    } while(nextToken);

  } catch(err){
    console.error('[IlmuAlam Sitemap]', err);
    if(errorBox) errorBox.style.display = 'block';
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

  const countAll = document.getElementById('ilmx-count-all');
  if(countAll) countAll.textContent = allPosts.length;

  tabsRow.innerHTML = '';
  sorted.forEach(([lbl, cnt]) => {
    const btn = document.createElement('button');
    btn.className     = 'ilmx-smp-tab';
    btn.type          = 'button';
    btn.dataset.label = lbl;
    btn.setAttribute('role','tab');
    btn.setAttribute('aria-selected','false');
    btn.innerHTML = `${escHtml(lbl)} <span class="ilmx-smp-tab-count">${cnt}</span>`;
    tabsRow.appendChild(btn);
  });

  /* Hide right-fade arrow when scrolled to end */
  const arrow = document.getElementById('ilmx-filter-arrow');
  if(arrow){
    tabsRow.addEventListener('scroll', () => {
      const atEnd = tabsRow.scrollLeft + tabsRow.clientWidth >= tabsRow.scrollWidth - 8;
      arrow.classList.toggle('hidden', atEnd);
    }, {passive:true});
  }

  /* Update hero stats */
  const years = new Set(allPosts.map(p => p.date.slice(0,4)).filter(Boolean));
  const totalEl = document.getElementById('ilmx-total-count');
  const catEl   = document.getElementById('ilmx-cat-count');
  const yearEl  = document.getElementById('ilmx-year-count');
  if(totalEl) totalEl.textContent = allPosts.length;
  if(catEl)   catEl.textContent   = sorted.length;
  if(yearEl)  yearEl.textContent  = years.size;
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
  if(resultsLbl){
    resultsLbl.innerHTML = total
      ? `Menunjukkan <strong>${from}–${to}</strong> daripada <strong>${total}</strong> artikel`
      : 'Tiada artikel ditemui';
  }

  /* Grid */
  if(total === 0){
    grid.innerHTML = `
      <div class="ilmx-smp-empty" style="grid-column:1/-1">
        <div class="ilmx-smp-empty-icon">🔍</div>
        <div class="ilmx-smp-empty-title">Tiada Artikel Ditemui</div>
        <p>Cuba kata kunci lain atau pilih kategori yang berbeza.</p>
      </div>`;
    pagination.innerHTML = '';
    updateStructuredData([]);
    return;
  }

  grid.innerHTML = slice.map(p => cardHTML(p)).join('');
  renderPagination(pages);
  updateStructuredData(slice, start);
}

/* ── Card HTML ── */
function cardHTML(p){
  const date    = p.date ? new Date(p.date).toLocaleDateString('ms-MY',{day:'numeric',month:'short',year:'numeric'}) : '';
  const label   = p.cats[0] || 'Umum';
  const alt     = escHtml(p.title || 'Artikel IlmuAlam');
  const href    = escHtml(p.link);
  const thumbEl = p.thumb
    ? `<img src="${escHtml(p.thumb)}" alt="${alt}" width="400" height="225" loading="lazy" decoding="async" style="display:block">`
    : `<div class="ilmx-smp-card-thumb-placeholder">📖</div>`;

  return `<a href="${href}" class="ilmx-smp-card" rel="bookmark">
    <div class="ilmx-smp-card-thumb">${thumbEl}</div>
    <div class="ilmx-smp-card-body">
      <span class="ilmx-smp-card-label">${escHtml(label)}</span>
      <h3 class="ilmx-smp-card-title">${escHtml(p.title)}</h3>
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
  html += `<button class="ilmx-smp-page-btn" id="ilmx-pg-prev" type="button" ${cur===1?'disabled':''} aria-label="Halaman sebelumnya">‹</button>`;

  /* Page numbers with ellipsis */
  const range = pageRange(cur, pages);
  let prev = null;
  range.forEach(n => {
    if(prev !== null && n - prev > 1){
      html += `<span class="ilmx-smp-page-ellipsis">…</span>`;
    }
    html += `<button class="ilmx-smp-page-btn${n===cur?' active':''}" type="button" data-page="${n}" aria-label="Halaman ${n}" aria-current="${n===cur?'page':'false'}">${n}</button>`;
    prev = n;
  });

  /* Next */
  html += `<button class="ilmx-smp-page-btn" id="ilmx-pg-next" type="button" ${cur===pages?'disabled':''} aria-label="Halaman seterusnya">›</button>`;

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

/* ── Escape HTML (safe for both text content and attribute values) ── */
function escHtml(s){
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

/* ── SEO: keep an ItemList JSON-LD in sync with what's currently on screen ──
   Lets search engines understand the sitemap's contents even though
   the cards themselves are rendered client-side. */
function updateStructuredData(items, offset){
  let el = document.getElementById('ilmx-sitemap-jsonld');
  if(!el){
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id   = 'ilmx-sitemap-jsonld';
    document.head.appendChild(el);
  }
  const json = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': activeLabel === 'all' ? 'Sitemap Artikel — IlmuAlam' : `Artikel: ${activeLabel} — IlmuAlam`,
    'url': BLOG_URL,
    'isPartOf': { '@type': 'WebSite', 'name': 'IlmuAlam', 'url': BLOG_URL },
    'mainEntity': {
      '@type': 'ItemList',
      'numberOfItems': items.length,
      'itemListElement': items.map((p, i) => ({
        '@type': 'ListItem',
        'position': (offset || 0) + i + 1,
        'url': p.link,
        'name': p.title
      }))
    }
  };
  el.textContent = JSON.stringify(json);
}

/* ── FAQ accordion toggle ──
   Called from an inline onclick="ilmxSitemapFaq(this)" in the page markup,
   so it must live on window — it previously stayed trapped inside this
   module's closure and every click threw "ilmxSitemapFaq is not defined". */
function ilmxSitemapFaq(btn){
  const ans  = btn.nextElementSibling;
  const icon = btn.querySelector('.ilmx-sitemap-faq-icon');
  if(!ans) return;

  const open = ans.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
  if(icon) icon.textContent = open ? '−' : '+';
}
window.ilmxSitemapFaq = ilmxSitemapFaq;

/* ── Wire up events (elements are guaranteed to exist once init() runs) ── */
function bindEvents(){
  /* Tab click — delegated on scroll row */
  tabsRow.addEventListener('click', e => {
    const btn = e.target.closest('.ilmx-smp-tab');
    if(!btn) return;
    tabsRow.querySelectorAll('.ilmx-smp-tab').forEach(t => {
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
  if(searchInput){
    let searchTimer;
    searchInput.addEventListener('input', () => {
      if(clearBtn) clearBtn.classList.toggle('visible', !!searchInput.value);
      clearTimeout(searchTimer);
      searchTimer = setTimeout(()=>{
        searchQuery = searchInput.value;
        applyFilter();
      }, 280);
    });
  }

  if(clearBtn && searchInput){
    clearBtn.addEventListener('click', ()=>{
      searchInput.value = '';
      searchQuery       = '';
      clearBtn.classList.remove('visible');
      applyFilter();
      searchInput.focus();
    });
  }

  /* Sort */
  if(sortSel){
    sortSel.addEventListener('change', ()=>{
      sortMode = sortSel.value;
      applyFilter();
    });
  }

  /* Back to top */
  if(backtop){
    window.addEventListener('scroll', ()=>{
      backtop.classList.toggle('visible', window.scrollY > 400);
    }, {passive:true});

    backtop.addEventListener('click', ()=>{
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }
}

/* ── Boot ──
   Resolve DOM refs and bind events only once the document is actually
   ready. Previously these ran the instant the script tag loaded, so if
   the widget's markup hadn't been parsed yet, getElementById() returned
   null and the very next call (.addEventListener on a null tabs row)
   threw — silently killing search, sort, pagination and the FAQ toggle
   in one shot. */
function init(){
  grid        = document.getElementById('ilmx-grid');
  pagination  = document.getElementById('ilmx-pagination');
  searchInput = document.getElementById('ilmx-search');
  clearBtn    = document.getElementById('ilmx-search-clear');
  sortSel     = document.getElementById('ilmx-sort');
  resultsLbl  = document.getElementById('ilmx-results-label');
  errorBox    = document.getElementById('ilmx-error');
  backtop     = document.getElementById('ilmx-backtop');
  tabsRow     = document.getElementById('ilmx-tabs');

  if(!grid || !pagination || !tabsRow){
    console.warn('[IlmuAlam Sitemap] Required elements not found on this page — skipping init.');
    return;
  }

  bindEvents();
  setTimeout(fetchAllPosts, 300);
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', init, {once:true});
} else {
  init();
}

})();
