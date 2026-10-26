/* 作品集全屏弹窗 v4 —— 平面设计页按参考长页（浅色版式）重构 */
(function () {
  var OWL = 'images/works/owl/';

  /* 表情包 01–16 */
  var STICKERS = [];
  for (var i = 1; i <= 16; i++) {
    STICKERS.push(OWL + 'sticker-' + (i < 10 ? '0' + i : i) + '.png');
  }

  /* 内联 SVG 图标库（描边风格，currentColor 继承） */
  var SVG = {
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6.5 6.5 0 0 0-3.7 11.8c.7.5 1.2 1.3 1.2 2.2h5c0-.9.5-1.7 1.2-2.2A6.5 6.5 0 0 0 12 3z"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.8 4.6a5.4 5.4 0 0 0-7.7 0l-1.1 1-1.1-1a5.4 5.4 0 0 0-7.7 7.6l1.1 1.1 7.7 7.6 7.7-7.6 1.1-1.1a5.4 5.4 0 0 0 0-7.6z"/></svg>'
  };

  var PJ_DATA = {
    graphic: {
      num: '01', total: '04', en: 'GRAPHIC DESIGN',
      theme: 'light',
      title: '猫头鹰护眼计划 · 品牌宣传物料设计',
      titleArt: OWL + 'title-art.png',
      subtitle: 'Graphic Design / Brand Promotion Materials',
      desc: '通过品牌视觉、活动海报、科普物料等设计，传递科学护眼理念，用视觉讲好故事，让更多家庭关注青少年眼健康。',
      navPills: [
        { icon: 'image', label: '品牌物料' },
        { icon: 'doc', label: '科普海报' },
        { icon: 'star', label: 'IP形象' }
      ],
      meta: ['PS / AI'],
      cover: OWL + 'owl-fortune.png',
      brandIntro: {
        logo: OWL + 'logo-brand.png',
        lead: '猫头鹰科技是一家专注于青少年视力健康与智能护眼科技的创新型企业。',
        text: '品牌以科技创新为核心，致力于提供科学、专业的眼健康解决方案，用科技守护清晰视界，传递专业、智慧与关爱的品牌理念。',
        pills: [
          { icon: 'bulb', color: '#2f7bf6', label: '科技创新', sub: '以科技守护眼健康愿景' },
          { icon: 'eye', color: '#14b8a6', label: '专业护航', sub: '用科学、专业的眼健康解决方案' },
          { icon: 'heart', color: '#f5476c', label: '智慧关爱', sub: '用科技守护每一双清澈的眼睛' }
        ]
      },
      sections: [
        {
          num: '01', name: '门店玻璃宣传画面', en: 'STORE GLASS DISPLAY',
          blocks: [
            { type: 'nat', src: OWL + 'kt-yake.jpg', caption: '门店落地玻璃长图 · 长期亚健康科普主视觉' }
          ]
        },
        {
          num: '02', name: '门店 KT 板系列', en: 'STORE KT BOARD',
          blocks: [
            { type: 'pair', items: [
              { src: OWL + 'kt-jiusui.jpg', title: '九岁关键期', sub: '抓住视力发育黄金阶段' },
              { src: OWL + 'kt-yuanshi.jpg', title: '远视储备', sub: '了解孩子的天然护城河' },
              { src: OWL + 'kt-kongzhou.jpg', title: '科学控轴', sub: '延缓眼轴过快增长' },
              { src: OWL + 'kt-santong.jpg', title: '散瞳验光', sub: '获取准确屈光度数' },
              { src: OWL + 'sv-jidi.jpg', title: '视光基地', sub: '标准化诊疗与服务' },
              { src: OWL + 'sv-jiandang.jpg', title: '视力建档', sub: '动态追踪成长曲线' }
            ] }
          ]
        },
        {
          num: '03', name: '门店宣传折页', en: 'BROCHURE',
          blocks: [
            { type: 'wide', src: OWL + 'pm-sanzhe.png', caption: '三折页 · 正面 / 内页展开' },
            { type: 'wide', src: OWL + 'pm-zheye.png', caption: '宣传折页 · 全景展开' }
          ]
        },
        {
          num: '04', name: 'IP 形象与表情包', en: 'IP & STICKERS',
          blocks: [
            { type: 'ip', phone: OWL + 'ip-phone.png', card: OWL + 'ip-card.png' },
            { type: 'stickers', items: STICKERS },
            { type: 'note', title: '表情包应用场景',
              text: '围绕招财猫头鹰 IP 开发的一整套表情包，用于品牌私域社群、客服对话与门店互动屏，让护眼科普在轻松的聊天语境里自然渗透，降低说教感、增强记忆点。',
              sub: '设计初衷：用一只可爱又专业的猫头鹰，把"护眼"这件严肃的事，讲成孩子愿意看、家长记得住的小故事。' }
          ]
        }
      ],
      summary: {
        text: '从门店玻璃长图、KT 板到宣传折页与 IP 表情包，猫头鹰护眼计划建立了一套风格统一又各有场景的平面视觉体系：科普内容可视化、品牌触点一致化、IP 形象人格化，让专业与温度同时抵达用户。',
        pills: ['品牌一致性', '科普可视化', 'IP 人格化', '落地性强']
      }
    },
    ui: {
      num: '02', total: '01', en: 'UI DESIGN',
      title: '猫头鹰护眼计划 · 儿童护眼 App 界面设计',
      subtitle: 'UI Design · Children Eye-Care App',
      desc: '以用户为中心的界面与交互设计，兼顾美感与易用性，让每一次点击都顺畅自然。',
      tags: ['界面设计', '交互设计', '小程序', '儿童产品'],
      meta: ['Figma / PS'],
      cover: 'images/works/owl-banner.jpg',
      sections: [
        {
          num: '01', name: '核心界面设计', en: 'CORE SCREENS',
          imgs: [
            { src: 'images/works/pj-ui.png', wide: true },
            { src: 'images/works/work-02.png' }
          ],
          textL: ['设计说明', '围绕儿童护眼场景设计的 App 与小程序界面，视觉风格活泼可爱，操作路径简单清晰，让家长与孩子都能轻松上手。'],
          textR: ['设计要素', '大圆角卡片与高饱和度渐变按钮，信息层级分明；核心功能入口突出，配合 IP 形象引导，降低儿童用户的学习成本。']
        }
      ]
    },
    event: {
      num: '03', total: '01', en: 'EVENT VISUAL DESIGN',
      title: '节日与品牌活动 · 主视觉设计',
      subtitle: 'Event Visual Design · Key Visual',
      desc: '节日海报、品牌活动等视觉设计，在有限的画面里制造记忆点与传播力。',
      tags: ['节日海报', '品牌活动', '主视觉', '线下物料'],
      meta: ['PS / AI'],
      cover: 'images/works/owl-banner.jpg',
      sections: [
        {
          num: '01', name: '节日主视觉系列', en: 'KEY VISUAL SERIES',
          imgs: [
            { src: 'images/works/pj-event.png' },
            { src: 'images/works/work-03.png' }
          ],
          textL: ['设计说明', '为清明、端午等节日节点与品牌活动设计主视觉及延展物料，兼顾节日氛围与品牌调性。'],
          textR: ['设计要素', '以节气意象结合品牌元素，构图留白克制、重点突出，一套主视觉可延展至线上 banner 与线下展架。']
        }
      ]
    },
    other: {
      num: '04', total: '01', en: 'MORE DESIGN',
      title: 'Ashen Elia · 人物插画创作',
      subtitle: 'Illustration · Character Art',
      desc: '插画与个人创作，保持手感，也保持对画面节奏与情绪表达的敏感。',
      tags: ['人物插画', '板绘', '个人创作'],
      meta: ['PS / Procreate'],
      cover: 'images/works/pj-illustration.jpg',
      sections: [
        {
          num: '01', name: '人物插画系列', en: 'CHARACTER SERIES',
          imgs: [
            { src: 'images/works/pj-illustration.jpg', wide: true },
            { src: 'images/works/work-04.jpg' }
          ],
          textL: ['创作说明', '持续进行人物绘制的技能进修与个人创作，研究不同插画风格与视觉表现方式，保持稳定的作品输出。'],
          textR: ['创作要素', '注重人物神态与画面氛围的表达，通过光影和色彩层次塑造情绪，画面松弛而有节奏感。']
        }
      ]
    }
  };

  var modal = document.getElementById('pjModal');
  var body = document.getElementById('pjModalBody');
  var closeBtn = document.getElementById('pjModalClose');

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---------- 浅色版式：块渲染（平面设计页） ---------- */
  function renderLightBrand(bi) {
    var h = '<div class="mw-brandhead">';
    h += '  <i></i><strong>品牌介绍</strong><span>BRAND INTRODUCTION</span><em></em>';
    h += '</div>';
    h += '<div class="mw-brand">';
    h += '  <div class="mw-brand-logo"><img src="' + bi.logo + '" alt="品牌 LOGO"></div>';
    h += '  <div class="mw-brand-body">';
    h += '    <div class="mw-brand-panel"><b>' + esc(bi.lead) + '</b>' + esc(bi.text) + '</div>';
    h += '    <div class="mw-brand-pills">';
    bi.pills.forEach(function (p) {
      h += '<span class="mw-bpill"><i class="mw-bpic" style="background:' + p.color + '">' + SVG[p.icon] + '</i>' +
        '<span class="mw-bptext"><b>' + esc(p.label) + '</b><small>' + esc(p.sub) + '</small></span></span>';
    });
    h += '    </div>';
    h += '  </div>';
    h += '</div>';
    return h;
  }

  function renderBlock(b) {
    if (b.type === 'nat') {
      return '<figure class="mw-nat"><div class="mw-imgbox"><img src="' + b.src + '" alt="' + esc(b.caption || '') + '" loading="lazy"></div>' +
        (b.caption ? '<figcaption>' + esc(b.caption) + '</figcaption>' : '') + '</figure>';
    }
    if (b.type === 'pair') {
      var items = b.items.map(function (it) {
        return '<div class="mw-pair-item">' +
          '<div class="mw-imgbox mw-pair-box"><img src="' + it.src + '" alt="' + esc(it.title || '') + '" loading="lazy"></div>' +
          '<div class="mw-pair-cap"><b>' + esc(it.title) + '</b><span>' + esc(it.sub) + '</span></div>' +
          '</div>';
      }).join('');
      return '<div class="mw-pair">' + items + '</div>';
    }
    if (b.type === 'wide') {
      return '<figure class="mw-wide"><div class="mw-imgbox"><img src="' + b.src + '" alt="' + esc(b.caption || '') + '" loading="lazy"></div>' +
        (b.caption ? '<figcaption>' + esc(b.caption) + '</figcaption>' : '') + '</figure>';
    }
    if (b.type === 'ip') {
      return '<div class="mw-ip">' +
        '<div class="mw-imgbox mw-ip-box"><img src="' + b.phone + '" alt="手机样机" loading="lazy"></div>' +
        '<div class="mw-imgbox mw-ip-box"><img src="' + b.card + '" alt="IP 介绍卡" loading="lazy"></div>' +
        '</div>';
    }
    if (b.type === 'stickers') {
      var st = b.items.map(function (s) {
        return '<div class="mw-sticker"><img src="' + s + '" alt="表情包" loading="lazy"></div>';
      }).join('');
      return '<div class="mw-stickers">' + st + '</div>';
    }
    if (b.type === 'note') {
      return '<div class="mw-note">' +
        '<div class="mw-seclabel">' + esc(b.title) + '</div>' +
        '<p>' + esc(b.text) + '</p>' +
        (b.sub ? '<p class="mw-note-sub">' + esc(b.sub) + '</p>' : '') +
        '</div>';
    }
    return '';
  }

  function renderLightSection(sec) {
    var h = '<div class="mw-sec">';
    h += '  <div class="mw-sechead"><strong>作品展示 ' + esc(sec.num) + ' · ' + esc(sec.name) + '</strong>';
    if (sec.en) h += '    <span>' + esc(sec.en) + '</span>';
    h += '  </div>';
    sec.blocks.forEach(function (b) { h += renderBlock(b); });
    h += '</div>';
    return h;
  }

  /* ---------- 深色版式：原有逻辑（其余品类） ---------- */
  function renderSection(sec) {
    var h = '';
    h += '<div class="mz-sec">';
    h += '  <div class="mz-sec-head">';
    h += '    <strong>作品展示 ' + esc(sec.num) + ' · ' + esc(sec.name) + '</strong>';
    if (sec.en) h += '    <span>' + esc(sec.en) + '</span>';
    h += '  </div>';
    h += '  <div class="mz-sec-imgs">';
    sec.imgs.forEach(function (im) {
      h += '<figure class="mz-sec-img' + (im.wide ? ' wide' : '') + (im.nat ? ' nat' : '') + '"><img src="' + im.src + '" alt="' + esc(sec.name) + '" loading="lazy"></figure>';
    });
    h += '  </div>';
    h += '  <div class="mz-sec-texts">';
    h += '    <div class="mz-sec-text"><div class="mz-sec-label">' + esc(sec.textL[0]) + '</div><p>' + esc(sec.textL[1]) + '</p></div>';
    if (sec.textR) h += '    <div class="mz-sec-text"><div class="mz-sec-label">' + esc(sec.textR[0]) + '</div><p>' + esc(sec.textR[1]) + '</p></div>';
    h += '  </div>';
    h += '</div>';
    return h;
  }

  function openModal(key) {
    var cat = PJ_DATA[key];
    if (!cat) return;

    /* 大屏图片弹窗——背景压暗，直接展示整张原图（平面/UI/活动/其他 四个品类共用） */
    var IMG_PAGES = {
      graphic: { src: OWL + 'full-page.jpg',   alt: '平面设计作品集整页图' },
      ui:      { src: OWL + 'ui-page.jpg',     alt: 'UI界面设计作品集整页图' },
      event:   { src: OWL + 'event-page.jpg',  alt: '活动视觉设计作品集整页图' },
      other:   { src: OWL + 'other-page.jpg',  alt: '其他设计作品集整页图' }
    };
    if (IMG_PAGES[key]) {
      modal.classList.add('theme-light');
      modal.classList.remove('theme-dark');
      modal.classList.add('img-mode');
      body.innerHTML = '<div class="mw-bigimg"><img src="' + IMG_PAGES[key].src + '" alt="' + IMG_PAGES[key].alt + '"></div>';
      body.scrollTop = 0;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      return;
    }

    modal.classList.remove('img-mode');
    var light = cat.theme === 'light';
    var h = '';

    if (light) {
      /* 横幅：深蓝渐变 + 艺术字标题 + 右侧招财猫头鹰 + 底部图标导航条 */
      h += '<div class="mw-banner">';
      h += '  <div class="mw-banner-top">';
      h += '    <div class="mw-banner-glow"></div>';
      h += '    <img class="mw-banner-owl" src="' + cat.cover + '" alt="招财猫头鹰">';
      h += '    <div class="mw-banner-inner">';
      h += '      <div class="mw-banner-head"><em>' + esc(cat.num) + '</em><span>/' + esc(cat.total) + '</span><i>' + esc(cat.en) + '</i></div>';
      h += '      <img class="mw-banner-titleart" src="' + cat.titleArt + '" alt="' + esc(cat.title) + '">';
      h += '      <div class="mw-banner-sub">' + esc(cat.subtitle) + '</div>';
      h += '      <p class="mw-banner-desc">' + esc(cat.desc) + '</p>';
      h += '    </div>';
      h += '  </div>';
      h += '</div>';
      /* 导航条：独立元素，横跨横幅底边与下方内容区 */
      h += '<div class="mw-nav">';
      h += '  <div class="mw-nav-pills">';
      cat.navPills.forEach(function (p) {
        h += '<span class="mw-navpill">' + SVG[p.icon] + esc(p.label) + '</span>';
      });
      h += '  </div>';
      h += '  <div class="mw-nav-divide"></div>';
      h += '  <div class="mw-nav-soft"><img src="' + OWL + 'icon-monitor.png" alt="软件"><div><em>使用软件</em><b>' + esc(cat.meta.join(' / ')) + '</b></div></div>';
      h += '</div>';

      h += '<div class="mw-body">';
      if (cat.brandIntro) h += renderLightBrand(cat.brandIntro);
      cat.sections.forEach(function (sec) { h += renderLightSection(sec); });
      if (cat.summary) {
        h += '<div class="mw-summary">';
        h += '  <div class="mw-seclabel">项目总结</div>';
        h += '  <p>' + esc(cat.summary.text) + '</p>';
        h += '  <div class="mw-brand-pills">' + cat.summary.pills.map(function (p) { return '<span class="mw-pill"><b>' + esc(p) + '</b></span>'; }).join('') + '</div>';
        h += '</div>';
      }
      h += '</div>';
    } else {
      /* 深色：沿用原 mz-* 版式 */
      h += '<div class="mz-banner" style="background-image:url(\'' + cat.cover + '\')">';
      h += '  <div class="mz-banner-inner">';
      h += '    <div class="mz-banner-head"><em>' + esc(cat.num) + '</em><span>/ ' + esc(cat.total) + '</span><i>' + esc(cat.en) + '</i></div>';
      h += '    <h2 class="mz-banner-title">' + esc(cat.title) + '</h2>';
      h += '    <div class="mz-banner-sub">' + esc(cat.subtitle) + '</div>';
      h += '    <p class="mz-banner-desc">' + esc(cat.desc) + '</p>';
      h += '    <div class="mz-banner-row">';
      h += '      <div class="mz-banner-tags">' + cat.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>';
      h += '      <div class="mz-banner-meta">' + cat.meta.map(function (m) { return '<span>' + esc(m) + '</span>'; }).join('') + '</div>';
      h += '    </div>';
      h += '  </div>';
      h += '</div>';

      h += '<div class="mz-content">';
      if (cat.brandIntro) {
        var bi = cat.brandIntro;
        h += '<div class="mz-brand">';
        h += '  <div class="mz-brand-logo"><img src="' + bi.logo + '" alt="品牌 LOGO"></div>';
        h += '  <div class="mz-brand-body">';
        h += '    <div class="mz-brand-label">品牌介绍</div>';
        h += '    <p>' + esc(bi.text) + '</p>';
        h += '    <div class="mz-brand-pills">' + bi.pills.map(function (p) { return '<span>' + esc(p) + '</span>'; }).join('') + '</div>';
        h += '  </div>';
        h += '</div>';
      }
      cat.sections.forEach(function (sec) { h += renderSection(sec); });
      if (cat.summary) {
        h += '<div class="mz-summary">';
        h += '  <div class="mz-sec-label">项目总结</div>';
        h += '  <p>' + esc(cat.summary.text) + '</p>';
        h += '  <div class="mz-brand-pills">' + cat.summary.pills.map(function (p) { return '<span>' + esc(p) + '</span>'; }).join('') + '</div>';
        h += '</div>';
      }
      h += '</div>';
    }

    body.innerHTML = h;
    body.scrollTop = 0;
    modal.classList.toggle('theme-light', light);
    modal.classList.toggle('theme-dark', !light);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.pj-card[data-cat]').forEach(function (card) {
    card.addEventListener('click', function () { openModal(card.getAttribute('data-cat')); });
  });
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();
