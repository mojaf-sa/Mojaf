(function(){
  function linkSwap() {
    var p = location.pathname;
    if (p.startsWith('/ar/')) return '/';
    if (p === '/' || p === '/index.html') return '/ar/';
    // Try path mirror
    if (p.endsWith('.html')) {
      var ar = '/ar' + p;
      return ar;
    } else {
      return '/ar/';
    }
  }
  var el = document.createElement('div');
  el.setAttribute('style','position:fixed;right:12px;top:10px;font:14px system-ui;z-index:9999');
  var a = document.createElement('a');
  a.href = linkSwap();
  a.textContent = (location.pathname.startsWith('/ar/') ? 'EN' : 'العربية');
  el.appendChild(a);
  document.body.appendChild(el);
})();