<style>
    .ilmx-ist-wrap {
        all: initial;
        display: block;
        box-sizing: border-box;
        font-family: -apple-system, 'Inter', sans-serif;
        font-size: 16px;
        background: #fff;
        color: #1a1a1a;
        border-radius: 10px;
        line-height: 1.6;
        max-width: 100%;
        margin: 0 auto;
        padding: 10px;
        transition: all .25s;
    }

    .ilmx-ist-answerbox {
        background: linear-gradient(135deg, #f0faf3 0%, #e6f7ec 100%);
        border-left: 5px solid #249749;
        border-radius: 0 12px 12px 0;
        padding: clamp(16px, 4vw, 24px);
        margin: 0 0 32px;
    }

    .ilmx-ist-answerbox h2 {
        font-size: clamp(1rem, 2.5vw, 1.15rem);
        color: #0c3808;
        margin: 0 0 10px;
        font-weight: 700;
    }

    .ilmx-ist-answerbox p {
        margin: 0;
        font-size: clamp(0.9rem, 2vw, 0.97rem);
        color: #1f3d1f;
        line-height: 1.7;
    }

    .ilmx-ist-wrap h2 {
        font-size: clamp(1.2rem, 3vw, 1.45rem);
        font-weight: 800;
        color: #0c3808;
        margin: 40px 0 14px;
        line-height: 1.3;
        font-size: clamp(1.2rem, 3vw, 1.45rem);
        font-weight: 800;
        color: #0c3808;
        margin: 40px 0 14px;
    }

    .ilmx-ist-wrap h3 {
        font-size: clamp(1rem, 2.5vw, 1.18rem);
        font-weight: 700;
        color: #1a3d1a;
        margin: 28px 0 10px;
    }

    .ilmx-ist-wrap p {
        margin: 0 0 16px;
        color: #2a2a2a;
    }

    .ilmx-ist-wrap ul,
    .ilmx-ist-wrap ol {
        padding-left: 22px;
        margin: 0 0 18px;
    }

    .ilmx-ist-wrap li {
        margin-bottom: 8px;
        font-size: clamp(0.88rem, 2vw, 0.95rem);
        line-height: 1.7;
        color: #2a2a2a;
    }

    .ilmx-ist-wrap strong {
        font-weight: 700;
        color: #0c3808;
    }

    .ilmx-ist-niat {
        background: #0c3808;
        border-radius: 14px;
        padding: clamp(20px, 5vw, 32px);
        margin: 24px 0;
        text-align: center;
    }

    .ilmx-ist-niat .arabic {
        font-family: 'Amiri', 'Noto Naskh Arabic', 'Traditional Arabic', 'Scheherazade New', serif;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2;
        direction: rtl;
        text-align: right;
        color: #f4e5a0;
        margin-bottom: 14px;
    }

    .ilmx-ist-niat .rumi {
        font-size: clamp(0.9rem, 2.2vw, 1rem);
        color: #a8e6b8;
        font-style: italic;
        margin-bottom: 10px;
    }

    .ilmx-ist-niat .terjemahan {
        font-size: clamp(0.85rem, 2vw, 0.95rem);
        color: #d4f0de;
        line-height: 1.6;
    }

    .ilmx-ist-doa {
        background: linear-gradient(160deg, #0a3206 0%, #0f4a0f 100%);
        border-radius: 16px;
        padding: clamp(22px, 5vw, 36px);
        margin: 28px 0;
        position: relative;
        overflow: hidden;
    }

    .ilmx-ist-doa::before {
        content: '';
        position: absolute;
        top: -30px;
        right: -30px;
        width: 120px;
        height: 120px;
        background: rgba(36, 151, 73, 0.15);
        border-radius: 50%;
    }

    .ilmx-ist-doa .label {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        color: #7dd8a0;
        text-transform: uppercase;
        margin-bottom: 16px;
    }

    .ilmx-ist-doa .arabic {
        font-family: 'Amiri', 'Noto Naskh Arabic', 'Traditional Arabic', 'Scheherazade New', serif;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2;
        direction: rtl;
        text-align: right;
        color: #f4e5a0;
        margin-bottom: 18px;
    }

    .ilmx-ist-doa .rumi {
        font-size: clamp(0.85rem, 2vw, 0.95rem);
        color: #b8e8c8;
        font-style: italic;
        line-height: 1.9;
        margin-bottom: 14px;
    }

    .ilmx-ist-doa .terjemahan {
        font-size: clamp(0.82rem, 1.8vw, 0.9rem);
        color: #cce8d8;
        line-height: 1.8;
        padding-top: 14px;
        border-top: 1px solid rgba(255, 255, 255, 0.12);
    }

    .ilmx-ist-doa-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        flex-wrap: wrap;
    }

    .ilmx-ist-btn-copy,
    .ilmx-ist-btn-wa {
        border: none;
        border-radius: 8px;
        padding: 9px 18px;
        font-size: 0.85rem;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.15s, opacity 0.15s;
        font-family: inherit;
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }

    .ilmx-ist-btn-copy {
        background: #249749;
        color: #fff;
    }

    .ilmx-ist-btn-wa {
        background: #25d366;
        color: #fff;
    }

    .ilmx-ist-btn-copy:active,
    .ilmx-ist-btn-wa:active {
        transform: scale(0.95);
        opacity: 0.88;
    }

    .ilmx-ist-steps {
        margin: 28px 0;
    }

    .ilmx-ist-step {
        display: flex;
        gap: 16px;
        margin-bottom: 20px;
        align-items: flex-start;
    }

    .ilmx-ist-step-num {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        background: #249749;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 1rem;
        box-shadow: 0 2px 8px rgba(36, 151, 73, 0.3);
    }

    .ilmx-ist-step-body {
        flex: 1;
        padding-top: 6px;
    }

    .ilmx-ist-step-title {
        font-weight: 700;
        color: #0c3808;
        font-size: clamp(0.92rem, 2.2vw, 1rem);
        margin-bottom: 5px;
    }

    .ilmx-ist-step-desc {
        font-size: clamp(0.85rem, 2vw, 0.93rem);
        color: #3a3a3a;
        line-height: 1.7;
    }

    .ilmx-ist-step-note {
        font-size: 0.82rem;
        color: #249749;
        font-style: italic;
        margin-top: 4px;
    }

    .ilmx-ist-selector {
        background: #f7fdf9;
        border: 1.5px solid #c8e8d0;
        border-radius: 16px;
        padding: clamp(20px, 4vw, 30px);
        margin: 32px 0;
    }

    .ilmx-ist-selector h3 {
        margin: 0 0 16px !important;
        font-size: clamp(0.95rem, 2.5vw, 1.08rem) !important;
        color: #0c3808 !important;
    }

    .ilmx-ist-sitbtns {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 20px;
    }

    .ilmx-ist-sitbtn {
        border: 2px solid #249749;
        background: #fff;
        color: #249749;
        border-radius: 40px;
        padding: 8px 18px;
        font-size: 0.88rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        font-family: inherit;
    }

    .ilmx-ist-sitbtn.active,
    .ilmx-ist-sitbtn:hover {
        background: #249749;
        color: #fff;
    }

    .ilmx-ist-sit-content {
        display: none;
        animation: ilmxFadeIn 0.3s ease;
    }

    .ilmx-ist-sit-content.show {
        display: block;
    }

    @keyframes ilmxFadeIn {
        from {
            opacity: 0;
            transform: translateY(6px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .ilmx-ist-sit-card {
        background: #fff;
        border-radius: 12px;
        padding: 18px;
        border: 1px solid #d8ead0;
    }

    .ilmx-ist-sit-card .sit-title {
        font-weight: 700;
        color: #0c3808;
        font-size: 0.97rem;
        margin-bottom: 8px;
    }

    .ilmx-ist-sit-card p {
        font-size: 0.9rem !important;
        color: #2a2a2a !important;
        margin: 0 0 10px !important;
    }

    .ilmx-ist-sit-card .doa-ringkas {
        background: #0c3808;
        color: #d4f0de;
        border-radius: 8px;
        padding: 12px 16px;
        font-size: 0.87rem;
        line-height: 1.8;
        margin-top: 10px;
        font-style: italic;
    }

    .ilmx-ist-waktu-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        font-size: clamp(0.82rem, 1.9vw, 0.9rem);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    }

    .ilmx-ist-waktu-table th {
        background: #0c3808;
        color: #a8e6b8;
        padding: 12px 16px;
        text-align: left;
        font-weight: 700;
        font-size: 0.82rem;
        letter-spacing: 0.05em;
    }

    .ilmx-ist-waktu-table td {
        padding: 11px 16px;
        border-bottom: 1px solid #e8f4eb;
        vertical-align: top;
        line-height: 1.6;
    }

    .ilmx-ist-waktu-table tr:nth-child(even) td {
        background: #f7fdf9;
    }

    .ilmx-ist-waktu-table tr:last-child td {
        border-bottom: none;
    }

    .badge-haram {
        display: inline-block;
        background: #fee2e2;
        color: #b91c1c;
        border-radius: 5px;
        padding: 1px 8px;
        font-size: 0.75rem;
        font-weight: 700;
        margin-left: 6px;
    }

    .badge-sunat {
        display: inline-block;
        background: #dcfce7;
        color: #166534;
        border-radius: 5px;
        padding: 1px 8px;
        font-size: 0.75rem;
        font-weight: 700;
        margin-left: 6px;
    }

    .ilmx-ist-tanda {
        background: linear-gradient(135deg, #fff7e6 0%, #fef3c7 100%);
        border: 1.5px solid #f59e0b;
        border-radius: 14px;
        padding: clamp(18px, 4vw, 28px);
        margin: 28px 0;
    }

    .ilmx-ist-tanda h3 {
        color: #92400e !important;
        margin: 0 0 14px !important;
        font-size: clamp(0.97rem, 2.3vw, 1.08rem) !important;
    }

    .ilmx-ist-tanda-item {
        display: flex;
        gap: 12px;
        align-items: flex-start;
        margin-bottom: 12px;
    }

    .ilmx-ist-tanda-icon {
        font-size: 1.1rem;
        flex-shrink: 0;
        margin-top: 1px;
    }

    .ilmx-ist-tanda-text {
        font-size: clamp(0.87rem, 2vw, 0.93rem);
        color: #3a2800;
        line-height: 1.7;
    }

    .ilmx-ist-hadith {
        background: #f0faf3;
        border-radius: 12px;
        padding: clamp(16px, 3.5vw, 24px);
        margin: 24px 0;
        border: 1px solid #c8e8d0;
        position: relative;
        padding-left: clamp(20px, 5vw, 36px);
    }

    .ilmx-ist-hadith::before {
        content: '"';
        position: absolute;
        left: 14px;
        top: 8px;
        font-size: 2.5rem;
        color: #249749;
        opacity: 0.35;
        line-height: 1;
    }

    .ilmx-ist-hadith p {
        font-style: italic;
        color: #1f3d1f !important;
        margin: 0 0 8px !important;
        font-size: clamp(0.88rem, 2vw, 0.95rem) !important;
    }

    .ilmx-ist-hadith .source {
        font-size: 0.8rem !important;
        color: #249749 !important;
        font-style: normal !important;
        font-weight: 600;
    }

    .ilmx-ist-kesilapan {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        margin: 20px 0;
    }

    @media (max-width: 540px) {
        .ilmx-ist-kesilapan {
            grid-template-columns: 1fr;
        }
    }

    .ilmx-ist-salah {
        background: #fee2e2;
        border-radius: 10px;
        padding: 14px;
        border-left: 4px solid #ef4444;
    }

    .ilmx-ist-betul {
        background: #dcfce7;
        border-radius: 10px;
        padding: 14px;
        border-left: 4px solid #22c55e;
    }

    .ilmx-ist-kesilapan .k-label {
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0.1em;
        margin-bottom: 6px;
        text-transform: uppercase;
    }

    .ilmx-ist-salah .k-label {
        color: #b91c1c;
    }

    .ilmx-ist-betul .k-label {
        color: #15803d;
    }

    .ilmx-ist-kesilapan .k-text {
        font-size: clamp(0.83rem, 1.9vw, 0.9rem);
        line-height: 1.65;
        color: #2a2a2a;
    }

    .ilmx-ist-faq {
        margin: 28px 0;
    }

    .ilmx-ist-faq-item {
        border: 1.5px solid #c8e8d0;
        border-radius: 12px;
        margin-bottom: 12px;
        overflow: hidden;
    }

    .ilmx-ist-faq-q {
        background: #f0faf3;
        padding: 14px 18px;
        font-weight: 700;
        color: #0c3808;
        font-size: clamp(0.87rem, 2vw, 0.95rem);
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        user-select: none;
        gap: 10px;
    }

    .ilmx-ist-faq-q .arrow {
        flex-shrink: 0;
        transition: transform 0.25s;
        font-size: 0.75rem;
        color: #249749;
    }

    .ilmx-ist-faq-item.open .ilmx-ist-faq-q .arrow {
        transform: rotate(180deg);
    }

    .ilmx-ist-faq-a {
        display: none;
        padding: 14px 18px;
        font-size: clamp(0.85rem, 1.9vw, 0.92rem);
        color: #2a2a2a;
        line-height: 1.75;
        border-top: 1px solid #e0f0e4;
    }

    .ilmx-ist-faq-item.open .ilmx-ist-faq-a {
        display: block;
    }

    .ilmx-ist-cluster {
        background: #0c3808;
        border-radius: 14px;
        padding: clamp(20px, 4vw, 28px);
        margin: 36px 0 20px;
    }

    .ilmx-ist-cluster h3 {
        color: #a8e6b8 !important;
        margin: 0 0 14px !important;
        font-size: 0.95rem !important;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }

    .ilmx-ist-cluster ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .ilmx-ist-cluster li {
        margin-bottom: 10px;
        color: #d4f0de;
    }

    .ilmx-ist-cluster a {
        color: #7dd8a0;
        text-decoration: none;
        font-size: 0.9rem;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s;
    }

    .ilmx-ist-cluster a:hover {
        border-color: #7dd8a0;
    }

    .ilmx-ist-cta {
        background: linear-gradient(135deg, #249749 0%, #0c3808 100%);
        border-radius: 14px;
        padding: clamp(18px, 4vw, 26px);
        text-align: center;
        margin: 32px 0;
        color: #fff;
    }

    .ilmx-ist-cta p {
        color: #d4f0de !important;
        font-size: 0.9rem !important;
        margin: 6px 0 0 !important;
    }

    .ilmx-ist-cta strong {
        color: #fff !important;
        font-size: 1.05rem;
    }

    .ilmx-ist-updated {
        display: inline-block;
        background: #f0faf3;
        border: 1px solid #c8e8d0;
        color: #249749;
        font-size: 0.78rem;
        font-weight: 600;
        border-radius: 6px;
        padding: 3px 10px;
        margin-bottom: 18px;
    }

    @media (max-width: 420px) {
        .ilmx-ist-wrap {
            padding: 10px;
        }

        .ilmx-ist-doa-actions {
            flex-direction: column;
        }

        .ilmx-ist-btn-copy,
        .ilmx-ist-btn-wa {
            width: 100%;
            justify-content: center;
        }
    }
</style>

<div class="ilmx-ist-wrap">
    <span class="ilmx-ist-updated">🕐 Dikemas kini: Mei 2026 · Disemak oleh penulis berpengalaman</span>

    <!-- ANSWER BOX -->
    <div class="ilmx-ist-answerbox">
        <h2>📋 Ringkasan Pantas: Cara Solat Istikharah</h2>
        <p>Solat istikharah ialah solat sunat dua rakaat yang dilakukan apabila anda ragu-ragu dalam membuat keputusan
            penting. Caranya mudah - niat dalam hati, solat dua rakaat seperti solat sunat biasa, kemudian baca doa
            istikharah yang diajarkan Nabi ﷺ. Selepas itu, bergerak ke depan dengan hati yang tenang dan bertawakkal
            kepada Allah.</p>
    </div>

    <!-- INTRO -->
    <p>Ada saat dalam hidup kita rasa buntu. Dua pilihan ada di depan mata - kerja yang lebih baik, pasangan hidup,
        keputusan perniagaan - tapi hati masih berbolak-balik. Nak pilih mana satu?</p>
    <p>Di sinilah solat istikharah hadir sebagai solusi. Bukan sekadar ritual, tapi cara kita menyerahkan keputusan
        kepada Allah yang Maha Mengetahui. Rasulullah ﷺ mengajar sahabat-sahabatnya soal istikharah dengan penuh
        perhatian - sama seperti baginda mengajar mereka surah al-Quran.</p>

    <div class="ilmx-ist-hadith">
        <p>Rasulullah ﷺ mengajarkan kami istikharah dalam semua urusan sebagaimana baginda mengajarkan surah daripada
            al-Quran.</p>
        <span class="source">- Hadis Sahih, Riwayat al-Bukhari (no. 1166)</span>
    </div>

    <p>Dalam panduan ini, anda akan dapat niat, langkah-langkah solat, doa penuh (Arab + Rumi + terjemahan), waktu
        terbaik, dan yang paling penting - tanda bahawa istikharah anda diterima Allah.</p>

    <div style="background:#fff;border:1px solid #E2E8F0;border-radius:10px;padding:4px;margin:24px 0;">
        <b> {getToc} $title={Isi Kandungan} $count={Boolean} $expanded={Boolean} </b>
    </div>

    <h2>Apa Itu Solat Istikharah? Maksud &amp; Hukum</h2>
    <p>Perkataan <strong>istikharah</strong>(الاستخارة) berasal dari kata dasar Arab <em>khayr</em>(خَيْر) bermaksud
        kebaikan. Bila ditambah huruf alif-sin-ta', maknanya berubah menjadi <strong>"memohon kebaikan daripada
            Allah"</strong> - bukan kita yang pilih, tapi kita mohon Allah pilihkan yang terbaik untuk kita.</p>

    <p>Hukum solat istikharah adalah <strong>sunat mu'akkad</strong> - sangat digalakkan apabila seseorang berhadapan
        dengan keputusan penting dalam hidupnya.</p>

    <p>Yang penting untuk faham: istikharah bukan untuk semua perkara. Ada batasan yang perlu tahu:</p>
    <ul>
        <li>✅ <strong>Boleh istikharah:</strong> perkara harus (mubah) - jodoh, kerja, pindah rumah, perniagaan,
            keputusan keluarga</li>
        <li>❌ <strong>Tidak perlu istikharah:</strong> perkara yang sudah jelas hukumnya - solat wajib, zakat, menjauhi
            haram</li>
        <li>❌ <strong>Dilarang istikharah:</strong> perkara yang bercanggah syariat - pilih antara halal dan haram tidak
            perlu tanya Allah, kerana jawapannya sudah jelas</li>
    </ul>

    <!-- H2 #2: NIAT -->
    <h2>Niat Solat Istikharah (Arab + Rumi)</h2>
    <p>Niat diucap dalam hati ketika takbiratul ihram - tidak perlu dilafazkan dengan kuat. Berikut niat lengkap:</p>

    <div class="ilmx-ist-niat">
        <span class="arabic">أُصَلِّي سُنَّةَ الاِسْتِخَارَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى</span>
        <span class="rumi">Usolli sunnatal istikharati rak'ataini lillahi ta' ala</span>
        <span class="terjemahan">Maksud: "Sahaja aku menunaikan solat sunat istikharah dua rakaat kerana Allah Taala."
        </span>
    </div>

    <!-- H2 #3: CARA SOLAT LANGKAH -->
    <h2>Cara Solat Istikharah: Panduan Langkah demi Langkah</h2>
    <p>Solat istikharah sama seperti solat sunat biasa - dua rakaat, satu salam. Berikut panduan lengkap:</p>

    <div class="ilmx-ist-steps">
        <div class="ilmx-ist-step">
            <div class="ilmx-ist-step-num">1</div>
            <div class="ilmx-ist-step-body">
                <span class="ilmx-ist-step-title">Berwudhu &amp; Bersedia</span>
                <span class="ilmx-ist-step-desc">Pastikan anda berada dalam keadaan suci dari hadas kecil dan besar.
                    Pilih tempat yang tenang dan bersih. Sunat berpuasa dan banyak istighfar sebelum istikharah untuk
                    lebih khusyuk.</span>
            </div>
        </div>
        <div class="ilmx-ist-step">
            <div class="ilmx-ist-step-num">2</div>
            <div class="ilmx-ist-step-body">
                <span class="ilmx-ist-step-title">Takbiratul Ihram+Niat</span>
                <span class="ilmx-ist-step-desc">Angkat kedua-dua tangan sejajar telinga sambil ucap "Allahu Akbar" .
                    Pada saat ini, niatkan dalam hati untuk solat sunat istikharah dua rakaat.</span>
            </div>
        </div>
        <div class="ilmx-ist-step">
            <div class="ilmx-ist-step-num">3</div>
            <div class="ilmx-ist-step-body">
                <span class="ilmx-ist-step-title">Rakaat Pertama</span>
                <span class="ilmx-ist-step-desc">Baca doa iftitah (sunat), kemudian Surah Al-Fatihah. Selepas
                    Al-Fatihah, bacalah Surah Al-Kafirun. Teruskan dengan rukuk, iktidal, sujud, duduk antara dua sujud,
                    dan sujud kedua seperti biasa.</span>
                <span class="ilmx-ist-step-note">💡 Nota: Mana-mana surah pun dibenarkan, Al-Kafirun hanya saranan para
                    ulama.</span>
            </div>
        </div>
        <div class="ilmx-ist-step">
            <div class="ilmx-ist-step-num">4</div>
            <div class="ilmx-ist-step-body">
                <span class="ilmx-ist-step-title">Rakaat Kedua</span>
                <span class="ilmx-ist-step-desc">Baca Surah Al-Fatihah, diikuti Surah Al-Ikhlas. Teruskan rukuk,
                    iktidal, sujud, duduk antara dua sujud, sujud kedua, kemudian duduk tahiyyat akhir dan beri
                    salam.</span>
            </div>
        </div>
        <div class="ilmx-ist-step">
            <div class="ilmx-ist-step-num">5</div>
            <div class="ilmx-ist-step-body">
                <span class="ilmx-ist-step-title">Baca Doa Istikharah Selepas Salam</span>
                <span class="ilmx-ist-step-desc">Selepas memberi salam, bacalah doa istikharah yang diajarkan Rasulullah
                    ﷺ dengan penuh kekhusyukan. Semasa menyebut bahagian "hadhal-amra"(urusan ini), sebutkan dalam hati
                    perkara yang ingin anda pohon petunjuk.</span>
                <span class="ilmx-ist-step-note">⭐ Ini bahagian paling penting - lihat doa lengkap di bawah.</span>
            </div>
        </div>
        <div class="ilmx-ist-step">
            <div class="ilmx-ist-step-num">6</div>
            <div class="ilmx-ist-step-body">
                <span class="ilmx-ist-step-title">Bertawakkal &amp; Bergerak Maju</span>
                <span class="ilmx-ist-step-desc">Selepas istikharah, bergerak ke depan dengan apa yang terasa lebih
                    lapang di hati. Istikharah bukan tentang menunggu mimpi - ia tentang menyerahkan keputusan kepada
                    Allah kemudian bertindak.</span>
            </div>
        </div>
    </div>

    <!-- H2 #4: DOA ISTIKHARAH -->
    <h2>Doa Istikharah Lengkap (Arab, Rumi &amp; Terjemahan)</h2>
    <p>Ini adalah doa yang diajarkan langsung oleh Rasulullah ﷺ kepada para sahabat. Baca dengan penuh penghayatan dan
        sebutkan urusan anda dalam hati semasa membaca bahagian "hadhal-amra" .</p>

    <div class="ilmx-ist-doa" id="ilmx-doa-istikharah">
        <span class="label">📖 Doa Istikharah - Hadis Riwayat al-Bukhari</span>
        <span class="arabic">اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ
            مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ
            الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي
            وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ
            هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ
            وَاقْدُرْ لِي الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي</span>
        <span class="rumi">Allahumma inni astakhiruka bi'ilmika, wa astaqdiruka bi qudratika, wa as-aluka min fadlikal-'
            azim. Fa innaka taqdiru wa la aqdiru, wa ta'lamu wa la a' lamu, wa anta 'allamul-ghuyub. Allahumma in kunta
            ta' lamu anna hadhal-amra khairun li fi dini wa ma'ashi wa ' aqibati amri faqdurhu li wa yassirhu li thumma
            barik li fihi. Wa in kunta ta'lamu anna hadhal-amra sharrun li fi dini wa ma' ashi wa 'aqibati amri fasrifhu
            ' anni wasrifni 'anhu waqdur li al-khaira haithu kana thumma ardini.</span>
        <span class="terjemahan">Ya Allah, sesungguhnya aku memohon petunjuk-Mu dengan ilmu-Mu, dan aku memohon
            kemampuan dengan kekuasaan-Mu, dan aku memohon kepada-Mu daripada kurnia-Mu yang amat besar. Sesungguhnya
            Engkau Maha Berkuasa, sedangkan aku tidak. Engkau Maha Mengetahui, sedangkan aku tidak. Engkau Maha
            Mengetahui segala yang ghaib. Ya Allah, jika Engkau mengetahui bahawa urusan ini baik untukku dalam agamaku,
            kehidupanku dan akhir urusanku, maka takdirkanlah ia untukku, permudahkanlah ia bagiku, kemudian berkatilah
            aku padanya. Dan jika Engkau mengetahui bahawa urusan ini buruk untukku dalam agamaku, kehidupanku dan akhir
            urusanku, maka jauhkanlah ia daripadaku dan jauhkanlah aku daripadanya, dan takdirkanlah kebaikan untukku di
            mana sahaja ia berada, kemudian jadikanlah aku redha dengannya.</span>

        <div class="ilmx-ist-doa-actions">
            <button class="ilmx-ist-btn-copy" onclick="ilmxIstCopyDoa()">📋 Salin Doa</button>
            <button class="ilmx-ist-btn-wa" onclick="ilmxIstShareWa()">📲 Kongsi WhatsApp</button>
        </div>
    </div>

    <!-- H2 #5: SITUATION SELECTOR -->
    <h2>🎯 Contoh Lafaz Doa Mengikut Situasi Anda</h2>
    <p>Semasa membaca doa di bahagian "hadhal-amra"(urusan ini), anda boleh sebutkan urusan spesifik dalam hati atau doa
        dengan bahasa sendiri selepasnya. Pilih situasi anda:</p>

    <div class="ilmx-ist-selector">
        <h3>Pilih Situasi Anda:</h3>
        <div class="ilmx-ist-sitbtns">
            <button class="ilmx-ist-sitbtn active" onclick="ilmxIstShowSit('jodoh', this)">💍 Jodoh &amp;
                Perkahwinan</button>
            <button class="ilmx-ist-sitbtn" onclick="ilmxIstShowSit('kerja', this)">💼 Kerja &amp; Kerjaya</button>
            <button class="ilmx-ist-sitbtn" onclick="ilmxIstShowSit('perniagaan', this)">🏪 Perniagaan</button>
            <button class="ilmx-ist-sitbtn" onclick="ilmxIstShowSit('umum', this)">🌟 Urusan Lain</button>
        </div>

        <div class="ilmx-ist-sit-content show" id="ilmx-sit-jodoh">
            <div class="ilmx-ist-sit-card">
                <span class="sit-title">💍 Istikharah untuk Jodoh &amp; Perkahwinan</span>
                <p>Sesuai untuk: memilih pasangan, menerima atau menolak pinangan, keputusan untuk berkahwin atau
                    bertunang.</p>
                <p>Semasa doa, sebutkan dalam hati: <em>"...urusan perkahwinan saya dengan [nama]..." </em>atau
                    <em>"...memilih antara kedua-dua lelaki/wanita yang meminang saya..." </em></p>
                <span class="doa-ringkas">Contoh tambahan selepas doa: "Ya Allah, jika dia adalah jodoh terbaik untukku
                    untuk dunia dan akhirat, permudahkanlah jalan pertemuan kami. Jika tidak, jauhkanlah kami dengan
                    cara yang baik." </span>
            </div>
        </div>

        <div class="ilmx-ist-sit-content" id="ilmx-sit-kerja">
            <div class="ilmx-ist-sit-card">
                <span class="sit-title">💼 Istikharah untuk Kerja &amp; Kerjaya</span>
                <p>Sesuai untuk: tawaran kerja baru, keputusan sambung belajar, pilih antara dua syarikat, keputusan
                    resign.</p>
                <p>Semasa doa, sebutkan dalam hati: <em>"...tawaran pekerjaan di [nama syarikat]..." </em>atau
                    <em>"...keputusan untuk berhenti kerja dan memulakan perniagaan..." </em></p>
                <span class="doa-ringkas">Contoh tambahan selepas doa: "Ya Allah, jika pekerjaan ini membawa keberkatan
                    untuk agama, keluarga dan kehidupanku, permudahkanlah jalannya. Jika sebaliknya, tunjukkanlah jalan
                    yang lebih baik." </span>
            </div>
        </div>

        <div class="ilmx-ist-sit-content" id="ilmx-sit-perniagaan">
            <div class="ilmx-ist-sit-card">
                <span class="sit-title">🏪 Istikharah untuk Perniagaan</span>
                <p>Sesuai untuk: memulakan perniagaan baru, membuat pelaburan, keputusan penting dalam perniagaan,
                    membeli hartanah.</p>
                <p>Semasa doa, sebutkan dalam hati: <em>"...perniagaan [jenis perniagaan] yang ingin aku mulakan..."
                    </em>atau <em>"...pelaburan ini yang bernilai [jumlah]..." </em></p>
                <span class="doa-ringkas">Contoh tambahan selepas doa: "Ya Allah, jika perniagaan ini adalah sumber
                    rezeki yang halal dan membawa keberkatan, bukakanlah pintu jalannya. Jika ia akan membawa mudarat,
                    jauhkanlah aku daripadanya." </span>
            </div>
        </div>

        <div class="ilmx-ist-sit-content" id="ilmx-sit-umum">
            <div class="ilmx-ist-sit-card">
                <span class="sit-title">🌟 Istikharah untuk Urusan Lain</span>
                <p>Sesuai untuk: pindah rumah, keputusan keluarga, melanjutkan pengajian, keputusan perubatan, dan
                    pelbagai urusan lain.</p>
                <p>Istikharah bukan hanya untuk perkara besar. Nabi ﷺ bersabda: <em>"...dalam semua urusan..." </em>-
                    bermakna urusan kecil pun boleh dibawa kepada Allah.</p>
                <span class="doa-ringkas">Cara mudah: Selepas doa, berdoalah dalam bahasa sendiri. Allah faham setiap
                    bahasa dan setiap rintihan hati.</span>
            </div>
        </div>
    </div>

    <!-- H2 #6: WAKTU TERBAIK -->
    <h2>Waktu Solat Istikharah: Bila Boleh &amp; Tidak Boleh</h2>
    <p>Solat istikharah boleh dilakukan pada bila-bila masa, <strong>kecuali pada waktu-waktu yang dilarang
            bersolat</strong>. Berikut jadual lengkap:</p>

    <table class="ilmx-ist-waktu-table">
        <thead>
            <tr>
                <th>Waktu</th>
                <th>Status</th>
                <th>Catatan</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Selepas Subuh hingga matahari naik sepenuhnya</strong></td>
                <td><span class="badge-haram">Haram</span></td>
                <td>Kira-kira 20 minit selepas terbit fajar</td>
            </tr>
            <tr>
                <td><strong>Ketika matahari tepat di atas kepala (tengah hari)</strong></td>
                <td><span class="badge-haram">Haram</span></td>
                <td>Beberapa minit sebelum masuk waktu Zohor</td>
            </tr>
            <tr>
                <td><strong>Selepas Asar hingga matahari terbenam sepenuhnya</strong></td>
                <td><span class="badge-haram">Haram</span></td>
                <td>Elak ketika matahari sedang terbenam</td>
            </tr>
            <tr>
                <td><strong>Sepertiga malam terakhir (Qiamullail)</strong></td>
                <td><span class="badge-sunat">Paling Afdal</span></td>
                <td>Waktu Allah turun ke langit dunia - paling mustajab</td>
            </tr>
            <tr>
                <td><strong>Antara Maghrib dan Isyak</strong></td>
                <td><span class="badge-sunat">Digalakkan</span></td>
                <td>Waktu mustajab untuk doa dan ibadah sunat</td>
            </tr>
            <tr>
                <td><strong>Selepas solat fardhu</strong></td>
                <td><span class="badge-sunat">Digalakkan</span></td>
                <td>Hati lebih khusyuk selepas solat wajib</td>
            </tr>
            <tr>
                <td><strong>Hari Jumaat</strong></td>
                <td><span class="badge-sunat">Digalakkan</span></td>
                <td>Hari mulia - doa lebih mudah diterima</td>
            </tr>
            <tr>
                <td><strong>Sewaktu hujan turun</strong></td>
                <td><span class="badge-sunat">Digalakkan</span></td>
                <td>Antara waktu mustajab untuk berdoa</td>
            </tr>
        </tbody>
    </table>

    <!-- H2 #7: PETANDA ISTIKHARAH DITERIMA -->
    <h2>Tanda-Tanda Istikharah Diterima Allah</h2>
    <p>Ramai yang keliru - mereka tunggu mimpi yang jelas atau tanda luar biasa. Padahal petanda istikharah jauh lebih
        halus dari itu. Imam Ibn al-Qayyim menjelaskan bahawa istikharah adalah manifestasi kehambaan tertinggi kerana
        seseorang mengakui kelemahan diri dan menyerahkan segala-galanya kepada Allah.</p>

    <div class="ilmx-ist-tanda">
        <h3>🌙 Petanda Istikharah Anda Diterima:</h3>
        <div class="ilmx-ist-tanda-item">
            <span class="ilmx-ist-tanda-icon">☮️</span>
            <span class="ilmx-ist-tanda-text"><strong>Hati terasa lapang dan tenang</strong>- Allah letakkan ketenangan
                (sakinah) dalam hati anda. Pilihan yang Allah redhoi biasanya terasa lebih mudah, tidak terasa beban
                yang berat.</span>
        </div>
        <div class="ilmx-ist-tanda-item">
            <span class="ilmx-ist-tanda-icon">🚪</span>
            <span class="ilmx-ist-tanda-text"><strong>Jalan terbuka dengan mudah</strong>- Kalau pilihan itu baik, Allah
                akan permudahkan urusannya. Sebaliknya, pilihan yang tidak baik akan terasa macam tertutup pintu demi
                pintu.</span>
        </div>
        <div class="ilmx-ist-tanda-item">
            <span class="ilmx-ist-tanda-icon">❌</span>
            <span class="ilmx-ist-tanda-text"><strong>Jalan terasa terhalang atau sukar</strong>- Ini bukan kegagalan.
                Ini tanda Allah sedang menjaga anda. Kalau pilihan itu tidak baik, Allah akan jauhkan anda
                daripadanya.</span>
        </div>
        <div class="ilmx-ist-tanda-item">
            <span class="ilmx-ist-tanda-icon">💭</span>
            <span class="ilmx-ist-tanda-text"><strong>Hati lebih cenderung kepada satu pilihan</strong>- Selepas
                istikharah, perhatikan ke mana hati lebih condong. Ini bukan perasaan semata-mata, tapi bimbingan halus
                dari Allah.</span>
        </div>
        <div class="ilmx-ist-tanda-item">
            <span class="ilmx-ist-tanda-icon">😌</span>
            <span class="ilmx-ist-tanda-text"><strong>Rasa redha walaupun keputusan berlainan dengan keinginan</strong>-
                Inilah tanda istikharah paling besar. Siapa yang beristikharah, dia tidak menyesal - kerana Allah
                meletakkan ketenangan pada apa yang Dia pilihkan.</span>
        </div>
    </div>

    <p><strong>Penting:</strong>Kalau belum rasa petunjuk selepas sekali istikharah, ulangi sehingga tujuh kali. Tidak
        ada had ulangan yang ditetapkan. Yang utama - bertawakkal dan bergerak ke depan selepas beristikharah.</p>

    <!-- H2 #8: KESILAPAN LAZIM -->
    <h2>Kesilapan Lazim Semasa Istikharah (& Cara Betulkan)</h2>
    <div class="ilmx-ist-kesilapan">
        <div class="ilmx-ist-salah">
            <span class="k-label">❌ Salah</span>
            <span class="k-text">Tunggu mimpi yang jelas sebelum ambil tindakan</span>
        </div>
        <div class="ilmx-ist-betul">
            <span class="k-label">✅ Betul</span>
            <span class="k-text">Bergerak ke depan berdasarkan kecenderungan hati dan tanda-tanda yang nyata</span>
        </div>
        <div class="ilmx-ist-salah">
            <span class="k-label">❌ Salah</span>
            <span class="k-text">Istikharah tanpa usaha - hanya tunggu Allah yang "aturkan" segalanya</span>
        </div>
        <div class="ilmx-ist-betul">
            <span class="k-label">✅ Betul</span>
            <span class="k-text">Lakukan usaha (istisyarah - minta nasihat), kemudian serahkan kepada Allah melalui
                istikharah</span>
        </div>
        <div class="ilmx-ist-salah">
            <span class="k-label">❌ Salah</span>
            <span class="k-text">Minta orang lain buat istikharah bagi pihak kita</span>
        </div>
        <div class="ilmx-ist-betul">
            <span class="k-label">✅ Betul</span>
            <span class="k-text">Istikharah perlu dilakukan sendiri - ia simbolik pergantungan diri kepada Allah</span>
        </div>
        <div class="ilmx-ist-salah">
            <span class="k-label">❌ Salah</span>
            <span class="k-text">Istikharah untuk perkara yang sudah jelas hukumnya (wajib/haram)</span>
        </div>
        <div class="ilmx-ist-betul">
            <span class="k-label">✅ Betul</span>
            <span class="k-text">Istikharah hanya untuk perkara harus (mubah) yang tidak jelas pilihan terbaiknya</span>
        </div>
        <div class="ilmx-ist-salah">
            <span class="k-label">❌ Salah</span>
            <span class="k-text">Rasa kecewa bila keputusan Allah tidak sama dengan keinginan hati</span>
        </div>
        <div class="ilmx-ist-betul">
            <span class="k-label">✅ Betul</span>
            <span class="k-text">Redha dan yakin - pilihan Allah sentiasa lebih baik dari apa yang kita rancang</span>
        </div>
        <div class="ilmx-ist-salah">
            <span class="k-label">❌ Salah</span>
            <span class="k-text">Haid atau uzur tidak boleh istikharah langsung</span>
        </div>
        <div class="ilmx-ist-betul">
            <span class="k-label">✅ Betul</span>
            <span class="k-text">Yang uzur atau haid boleh berdoa istikharah sahaja tanpa solat - ini diharuskan oleh
                para ulama</span>
        </div>
    </div>

    <!-- H2 #9: FADHILAT -->
    <h2>Fadhilat &amp; Hikmah Solat Istikharah</h2>
    <p>Para ulama menyebut beberapa fadhilat besar solat istikharah yang jarang dibincangkan secara mendalam:</p>
    <ul>
        <li><strong>🛡️ Benteng daripada kemudaratan yang tidak nampak</strong>- Manusia nampak zahir sahaja, tapi Allah
            tahu apa yang berlaku di masa depan. Istikharah menjadi perlindungan daripada keputusan yang kelihatan baik
            tapi sebenarnya membawa mudarat.</li>
        <li><strong>🤲 Manifestasi tawakal tertinggi</strong>- Imam Ibn al-Qayyim menyebut istikharah adalah tanda
            kehambaan terbesar kerana seseorang mengakui kelemahan ilmunya dan menyerahkan sepenuhnya kepada Allah.</li>
        <li><strong>😌 Sumber ketenangan hati</strong>- Siapa yang beristikharah dengan ikhlas, Allah letakkan sakinah
            dalam hatinya. Keputusan yang datang selepas istikharah terasa lebih ringan dan mudah diterima.</li>
        <li><strong>✨ Mengelak rasa penyesalan</strong>- Kata para ulama: "Siapa yang beristikharah, dia tidak
            menyesal." Kerana bila keputusan itu berdasarkan petunjuk Allah, kita tahu - inilah yang terbaik yang Dia
            pilihkan untuk kita.</li>
        <li><strong>🔗 Memperkuat hubungan dengan Allah</strong>- Setiap kali beristikharah, kita mengakui bahawa kita
            memerlukan Allah dalam setiap keputusan. Ini mendidik hati untuk sentiasa bergantung kepada-Nya.</li>
    </ul>

    <!-- CTA MID -->
    <div class="ilmx-ist-cta">
        <strong>📚 Ingin dalami lebih lanjut tentang ibadah harian?</strong>
        <p>Jelajahi artikel-artikel lain di IlmuAlam - panduan solat, doa, dan amalan harian untuk Muslim Malaysia.</p>
    </div>

    <!-- H2 #10: FAQ -->
    <h2>Soalan Lazim (FAQ) tentang Solat Istikharah</h2>
    <div class="ilmx-ist-faq" id="ilmx-ist-faq">
        <div class="ilmx-ist-faq-item">
            <div class="ilmx-ist-faq-q" onclick="ilmxIstToggleFaq(this)">Berapa kali boleh ulang solat istikharah? <span
                    class="arrow">▼</span></div>
            <div class="ilmx-ist-faq-a">Tiada had yang ditetapkan, namun para ulama menyebut boleh ulang sehingga tujuh
                kali. Kalau selepas tujuh kali masih belum ada kemantapan, teruskan berusaha dan serahkan kepada Allah.
                Kadangkala, takdir Allah yang menentukan pilihan itu berlaku sendiri - itulah jawapan istikharah anda.
            </div>
        </div>
        <div class="ilmx-ist-faq-item">
            <div class="ilmx-ist-faq-q" onclick="ilmxIstToggleFaq(this)">Perlu tunggu mimpi selepas istikharah ke? <span
                    class="arrow">▼</span></div>
            <div class="ilmx-ist-faq-a">Tidak perlu. Mimpi bukan syarat atau ukuran istikharah diterima. Ramai yang
                salah faham perkara ini. Selepas istikharah, perhatikan kecenderungan hati, kemudahan atau halangan yang
                datang, dan rasa lapang atau berat dalam dada - itulah petunjuk yang lebih nyata dari mimpi.</div>
        </div>
        <div class="ilmx-ist-faq-item">
            <div class="ilmx-ist-faq-q" onclick="ilmxIstToggleFaq(this)">Perempuan yang haid boleh istikharah tak? <span
                    class="arrow">▼</span></div>
            <div class="ilmx-ist-faq-a">Ya, boleh - dengan cara berdoa sahaja tanpa mendirikan solat. Ini diharuskan
                oleh para ulama. Baca atau hafal doa istikharah dan berdoa dengan penuh kekhusyukan. Kaedah ini juga
                berlaku untuk orang sakit yang tidak mampu solat.</div>
        </div>
        <div class="ilmx-ist-faq-item">
            <div class="ilmx-ist-faq-q" onclick="ilmxIstToggleFaq(this)">Boleh buat istikharah untuk perkara kecil?
                <span class="arrow">▼</span></div>
            <div class="ilmx-ist-faq-a">Ya ! Rasulullah ﷺ mengajar istikharah "dalam semua urusan" - tidak terhad kepada
                perkara besar sahaja. Boleh istikharah untuk memilih sekolah anak, memilih antara dua pakej pelancongan,
                atau keputusan kecil dalam kehidupan seharian.</div>
        </div>
        <div class="ilmx-ist-faq-item">
            <div class="ilmx-ist-faq-q" onclick="ilmxIstToggleFaq(this)">Mesti hafal doa istikharah dalam Arab ke? <span
                    class="arrow">▼</span></div>
            <div class="ilmx-ist-faq-a">Lebih afdal baca dalam bahasa Arab kerana itulah lafaz yang diajar Nabi ﷺ. Namun
                jika tidak hafal, berdoalah dalam bahasa sendiri dengan penuh keikhlasan - Allah Maha Mengetahui segala
                isi hati, dalam apa-apa bahasa sekalipun.</div>
        </div>
        <div class="ilmx-ist-faq-item">
            <div class="ilmx-ist-faq-q" onclick="ilmxIstToggleFaq(this)">Boleh gabungkan istikharah dengan solat lain?
                <span class="arrow">▼</span></div>
            <div class="ilmx-ist-faq-a">Ya, boleh. Kalau anda baru selesai solat tahajjud dua rakaat dengan niat
                istikharah, itu sudah memadai. Begitu juga dengan rawatib atau solat sunat lain - asal niatkan untuk
                istikharah dan baca doa selepas salam.</div>
        </div>
        <div class="ilmx-ist-faq-item">
            <div class="ilmx-ist-faq-q" onclick="ilmxIstToggleFaq(this)">Macam mana nak tahu jawapan istikharah? <span
                    class="arrow">▼</span></div>
            <div class="ilmx-ist-faq-a">Perhatikan tiga perkara: (1) Kecenderungan hati selepas istikharah - ke mana ia
                lebih condong? (2) Kemudahan atau halangan yang datang dalam proses membuat keputusan. (3) Rasa lapang
                atau berat di dada. Kalau jalan terbuka dan hati tenang, itu tanda baik. Kalau terasa macam bertambah
                sukar, mungkin itu jawapan Allah juga.</div>
        </div>
        <div class="ilmx-ist-faq-item">
            <div class="ilmx-ist-faq-q" onclick="ilmxIstToggleFaq(this)">Perlu berpuasa sebelum istikharah tak? <span
                    class="arrow">▼</span></div>
            <div class="ilmx-ist-faq-a">Berpuasa sebelum istikharah adalah sunat, bukan wajib. Ia membantu hati lebih
                khusyuk dan bersih. Perkara-perkara sunat lain yang boleh dilakukan sebelum istikharah termasuk banyak
                beristighfar, bersedekah, dan membaca al-Quran.</div>
        </div>
    </div>

    <!-- CLUSTER INTERNAL LINKING -->
    <div class="ilmx-ist-cluster">
        <h3>📚 Artikel Berkaitan - Ibadah &amp; Solat Sunat</h3>
        <ul>
            <li>→ <a href="/cara-solat-hajat">Cara Solat Hajat: Niat, Doa &amp; Panduan Lengkap</a></li>
            <li>→ <a href="/cara-solat-taubat">Cara Solat Taubat: Niat, Doa &amp; Waktu Mustajab</a></li>
            <li>→ <a href="/doa-selepas-solat">Doa Selepas Solat Fardhu: Bacaan Lengkap Rumi &amp; Arab</a></li>
            <li>→ <a href="/cara-solat-tahajjud">Cara Solat Tahajjud: Panduan Lengkap untuk Pemula</a></li>
            <li>→ <a href="/zikir-pagi-petang">Zikir Pagi Petang: Amalan Harian yang Penuh Kelebihan</a></li>
            <li>→ <a href="/doa-qunut">Doa Qunut: Bacaan Lengkap, Hukum &amp; Cara Amal</a></li>
        </ul>
    </div>
</div>
<!-- ═══ END ARTIKEL ═══ -->

<script>
(function () {
    'use strict';

    // 1. FAQ Accordion Toggle Function
    window.ilmxIstToggleFaq = function (target) {
        var el = (target && target.nodeType) ? target : (typeof event !== 'undefined' && event ? event.target : null);
        if (!el) return;
        
        var item = el.closest('.ilmx-ist-faq-item');
        if (!item) return;

        var container = item.closest('.ilmx-ist-faq') || item.closest('.ilmx-ist-wrap') || document;
        var isOpen = item.classList.contains('open');

        // Close all other FAQ items within the container
        container.querySelectorAll('.ilmx-ist-faq-item.open').forEach(function (openItem) {
            if (openItem !== item) {
                openItem.classList.remove('open');
            }
        });

        // Toggle current FAQ item
        if (isOpen) {
            item.classList.remove('open');
        } else {
            item.classList.add('open');
        }
    };

    // 2. Situation Selector Tab Switcher
    window.ilmxIstShowSit = function (sit, btn) {
        var triggerBtn = btn || (typeof event !== 'undefined' && event ? event.target.closest('.ilmx-ist-sitbtn') : null);
        var container = (triggerBtn && triggerBtn.closest('.ilmx-ist-selector')) || (triggerBtn && triggerBtn.closest('.ilmx-ist-wrap')) || document;

        // Hide all situation contents
        container.querySelectorAll('.ilmx-ist-sit-content').forEach(function (el) {
            el.classList.remove('show');
        });

        // Deactivate all situation buttons
        container.querySelectorAll('.ilmx-ist-sitbtn').forEach(function (b) {
            b.classList.remove('active');
        });

        // Show target situation content
        var targetContent = container.querySelector('#ilmx-sit-' + sit) || document.getElementById('ilmx-sit-' + sit);
        if (targetContent) {
            targetContent.classList.add('show');
        }

        // Activate button if available
        if (triggerBtn) {
            triggerBtn.classList.add('active');
        }
    };

    // 3. Doa Copy Function (with Clipboard API & Executive Fallback)
    window.ilmxIstCopyDoa = function (btn) {
        var triggerBtn = btn || (typeof event !== 'undefined' && event ? event.target.closest('.ilmx-ist-btn-copy') : null);
        var container = (triggerBtn && triggerBtn.closest('.ilmx-ist-doa')) || document.querySelector('#ilmx-doa-istikharah') || document;
        
        var rumi = container.querySelector('.rumi');
        var terjemahan = container.querySelector('.terjemahan');
        var text = 'DOA ISTIKHARAH\n\n' + 
                   (rumi ? rumi.textContent.trim() : '') + 
                   '\n\nTerjemahan:\n' + 
                   (terjemahan ? terjemahan.textContent.trim() : '');

        var copyBtn = triggerBtn || container.querySelector('.ilmx-ist-btn-copy');

        var showSuccess = function () {
            if (copyBtn) {
                var originalHTML = copyBtn.innerHTML;
                copyBtn.innerHTML = '✅ Disalin!';
                setTimeout(function () {
                    copyBtn.innerHTML = originalHTML;
                }, 2000);
            }
        };

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(showSuccess).catch(function () {
                fallbackCopy(text, showSuccess);
            });
        } else {
            fallbackCopy(text, showSuccess);
        }
    };

    function fallbackCopy(text, callback) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            if (callback) callback();
        } catch (err) {
            console.error('Copy fallback failed:', err);
        }
        document.body.removeChild(textArea);
    }

    // 4. WhatsApp Share Function
    window.ilmxIstShareWa = function () {
        var shareText = encodeURIComponent('DOA ISTIKHARAH (Hadis Sahih - Riwayat al-Bukhari)\n\nAllahumma inni astakhiruka bi\'ilmika, wa astaqdiruka bi qudratika, wa as-aluka min fadlikal-\'azim...\n\n[Baca panduan lengkap di IlmuAlam.com]');
        var url = 'https://api.whatsapp.com/send?text=' + shareText;
        window.open(url, '_blank');
    };

    // 5. Automatic Event Delegation Initializer
    document.addEventListener('DOMContentLoaded', function () {
        // Automatically handle clicks on FAQ headers if onclick is omitted
        document.querySelectorAll('.ilmx-ist-faq-q').forEach(function (header) {
            if (!header.getAttribute('onclick')) {
                header.addEventListener('click', function () {
                    window.ilmxIstToggleFaq(this);
                });
            }
        });
    });

})();
</script>
