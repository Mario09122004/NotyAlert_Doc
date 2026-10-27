/**
 * NotyAlert Documentation - Client Logic
 * Handles language detection, markdown fetching, tabs routing, theme switching
 */

(function () {
  'use strict';

  // --- Configuration & Dictionary ---
  const DOCS = {
    privacy: {
      file: 'PRIVACY_POLICY.md',
      es: 'Política de Privacidad',
      en: 'Privacy Policy'
    },
    terms: {
      file: 'TERMS_AND_CONDITIONS.md',
      es: 'Términos y Condiciones',
      en: 'Terms & Conditions'
    },
    eula: {
      file: 'EULA.md',
      es: 'Licencia (EULA)',
      en: 'License Agreement (EULA)'
    }
  };

  const I18N = {
    es: {
      pageTitle: 'NotyAlert - Documentación Legal',
      tagline: 'Documentación Legal y Políticas',
      taglineBadge: 'Offline-First • Privacidad por Diseño',
      loading: 'Cargando documento...',
      errorLoading: 'No se pudo cargar el documento. Por favor verifica tu conexión o intenta más tarde.',
      themeLight: 'Cambiar a modo claro',
      themeDark: 'Cambiar a modo oscuro',
      footerRights: 'NotyAlert. Todos los derechos reservados. Aplicación móvil para Android.'
    },
    en: {
      pageTitle: 'NotyAlert - Legal Documentation',
      tagline: 'Legal Documentation & Policies',
      taglineBadge: 'Offline-First • Privacy by Design',
      loading: 'Loading document...',
      errorLoading: 'Could not load the document. Please check your connection or try again later.',
      themeLight: 'Switch to light mode',
      themeDark: 'Switch to dark mode',
      footerRights: 'NotyAlert. All rights reserved. Mobile application for Android.'
    }
  };

  // --- State ---
  let currentLang = 'en';
  let currentDoc = 'privacy';
  const docCache = new Map();

  // --- Language Detection ---
  function detectLanguage() {
    // 1. URL Query override (?lang=es or ?lang=en)
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = (urlParams.get('lang') || '').toLowerCase();
    if (langParam === 'es' || langParam === 'en') {
      return langParam;
    }

    // 2. Saved preference in localStorage
    const saved = localStorage.getItem('notyalert_lang');
    if (saved === 'es' || saved === 'en') {
      return saved;
    }

    // 3. Browser / System language detection
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    // If it starts with 'es' (es, es-419, es-MX, es-ES), use Spanish; otherwise English
    if (browserLang.startsWith('es')) {
      return 'es';
    }

    return 'en';
  }

  // --- Document Detection from URL ---
  function detectDocFromUrl() {
    // Check hash: #privacy, #terms, #eula
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (DOCS[hash]) {
      return hash;
    }

    // Check query: ?doc=privacy
    const urlParams = new URLSearchParams(window.location.search);
    const docParam = (urlParams.get('doc') || '').toLowerCase();
    if (DOCS[docParam]) {
      return docParam;
    }

    return 'privacy';
  }

  // --- UI Update Functions ---
  function updateUITexts() {
    const texts = I18N[currentLang];
    document.title = texts.pageTitle;

    const taglineEl = document.getElementById('tagline-text');
    if (taglineEl) taglineEl.textContent = texts.tagline;

    const badgeEl = document.getElementById('tagline-badge');
    if (badgeEl) badgeEl.textContent = texts.taglineBadge;

    const footerRights = document.getElementById('footer-rights');
    if (footerRights) footerRights.textContent = texts.footerRights;

    // Update tab labels
    Object.keys(DOCS).forEach(docKey => {
      const tabEl = document.getElementById(`tab-${docKey}`);
      if (tabEl) {
        tabEl.textContent = DOCS[docKey][currentLang];
      }
    });

    // Update language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.dataset.lang === currentLang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

  }

  function updateActiveTab() {
    document.querySelectorAll('.tab-btn').forEach(tab => {
      const docKey = tab.dataset.doc;
      if (docKey === currentDoc) {
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
      }
    });
  }

  // --- Markdown Fetching and Rendering ---
  function renderSkeleton() {
    const contentEl = document.getElementById('markdown-content');
    contentEl.innerHTML = `
      <div class="skeleton-loader" aria-hidden="true">
        <div class="skeleton-line title"></div>
        <div class="skeleton-line subtitle"></div>
        <div style="height: 1rem"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
        <div style="height: 1.5rem"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line"></div>
      </div>
    `;
  }

  async function loadDocument(docKey, lang) {
    const filename = DOCS[docKey].file;
    const filePath = `${lang}/${filename}`;
    const cacheKey = filePath;

    updateActiveTab();

    const contentEl = document.getElementById('markdown-content');

    if (docCache.has(cacheKey)) {
      renderMarkdown(docCache.get(cacheKey));
      return;
    }

    // If opened directly from file system (file://), fetch() is blocked by browser CORS policy.
    // Use preloaded docs data directly to ensure it works offline and locally without a web server.
    if (window.location.protocol === 'file:' && window.NOTYALERT_DOCS?.[lang]?.[filename]) {
      const markdown = window.NOTYALERT_DOCS[lang][filename];
      docCache.set(cacheKey, markdown);
      renderMarkdown(markdown);
      return;
    }

    renderSkeleton();

    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const markdown = await response.text();
      docCache.set(cacheKey, markdown);
      renderMarkdown(markdown);
    } catch (err) {
      // Fallback to preloaded data if fetch is blocked or failed
      if (window.NOTYALERT_DOCS?.[lang]?.[filename]) {
        const markdown = window.NOTYALERT_DOCS[lang][filename];
        docCache.set(cacheKey, markdown);
        renderMarkdown(markdown);
        return;
      }

      console.error('Error fetching markdown:', err);
      contentEl.innerHTML = `
        <div class="markdown-body">
          <h2>${I18N[lang].errorLoading}</h2>
          <p>Ruta solicitada: <code>${filePath}</code></p>
        </div>
      `;
    }
  }

  function renderMarkdown(markdown) {
    const contentEl = document.getElementById('markdown-content');
    if (typeof marked !== 'undefined') {
      marked.setOptions({
        gfm: true,
        breaks: false,
        headerIds: true,
        mangle: false
      });
      contentEl.innerHTML = marked.parse(markdown);
    } else {
      contentEl.innerHTML = `<pre><code>${markdown}</code></pre>`;
    }
  }

  // --- Document Navigation ---
  function setDocument(docKey, updateHistory = true) {
    if (!DOCS[docKey]) return;
    currentDoc = docKey;
    if (updateHistory) {
      window.location.hash = docKey;
    }
    loadDocument(currentDoc, currentLang);
  }

  function setLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') return;
    currentLang = lang;
    localStorage.setItem('notyalert_lang', lang);
    updateUITexts();
    loadDocument(currentDoc, currentLang);
  }

  // --- Theme Management ---
  function initTheme() {
    const savedTheme = localStorage.getItem('notyalert_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to sleek dark

    setTheme(theme);

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('notyalert_theme', theme);

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      const sunIcon = themeToggleBtn.querySelector('.icon-sun');
      const moonIcon = themeToggleBtn.querySelector('.icon-moon');
      if (theme === 'light') {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
        themeToggleBtn.setAttribute('title', I18N[currentLang].themeDark);
        themeToggleBtn.setAttribute('aria-label', I18N[currentLang].themeDark);
      } else {
        if (sunIcon) sunIcon.style.display = 'block';
        if (moonIcon) moonIcon.style.display = 'none';
        themeToggleBtn.setAttribute('title', I18N[currentLang].themeLight);
        themeToggleBtn.setAttribute('aria-label', I18N[currentLang].themeLight);
      }
    }
  }

  // --- Event Listeners Initialization ---
  function initEvents() {
    // Language Switcher Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        setLanguage(lang);
      });
    });

    // Navigation Tabs
    document.querySelectorAll('.tab-btn').forEach(tab => {
      tab.addEventListener('click', () => {
        const docKey = tab.dataset.doc;
        setDocument(docKey);
      });
    });

    // Hash change handler (browser back/forward & direct links)
    window.addEventListener('hashchange', () => {
      const detected = detectDocFromUrl();
      if (detected !== currentDoc) {
        currentDoc = detected;
        loadDocument(currentDoc, currentLang);
      }
    });

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      });

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

  }

  // --- Bootstrap ---
  function init() {
    currentLang = detectLanguage();
    currentDoc = detectDocFromUrl();

    initTheme();
    updateUITexts();
    initEvents();

    loadDocument(currentDoc, currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
