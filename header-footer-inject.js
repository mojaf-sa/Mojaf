/* header-footer-inject.js — adds Blog + Services by City + Top 10 link to header/footer */
(function(){
  var LINKS = [
    {href:'/blog/', text:'Blog'},
    {href:'/landing/', text:'Services by City'},
    {href:'/blog/top-10-fasteners-suppliers-saudi-arabia-2025.html', text:'Top 10 Fasteners'}
  ];
  function ensureLink(container, link){
    if(!container) return;
    var exists = Array.from(container.querySelectorAll('a')).some(a => a.getAttribute('href') === link.href);
    if(exists) return;
    var a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    a.style.marginLeft = '12px';
    a.style.whiteSpace = 'nowrap';
    container.appendChild(a);
  }
  function findTargets(){
    var headerNav = document.querySelector('header nav, header .nav, .header nav, .site-header nav, nav');
    var footerNav = document.querySelector('footer nav, footer .nav, .footer nav, .site-footer nav, footer ul');
    return {headerNav, footerNav};
  }
  function apply(){
    var t = findTargets();
    LINKS.forEach(function(l){ ensureLink(t.headerNav, l); ensureLink(t.footerNav, l); });
  }
  var mo = new MutationObserver(function(){ apply(); });
  mo.observe(document.documentElement || document.body, {childList:true, subtree:true});
  window.addEventListener('DOMContentLoaded', apply);
  apply();
})();