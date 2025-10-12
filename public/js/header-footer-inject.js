
(function(){
  const nav = document.createElement('nav');
  nav.setAttribute('role','navigation');
  nav.innerHTML = `
  <div class="site-nav" style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;padding:10px 16px;border-bottom:1px solid #eee;font-family:system-ui,Segoe UI,Roboto,Arial;">
    <a href="/" style="text-decoration:none;font-weight:700">MOJAF</a>
    <a href="/about">About Us</a>
    <a href="/services">Services</a>
    <a href="/all-products">Products</a>
    <a href="/catalogs">Catalogs</a>
    <a href="/partners">Partners</a>
    <a href="/contact">Contact</a>
    <a href="/blog/" style="margin-left:auto">Blog</a>
  </div>`;
  document.body.prepend(nav);

  const foot = document.createElement('footer');
  foot.innerHTML = `
  <div style="border-top:1px solid #eee;margin-top:40px;padding:24px 16px;font-family:system-ui,Segoe UI,Roboto,Arial;">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px">
      <div><strong>MOJAF</strong><div>Your Procurement Partner</div></div>
      <div>
        <div style="font-weight:600;margin-bottom:8px">Popular Guides</div>
        <ul style="margin:0;padding-left:18px;line-height:1.7">
          <li><a href="/blog/top-10-fasteners-suppliers-saudi-arabia-2025.html">Top 10 Fasteners Suppliers (2025)</a></li>
          <li><a href="/landing/spc-flooring-supplier-riyadh.html">SPC – Riyadh</a></li>
          <li><a href="/landing/spc-flooring-supplier-jeddah.html">SPC – Jeddah</a></li>
          <li><a href="/landing/wall-skirting-supplier-riyadh.html">Skirting – Riyadh</a></li>
          <li><a href="/landing/wall-skirting-supplier-jeddah.html">Skirting – Jeddah</a></li>
          <li><a href="/blog/vinyl-flooring-distributor-ksa.html">Vinyl Distributor KSA</a></li>
          <li><a href="/blog/rock-wool-insulation-supplier-ksa.html">Rockwool Supplier</a></li>
          <li><a href="/blog/cement-board-supplier-ksa.html">Cement Board Supplier</a></li>
          <li><a href="/blog/gypsum-board-supplier-dammam.html">Gypsum Board Dammam</a></li>
        </ul>
      </div>
      <div>
        <div style="font-weight:600;margin-bottom:8px">Contact</div>
        <div>Email: <a href="mailto:info@mojaf-sa.com">info@mojaf-sa.com</a></div>
        <div>Phone: +966 56 840 1900</div>
        <div>Jeddah · Riyadh · Dammam · Khobar</div>
      </div>
    </div>
    <div style="margin-top:16px;color:#666">© 2025 MOJAF. All rights reserved.</div>
  </div>`;
  document.body.append(foot);

  if (window.__GSC_VERIFY) {
    var m = document.createElement('meta');
    m.name = "google-site-verification";
    m.content = window.__GSC_VERIFY;
    document.head.appendChild(m);
  }
})();