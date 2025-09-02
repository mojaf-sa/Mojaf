/* ===== Footer (moved from <style jsx>) ===== */
.f-footer-container { font-family: 'Poppins', sans-serif; }

.f-footer { background-color: #0a2540; color: #ffffff; padding: 80px 0 0; }

.f-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }

.f-footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; margin-bottom: 50px; }

.f-footer-col h3 { color: #ffffff; margin-bottom: 20px; font-size: 1.2rem; font-weight: 600; }

.f-footer-col ul { list-style: none; padding: 0; }
.f-footer-col ul li { margin-bottom: 10px; display: flex; align-items: center; }
.f-footer-col ul li a { color: rgba(255, 255, 255, 0.7); transition: all 0.3s ease; cursor: pointer; }
.f-footer-col ul li a:hover { color: #d4af37; padding-left: 5px; }

.f-logo h1 { color: #ffffff; font-size: 1.8rem; font-weight: 700; margin-bottom: 5px; }
.f-logo span { color: #d4af37; font-size: 0.8rem; display: block; }

.f-footer-col p { color: rgba(255, 255, 255, 0.7); margin-top: 20px; font-size: 0.9rem; line-height: 1.6; }

.f-icon { color: #d4af37; margin-right: 10px; width: 20px; text-align: center; }

.f-footer-bottom { border-top: 1px solid rgba(255, 255, 255, 0.1); padding: 20px 0; text-align: center; }
.f-footer-bottom p { color: rgba(255, 255, 255, 0.5); font-size: 0.9rem; margin: 0; }

@media (max-width: 768px) {
  .f-footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
  .f-footer { padding: 60px 0 0; }
}
@media (max-width: 576px) {
  .f-footer-grid { grid-template-columns: 1fr; }
  .f-footer-col { margin-bottom: 30px; }
  .f-footer-col:last-child { margin-bottom: 0; }
}
