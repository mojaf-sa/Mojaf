const HTML = document.getElementById('html-root');
const BTN  = document.getElementById('lang-toggle');

const STORE_KEY = 'mojaf-lang';
const DEFAULT_LANG = 'en';

const DIR = { en: 'ltr', ar: 'rtl' };
const LABEL = { en: 'العربية', ar: 'English' };

async function loadDict(lang) {
  const res = await fetch(`/assets/i18n/${lang}.json`, { cache: 'no-store' });
  if (!res.ok) throw new Error('i18n fetch failed');
  return res.json();
}

function applyI18n(dict) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = dict[key];
    if (val) el.textContent = val;
  });
}

async function setLang(lang) {
  const safe = (lang === 'ar') ? 'ar' : 'en';
  const dict = await loadDict(safe);
  HTML?.setAttribute('lang', safe);
  HTML?.setAttribute('dir', DIR[safe]);
  if (BTN) BTN.textContent = LABEL[safe];
  localStorage.setItem(STORE_KEY, safe);
  applyI18n(dict);
}

BTN?.addEventListener('click', () => {
  const next = (localStorage.getItem(STORE_KEY) === 'ar') ? 'en' : 'ar';
  setLang(next);
});

// initial
const saved = localStorage.getItem(STORE_KEY) || DEFAULT_LANG;
setLang(saved).catch(() => {});
