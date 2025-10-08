import React from 'react';

export default function Footer() {
  return (
    <footer style={{background: '#0f172a', color: '#ffffff', padding: '40px 20px'}}>
      <div style={{maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 20}}>
        <div style={{flex: '1 1 250px'}}>
          <h3 style={{margin: 0}}>MOJAF Trading</h3>
          <p style={{marginTop: 8, lineHeight: 1.5}}>
            Procurement Partner — Fasteners, Screws & Construction Materials
          </p>
          <p style={{marginTop: 8}}>
            <strong>Phone:</strong> +966 56 840 1900<br/>
            <strong>Address:</strong> Jeddah, Saudi Arabia
          </p>
        </div>

        <div style={{flex: '1 1 200px'}}>
          <h4 style={{margin: '0 0 8px 0'}}>Quick Links</h4>
          <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
            <li><a href="/riyadh.html" style={{color: '#cbd5e1'}}>Riyadh</a></li>
            <li><a href="/jeddah.html" style={{color: '#cbd5e1'}}>Jeddah</a></li>
            <li><a href="/dammam.html" style={{color: '#cbd5e1'}}>Dammam</a></li>
            <li><a href="/contact" style={{color: '#cbd5e1'}}>Contact</a></li>
          </ul>
        </div>

        <div style={{flex: '1 1 200px'}}>
          <h4 style={{margin: '0 0 8px 0'}}>Follow Us</h4>
          <p style={{margin: 0}}>WhatsApp: <a href="https://wa.me/966568401900" style={{color: '#cbd5e1'}}>+966 56 840 1900</a></p>
        </div>
      </div>

      <div style={{textAlign: 'center', marginTop: 24, fontSize: 13, color: '#94a3b8'}}>
        © {datetime.datetime.utcnow().year} MOJAF Trading. All rights reserved.
      </div>
    </footer>
  );
}
