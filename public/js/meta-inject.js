
(function(){
  const head = document.head;
  const link = document.createElement('link');
  link.rel = 'canonical';
  link.href = location.origin + location.pathname;
  head.appendChild(link);
  const robots = document.createElement('meta');
  robots.name = 'robots';
  robots.content = 'index,follow';
  head.appendChild(robots);
})();