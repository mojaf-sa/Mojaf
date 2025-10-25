// Minimal bilingual client-side i18n for static sites
(function(){
  const LS_KEY='mojaf_lang';
  const html=document.documentElement;
  const btnId='lang-toggle';
  function setDir(l){ html.lang=l; html.dir=(l==='ar'? 'rtl':'ltr'); }
  function label(l){ return l==='ar'?'English':'العربية'; }
  async function loadDict(l){
    const res= await fetch(`/assets/i18n/${l}.json`,{cache:'no-store'});
    if(!res.ok) return {};
    return res.json();
  }
  async function apply(l){
    setDir(l);
    localStorage.setItem(LS_KEY,l);
    const dict= await loadDict(l);
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k=el.getAttribute('data-i18n');
      if(dict[k]) el.textContent=dict[k];
    });
    const t=document.getElementById(btnId);
    if(t){ t.textContent=label(l); t.setAttribute('aria-label',`Switch language to ${l==='ar'?'English':'Arabic'}`); }
  }
  async function init(){
    const saved=localStorage.getItem(LS_KEY)|| (navigator.language||'en').startsWith('ar')?'ar':'en';
    await apply(saved);
    let b=document.getElementById(btnId);
    if(!b){
      b=document.createElement('button'); b.id=btnId; b.type='button';
      b.style.cssText='position:fixed;top:12px;right:12px;padding:.4rem .7rem;border:1px solid #ddd;border-radius:8px;background:#fff;z-index:9999;cursor:pointer';
      document.body.appendChild(b);
    }
    b.onclick=()=> apply((html.lang==='ar')?'en':'ar');
    b.textContent=label(saved);
  }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',init); } else { init(); }
})();
