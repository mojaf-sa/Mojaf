/* meta-inject.js — SPA titles/descriptions/keywords */
(function(){
  var META_KEYWORDS = 'building materials supplier saudi arabia, spc flooring supplier riyadh, spc flooring supplier jeddah, vinyl flooring distributor ksa, lvt flooring supplier jeddah, wall skirting supplier riyadh, wall skirting supplier jeddah, mdf skirting boards saudi arabia, ps skirting supplier ksa, fasteners supplier jeddah, screws supplier riyadh, rock wool insulation supplier ksa, cement board supplier ksa, gypsum board supplier dammam, portacabin materials supplier saudi arabia';
  function set(name, content){
    var el = document.querySelector('meta[name="'+name+'"]');
    if(!el){ el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
    el.setAttribute('content', content);
  }
  function setTitle(t){ if(t) document.title = t; }
  function setDesc(d){ set('description', d); }
  function setKeywords(k){ set('keywords', k); }
  var routes = {
    "/services": {
      title: "MOJAF — Construction Services & Materials in Saudi Arabia",
      desc: "KSA-wide service: SPC/LVT flooring, wall skirting, fasteners, boards, insulation and MEP. Fast quotes in Riyadh, Jeddah, Dammam."
    },
    "/all-products": {
      title: "MOJAF — Building Materials Catalog (KSA)",
      desc: "Explore MOJAF’s catalog: screws/fasteners, SPC/LVT flooring, MDF/PS skirting, boards and insulation."
    },
    "/about": {
      title: "About MOJAF — Your Procurement Partner in KSA",
      desc: "Trusted supplier for construction materials in Saudi Arabia. Consistent quality and reliable delivery."
    },
    "/contact": {
      title: "Contact MOJAF — Quotes & Inquiries (Saudi Arabia)",
      desc: "Get pricing and availability for fasteners, flooring, skirting, boards, insulation and more."
    }
  };
  function apply(){
    var p = location.pathname;
    var cfg = routes[p];
    if(cfg){ setTitle(cfg.title); setDesc(cfg.desc); }
    setKeywords(META_KEYWORDS);
  }
  window.addEventListener('popstate', apply);
  window.addEventListener('DOMContentLoaded', apply);
  apply();
})();