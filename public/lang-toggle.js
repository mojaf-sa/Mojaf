// Optional helper — safe to include via <script src="/public/lang-toggle.js" defer></script>
(function(){
  function setLangFromQuery(){
    var params = new URLSearchParams(location.search);
    var q = params.get('lang');
    if (!q) return;
    try { localStorage.setItem('mojaf_lang', q); } catch(e){}
    var html = document.documentElement;
    if (q === 'ar') { html.lang = 'ar'; html.dir = 'rtl'; }
    else { html.lang = 'en'; html.dir = 'ltr'; }
  }
  function boot(){
    try {
      setLangFromQuery();
      var saved = localStorage.getItem('mojaf_lang') || 'en';
      var html = document.documentElement;
      if (saved === 'ar') { html.lang = 'ar'; html.dir = 'rtl'; }
      else { html.lang = 'en'; html.dir = 'ltr'; }
    } catch(e){}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
