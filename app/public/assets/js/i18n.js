(function() {
  var SUPPORTED = ['en','ar'];
  function $(s){return document.querySelector(s)};
  function $all(s){return Array.from(document.querySelectorAll(s))};
  function pref(){ try{return localStorage.getItem('lang')||document.documentElement.lang||'en'}catch(e){return 'en'} }
  function setLang(l){ document.documentElement.lang=l; document.documentElement.dir=(l==='ar'?'rtl':'ltr'); }
  async function load(l){ try{ const r=await fetch('/assets/i18n/'+l+'.json',{cache:'no-store'}); if(!r.ok) throw 0; return await r.json(); }catch(e){ return {}; } }
  function apply(dict){ $all('[data-i18n]').forEach(el=>{ const k=el.getAttribute('data-i18n'); if(dict[k]) el.textContent=dict[k]; }); const btn=$('#lang-toggle'); if(btn){ btn.textContent=(document.documentElement.lang==='ar')?'English':'العربية'; } }
  async function switchTo(l){ if(!SUPPORTED.includes(l)) l='en'; setLang(l); try{localStorage.setItem('lang',l)}catch(e){}; const d=await load(l); apply(d); }
  async function init(){ const l=pref(); await switchTo(l); const btn=$('#lang-toggle'); if(btn){ btn.onclick=()=> switchTo((document.documentElement.lang==='ar')?'en':'ar'); } }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
