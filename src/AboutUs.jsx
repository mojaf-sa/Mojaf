import React from 'react';

function AboutUs() {
  return (
    <section id="about" style={{ padding: "60px 20px", background: "#f5f5f5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "20px" }}>
          About MOJAF
        </h1>
        <h2 style={{ fontSize: "20px", color: "#555", marginBottom: "20px" }}>
          Your trusted partner for building & construction materials in Saudi Arabia
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#333" }}>
          Founded in 2020, MOJAF is a leading supplier of building and construction 
          materials in Saudi Arabia. We specialize in high-quality products including 
          steel, timber, insulation, plumbing, electrical, tools, hardware, chemicals 
          & fasteners. With multiple locations across the Kingdom, we provide 
          contractors and developers with reliable logistics and professional support.
        </p>
        <p style={{ fontSize: "16px", marginTop: "15px", color: "#333" }}>
          <strong>Legal Name:</strong> Establishment Mohamed Abdallah Mohamed Al-Jifri for Trading
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
