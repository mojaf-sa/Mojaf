(function(){
  function addLink(container){
    if(!container) return;
    var exists = container.querySelector('a[href$="/blog.html"], a[href$="blog.html"], a:contains("Blog")');
    if(exists) return;
    var a = document.createElement('a');
    a.href = '/blog.html';
    a.textContent = 'Blog';
    a.style.marginLeft = '12px';
    // Try to insert into lists if present
    var ul = container.querySelector('ul');
    if(ul){
      var li = document.createElement('li');
      li.appendChild(a);
      ul.appendChild(li);
    } else {
      container.appendChild(a);
    }
  }
  function go(){
    var header = document.querySelector('header, nav, .navbar, .header');
    var footer = document.querySelector('footer, .footer');
    addLink(header||document.body);
    addLink(footer||document.body);
  }
  if(document.readyState === 'loading'){document.addEventListener('DOMContentLoaded', go);} else {go();}
})();