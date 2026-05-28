/* =========================================
 三重大学応援団 公式サイト
 共通スクリプト v2
 ========================================= */

(function () {
 "use strict";

 document.addEventListener("DOMContentLoaded", function () {
 initNav();
 initOuendanTabs();
 initScrollTop();
 renderScheduleCards();
 initMembersDeptPanel();
 renderCheerPanels();
 renderFooterInfo();
 initCarousels();
 initDeptMsgTouch();
 initMonthTabs();
 initHeroSlider();
 initPhotoOverlays();
 initFaqAccordion();
 });

 /* ----------- ナビゲーション ----------- */
 function initNav() {
 var toggle = document.querySelector(".nav-toggle");
 var nav = document.querySelector(".global-nav");
 if (toggle && nav) {
 toggle.addEventListener("click", function () {
 toggle.classList.toggle("open");
 nav.classList.toggle("open");
 });
 }
 var dropdowns = document.querySelectorAll(".nav-dropdown > .nav-parent");
 dropdowns.forEach(function (parent) {
 parent.addEventListener("click", function (e) {
 if (window.innerWidth <= 960) {
 e.preventDefault();
 parent.parentElement.classList.toggle("open");
 }
 });
 });
 }

 /* ----------- 応援紹介タブ ----------- */
 function initOuendanTabs() {
 var container = document.querySelector("[data-ouendan-tabs]");
 if (!container) return;
 var buttons = container.querySelectorAll(".ouendan-tab-btn");
 var panels = container.querySelectorAll(".ouendan-tab-panel");
 buttons.forEach(function (btn) {
 btn.addEventListener("click", function () {
 var target = btn.getAttribute("data-tab");
 buttons.forEach(function (b) { b.classList.remove("active"); });
 panels.forEach(function (p) { p.classList.remove("active"); });
 btn.classList.add("active");
 var panel = container.querySelector('.ouendan-tab-panel[data-panel="' + target + '"]');
 if (panel) panel.classList.add("active");
 });
 });
 }

 /* ----------- スクロールトップ ----------- */
 function initScrollTop() {
 var btn = document.querySelector(".scroll-top-btn");
 if (!btn) return;
 window.addEventListener("scroll", function () {
 btn.classList.toggle("visible", window.scrollY > 400);
 });
 btn.addEventListener("click", function () {
 window.scrollTo({ top: 0, behavior: "smooth" });
 });
 }

 /* ----------- 日付ヘルパー ----------- */
 function formatDate(iso) {
 var d = new Date(iso + "T00:00:00");
 var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
 return {
 y: d.getFullYear(),
 m: ("0" + (d.getMonth() + 1)).slice(-2),
 d: ("0" + d.getDate()).slice(-2),
 dow: days[d.getDay()]
 };
 }

 /* ----------- 活動予定カード ----------- */
 function renderScheduleCards() {
 var target = document.querySelector("[data-schedule-list]");
 if (!target || typeof SCHEDULE_ITEMS === "undefined") return;

 var html = SCHEDULE_ITEMS.map(function (item) {
 var d = formatDate(item.date);
 var img = item.image ? 'url("' + item.image + '")' : '';
 return (
 '<div class="schedule-card">' +
 '<div class="schedule-card-date">' +
 '<span class="num">' + d.m + '.' + d.d + '</span>' +
 '<span class="day">' + d.dow + '</span>' +
 '</div>' +
 '<div class="schedule-card-img" style="background-image:' + img + '"></div>' +
 '<div class="schedule-card-body">' +
 (item.category ? '<span class="schedule-card-cat">' + escapeHtml(item.category) + '</span>' : '') +
 '<div class="schedule-card-title">' + escapeHtml(item.title) + '</div>' +
 '<div class="schedule-card-place">' + escapeHtml(item.place || "") + '</div>' +
 '</div>' +
 '</div>'
 );
 }).join("");
 target.innerHTML = html || '<p style="color:var(--color-muted);font-size:14px;">現在掲載している予定はありません。</p>';
 }

 /* ----------- 応援紹介：2ペイン ----------- */
 function renderCheerPanels() {
 if (typeof CHEER_DATA === "undefined") return;

 var mapping = [
 { key: "songs", data: CHEER_DATA.songs },
 { key: "fanfares", data: CHEER_DATA.fanfares },
 { key: "victory", data: CHEER_DATA.victory }
 ];
 mapping.forEach(function (map) {
 var wrapper = document.querySelector('[data-cheer-panel="' + map.key + '"]');
 if (!wrapper || !map.data || !map.data.length) return;
 buildCheerPanel(wrapper, map.data);
 });
 }

 function buildCheerPanel(wrapper, items) {
 // カテゴリ別グループ
 var groups = {};
 var groupOrder = [];
 items.forEach(function (item) {
 var cat = item.category || "楽曲";
 if (!groups[cat]) { groups[cat] = []; groupOrder.push(cat); }
 groups[cat].push(item);
 });

 // 左リスト
 var listHTML = "";
 var allItems = [];
 groupOrder.forEach(function (cat) {
 if (groupOrder.length > 1) {
 listHTML += '<div class="ouendan-cat-head">' + escapeHtml(cat) + '</div>';
 }
 groups[cat].forEach(function (item) {
 var idx = allItems.length;
 allItems.push(item);
 listHTML += (
 '<div class="ouendan-song-row' + (idx === 0 ? ' active' : '') + '" data-idx="' + idx + '">' +
 '<span><span class="ouendan-song-icon"></span>' + escapeHtml(item.title) +
 (item.note ? '<span class="note">' + escapeHtml(item.note) + '</span>' : '') + '</span>' +
 '<span class="arr">›</span>' +
 '</div>'
 );
 });
 });

 var firstDetail = allItems.length > 0 ? renderCheerDetail(allItems[0]) : '<div class="ouendan-detail-empty">楽曲を選択してください</div>';

 wrapper.innerHTML =
 '<div class="ouendan-panels">' +
 '<div class="ouendan-song-list">' + listHTML + '</div>' +
 '<div class="ouendan-detail">' + firstDetail + '</div>' +
 '</div>';

 // クリックハンドラ
 var rows = wrapper.querySelectorAll(".ouendan-song-row");
 var detail = wrapper.querySelector(".ouendan-detail");
 rows.forEach(function (row) {
 row.addEventListener("click", function () {
 rows.forEach(function (r) { r.classList.remove("active"); });
 row.classList.add("active");
 var idx = parseInt(row.getAttribute("data-idx"));
 detail.innerHTML = renderCheerDetail(allItems[idx]);
 });
 });
 }

 function renderCheerDetail(item) {
 if (!item) return '<div class="ouendan-detail-empty">楽曲を選択してください</div>';
 var src = "https://www.youtube.com/embed/" + item.youtubeId;
 var hasLyrics = item.lyrics && item.lyrics.trim().length > 0;
 var hasYoutube = item.youtubeId && item.youtubeId !== "VIDEO_ID";

 var contentHTML = "";
 if (hasLyrics || hasYoutube) {
 contentHTML = '<div class="ouendan-detail-content">';
 if (hasLyrics) {
 contentHTML += '<div class="ouendan-lyrics"><h4>歌詞</h4><div>' + escapeHtml(item.lyrics) + '</div></div>';
 }
 if (item.youtubeId) {
 contentHTML += '<div class="video-wrap"><iframe src="' + src + '" title="' + escapeHtml(item.title) + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
 }
 contentHTML += '</div>';
 }

 return (
 '<h3>' + escapeHtml(item.title) + (item.note ? ' <small style="font-size:.7em;font-weight:400;color:var(--color-muted)">' + escapeHtml(item.note) + '</small>' : '') + '</h3>' +
 (item.description ? '<p class="desc">' + escapeHtml(item.description) + '</p>' : '') +
 contentHTML
 );
 }

 /* ----------- フッター情報 ----------- */
 function renderFooterInfo() {
 if (typeof SITE_SETTINGS === "undefined") return;

 var snsTargets = document.querySelectorAll("[data-footer-sns]");
 snsTargets.forEach(function (snsTarget) {
 var sns = SITE_SETTINGS.sns || {};
 var items = [];
 if (sns.instagram) items.push('<a href="' + sns.instagram + '" target="_blank" rel="noopener" title="Instagram">IG</a>');
 if (sns.twitter) items.push('<a href="' + sns.twitter + '" target="_blank" rel="noopener" title="X (Twitter)">X</a>');
 if (sns.youtube) items.push('<a href="' + sns.youtube + '" target="_blank" rel="noopener" title="YouTube">YT</a>');
 if (sns.lineUrl || (SITE_SETTINGS.contact && SITE_SETTINGS.contact.lineUrl)) {
 var lurl = sns.lineUrl || SITE_SETTINGS.contact.lineUrl;
 if (lurl && lurl !== "LINE_URL_HERE") items.push('<a href="' + lurl + '" target="_blank" rel="noopener" title="LINE">LN</a>');
 }
 snsTarget.innerHTML = items.join("");
 });

 document.querySelectorAll("[data-year]").forEach(function (el) {
 el.textContent = new Date().getFullYear();
 });
 }

 /* ----------- 団員ページ 部門パネル ----------- */
 var DEPT_META = {
 leader: {
 icon: "",
 name: "リーダー部",
 desc: "力強い声と姿で応援を先導します！",
 activity: "発生練習、ステージ構成の検討など、応援の指揮を執る重要な役割を担っています。",
 activityLink: "about/leader.html",
 bg: "images/departments/leader/photo62.jpg",
 yearGroupPhotos: { 2: "images/members/photo118.jpg", 1: "images/members/photo121.jpg" },
 yearDesc: {
 4: "後輩を導き、団の目標に向かって日々全力で取り組んでいます。",
 3: "経験を活かしながら、部の中核として活動をリードします。"
 }
 },
 brass: {
 icon: "",
 name: "ブラスバンド部",
 desc: "演奏の力で、応援に音で力強さと華やかさを加えます。",
 activity: "応援曲の練習、マーチング練習、定期演奏会の準備など、音楽面から応援団を支えています。",
 activityLink: "about/brass.html",
 bg: "images/departments/brass/photo33.jpg",
 yearGroupPhotos: { 2: "images/members/photo119.jpg", 1: "images/members/photo122.jpg" },
 yearDesc: {
 4: "自然と着いていきたくなる背中を見せます！",
 3: "バンドの中心として演奏をまとめ、次世代のリーダーへと成長していきます！"
 }
 },
 cheer: {
 icon: "",
 name: "チアリーダー部",
 desc: "華やかな演技と大きな笑顔で会場を盛り上げます。",
 activity: "ダンス練習、スタンツ練習、振付制作など、笑顔と元気あふれる応援を届けています。",
 activityLink: "about/cheer-dept.html",
 bg: "images/departments/cheer/photo48.jpg",
 yearGroupPhotos: { 2: "images/members/photo120.jpg", 1: "images/members/photo123.jpg" },
 yearDesc: {
 4: "元気溌剌と笑顔で部員を引っ張ります！",
 3: "メリハリを大事に、部員の成長を支えます！"
 }
 }
 };

 function initMembersDeptPanel() {
  var deptTabs = document.querySelectorAll(".dept-select-tab");
  var panelWrap = document.querySelector("[data-dept-panel]");
  if (!deptTabs.length || !panelWrap || typeof MEMBERS_DATA === "undefined") return;

  var currentDept = "leader";
  var currentYear = 4;

  function renderPanel(dept, year) {
   var meta = DEPT_META[dept] || {};
   var allMembers = MEMBERS_DATA[dept] || [];
   var years = [4, 3, 2, 1];
   if (years.indexOf(year) === -1) year = 4;
   currentYear = year;

   // header
   var headerHTML =
    '<div class="dept-panel-header" style="background-image:url(\'' + (meta.bg||'') + '\')">' +
    '<div class="dept-panel-header-inner">' +
    '<span class="dept-panel-header-icon">' + (meta.icon||'') + '</span>' +
    '<h2>' + escapeHtml(meta.name||dept) + '</h2>' +
    '<a href="' + (meta.activityLink||'#') + '" class="dept-panel-header-link">活動の様子を見る →</a>' +
    '</div>' +
    '</div>' +
    '<p class="dept-panel-desc">' + escapeHtml(meta.desc||'') + '</p>';

   // year tabs
   var yearTabsHTML = '<div class="year-tabs">' +
    years.map(function(y){
     return '<button class="year-tab' + (y === year ? ' active' : '') + '" data-tab-year="' + y + '">' + y + '年生</button>';
    }).join('') +
    '</div>';

   // content
   var ydesc = (meta.yearDesc && meta.yearDesc[year]) ? meta.yearDesc[year] : '';
   var contentHTML = '<div class="year-content">' +
    '<h3 class="year-intro-head">' + year + '年生</h3>' +
    (ydesc ? '<p class="year-intro-desc">' + escapeHtml(ydesc) + '</p>' : '');

   if (year === 4) {
    // 横型カード（役職あり）
    var members4 = allMembers.filter(function(m){ return m.year === 4; });
    contentHTML +=
     '<div class="members-panel-grid members-panel-grid--4th">' +
     members4.map(function(m){
      return (
       '<div class="member-4th-card">' +
       '<div class="mp-photo" style="background-image:url(\'' + (m.image||'') + '\')"></div>' +
       '<div class="mp-info">' +
       '<span class="mp-name">' + escapeHtml(m.name||'') + '</span>' +
       '<div class="mp-roles">' +
       (m.roles||[]).map(function(r){ return '<span class="mp-role-item">' + escapeHtml(r) + '</span>'; }).join('') +
       '</div>' +
       '</div>' +
       '</div>'
      );
     }).join('') +
     '</div>';
   } else if (year === 3) {
    // 通常縦型カード
    var members3 = allMembers.filter(function(m){ return m.year === 3; });
    contentHTML +=
     '<div class="members-panel-grid">' +
     members3.map(function(m){
      return (
       '<div class="member-panel-card">' +
       '<div class="mp-photo" style="background-image:url(\'' + (m.image||'') + '\')"></div>' +
       '<span class="mp-role">' + escapeHtml(m.role||'') + '</span>' +
       '<span class="mp-name">' + escapeHtml(m.name||'') + '</span>' +
       '</div>'
      );
     }).join('') +
     '</div>';
   } else {
    // 集合写真（1・2年生）
    var groupPhoto = (meta.yearGroupPhotos && meta.yearGroupPhotos[year]) || '';
    contentHTML +=
     '<div class="group-photo-wrap">' +
     (groupPhoto
      ? '<div class="group-photo-img" style="background-image:url(\'' + groupPhoto + '\')"></div>'
      : '<p style="color:var(--color-muted);font-size:13px;">集合写真準備中</p>') +
     '</div>';
   }

   contentHTML += '</div>';

   panelWrap.innerHTML = headerHTML + yearTabsHTML + contentHTML;

   // 年次タブ再バインド
   panelWrap.querySelectorAll(".year-tab").forEach(function(ytab){
    ytab.addEventListener("click", function(){
     renderPanel(currentDept, parseInt(ytab.dataset.tabYear));
    });
   });
  }

  deptTabs.forEach(function(tab){
   tab.addEventListener("click", function(){
    deptTabs.forEach(function(t){ t.classList.remove("active"); });
    tab.classList.add("active");
    currentDept = tab.dataset.dept;
    renderPanel(currentDept, 4);
   });
  });

  renderPanel(currentDept, 4);
 }

 /* ----------- カルーセル ----------- */
 function initCarousels() {
 document.querySelectorAll("[data-carousel]").forEach(function(wrap) {
 var track = wrap.querySelector(".carousel-track");
 var items = wrap.querySelectorAll(".carousel-item");
 if (!track || !items.length) return;

 var perView = parseInt(wrap.dataset.perView) || 6;
 var total = items.length;
 var pages = Math.ceil(total / perView);
 var current = 0;

 // item width (equal)
 function itemW() {
 var vp = wrap.querySelector(".carousel-viewport");
 return vp ? (vp.offsetWidth - (perView - 1) * 16) / perView : 160;
 }

 function setItemWidths() {
 var w = itemW();
 items.forEach(function(item){ item.style.width = w + "px"; });
 }

 function goTo(page) {
 current = Math.max(0, Math.min(page, pages - 1));
 var w = itemW();
 var offset = current * (w * perView + 16 * perView);
 track.style.transform = "translateX(-" + offset + "px)";
 wrap.querySelectorAll(".carousel-dot").forEach(function(dot, i){
 dot.classList.toggle("active", i === current);
 });
 }

 setItemWidths();

 // dots
 var dotsWrap = wrap.querySelector(".carousel-dots");
 if (dotsWrap) {
 for (var i = 0; i < pages; i++) {
 var dot = document.createElement("button");
 dot.className = "carousel-dot" + (i === 0 ? " active" : "");
 dot.dataset.page = i;
 dot.addEventListener("click", function(){ goTo(parseInt(this.dataset.page)); });
 dotsWrap.appendChild(dot);
 }
 }

 var prev = wrap.querySelector(".carousel-nav.prev");
 var next = wrap.querySelector(".carousel-nav.next");
 if (prev) prev.addEventListener("click", function(){ goTo(current - 1); });
 if (next) next.addEventListener("click", function(){ goTo(current + 1); });

 window.addEventListener("resize", function(){
 setItemWidths();
 goTo(current);
 });
 });
 }

 /* ----------- ユーティリティ ----------- */
 function escapeHtml(str) {
 if (str == null) return "";
 return String(str)
 .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
 .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
 }

 /* ----------- 部長メッセージ タッチフォールバック ----------- */
 function initDeptMsgTouch() {
 var panels = document.querySelectorAll(".dept-msg-panel");
 if (!panels.length) return;
 panels.forEach(function(panel) {
 panel.addEventListener("click", function() {
 var isActive = panel.classList.contains("is-active");
 panels.forEach(function(p) { p.classList.remove("is-active"); });
 if (!isActive) panel.classList.add("is-active");
 });
 });
 }

 /* ----------- ヒーロースライダー ----------- */
 function initHeroSlider() {
  var slides = document.querySelectorAll(".hero-slide");
  var dots = document.querySelectorAll(".hero-dot");
  if (slides.length < 2) return;
  var current = 0;

  function goTo(idx) {
   slides[current].classList.remove("is-active");
   dots[current].classList.remove("is-active");
   current = (idx + slides.length) % slides.length;
   slides[current].classList.add("is-active");
   dots[current].classList.add("is-active");
  }

  // ドットクリックで手動切り替え
  dots.forEach(function(dot, i) {
   dot.addEventListener("click", function() { goTo(i); });
  });

  // 5秒ごとに自動切り替え
  setInterval(function() { goTo(current + 1); }, 5000);
 }

 /* ----------- FAQ アコーディオン ----------- */
 function initFaqAccordion() {
  document.querySelectorAll(".faq-acc-q").forEach(function(btn) {
   btn.addEventListener("click", function() {
    var item = this.closest(".faq-acc-item");
    var body = item.querySelector(".faq-acc-body");
    var isOpen = this.classList.contains("is-open");

    /* 同じアコーディオン内の他アイテムを閉じる */
    var accordion = this.closest(".faq-accordion");
    accordion.querySelectorAll(".faq-acc-q.is-open").forEach(function(openBtn) {
     if (openBtn === btn) return;
     openBtn.classList.remove("is-open");
     openBtn.closest(".faq-acc-item").querySelector(".faq-acc-body").style.height = "0";
    });

    if (isOpen) {
     this.classList.remove("is-open");
     body.style.height = "0";
    } else {
     this.classList.add("is-open");
     body.style.height = body.scrollHeight + "px";
    }
   });
  });
 }

 /* ----------- 写真番号オーバーレイ（画像未設置時に番号を表示） ----------- */
 function initPhotoOverlays() {
  function tryAttach(el) {
   var style = el.getAttribute("style") || "";
   if (!style.includes("images/")) return;
   var m = style.match(/url\(['"]?([^'")\s]*\/(photo\d+)\.jpg)['"]?\)/);
   if (!m) return;
   if (el.querySelector(".photo-num-overlay")) return;
   var src = m[1];
   var label = m[2];
   var img = new Image();
   img.onerror = function() {
    if (el.querySelector(".photo-num-overlay")) return;
    if (window.getComputedStyle(el).position === "static") {
     el.style.position = "relative";
    }
    var overlay = document.createElement("div");
    overlay.className = "photo-num-overlay";
    overlay.innerHTML = "<span>" + label + "</span>";
    el.appendChild(overlay);
   };
   img.src = src;
  }

  function scanAll() {
   document.querySelectorAll("[style]").forEach(tryAttach);
  }

  scanAll();

  /* 動的追加カード（団員タブ切り替え等）にも対応 */
  var obs = new MutationObserver(function(muts) {
   muts.forEach(function(m) {
    if (m.type === "childList") {
     m.addedNodes.forEach(function(n) {
      if (n.nodeType !== 1) return;
      tryAttach(n);
      n.querySelectorAll && n.querySelectorAll("[style]").forEach(tryAttach);
     });
    } else if (m.type === "attributes") {
     tryAttach(m.target);
    }
   });
  });
  obs.observe(document.body, {childList: true, subtree: true, attributes: true, attributeFilter: ["style"]});
 }

 /* ----------- 月カード写真タブ ----------- */
 function initMonthTabs() {
 document.querySelectorAll(".month-tab-btn").forEach(function(btn) {
 btn.addEventListener("click", function() {
 var card = btn.closest(".month-card");
 var idx = parseInt(btn.dataset.tab, 10);
 card.querySelectorAll(".month-tab-btn").forEach(function(b) { b.classList.remove("is-active"); });
 card.querySelectorAll(".month-tab-panel").forEach(function(p) { p.classList.remove("is-active"); });
 btn.classList.add("is-active");
 card.querySelectorAll(".month-tab-panel")[idx].classList.add("is-active");
 });
 });
 }

})();
