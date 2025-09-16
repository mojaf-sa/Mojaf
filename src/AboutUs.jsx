import React from "react";
import { Helmet } from "react-helmet-async";

function AboutUs() {
  // JSON-LD (Organization + legal name)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MOJAF Trading",
    legalName: "Establishment Mohamed Abdallah Mohamed Al-Jifri for Trading",
    url: "https://www.mojaf-sa.com",
    logo: "https://www.mojaf-sa.com/MOJ.jpg",
    description:
      "MOJAF is a trusted supplier of construction and building materials in Saudi Arabia, including fasteners, wall skirting, flooring, insulation, electrical components, and portacabin materials across Riyadh, Jeddah, Dammam, Khobar, Makkah, and Madinah.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressLocality:
        "Jeddah, Riyadh, Dammam, Khobar, Makkah, Madinah",
      streetAddress: "Multiple Locations Across Saudi Arabia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966568401900",
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["en", "ar"],
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61576350434274",
      "https://www.mojaf-sa.com",
    ],
    knowsAbout: [
      "construction materials Saudi Arabia",
      "building supplies Riyadh",
      "fasteners and screws supplier",
      "MDF and PVC wall skirting",
      "vinyl SPC LVT flooring",
      "rockwool and thermal insulation",
      "electrical components and lighting",
      "fiber cement and gypsum boards",
      "portacabin materials",
      "warehouse logistics and procurement",
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          About MOJAF - Leading Construction Materials Supplier in Saudi Arabia
        </title>
        <meta
          name="description"
          content="MOJAF is Saudi Arabia's trusted building materials supplier since 2020, offering steel, timber, insulation, plumbing, electrical, tools & more across major cities."
        />
        <meta
          property="og:title"
          content="About MOJAF - Your Complete Construction Materials Solution"
        />
        <meta
          property="og:description"
          content="Discover MOJAF’s vision to be Saudi Arabia’s top destination for all building & construction material needs with our extensive product range."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mojaf-sa.com/about" />
        <meta property="og:image" content="https://www.mojaf-sa.com/about-m.webp" />
        <script type="application/ld+json">
          {JSON.stringify(orgJsonLd)}
        </script>
      </Helmet>

      <div className="about-us-container e-con-full e-flex e-parent">
        <div className="text-content e-con-full e-flex e-child">
          <div className="heading-section">
            <h1 className="main-heading elementor-heading-title">About MOJAF</h1>
            <h2 className="sub-heading elementor-heading-title">
              All Building &amp; Construction Materials Under One Roof
            </h2>
            <p className="description">
              Founded in 2020, MOJAF is the leading building &amp; construction
              materials company in Saudi Arabia, specializing in the distribution
              of all kinds of Steel, Timber, Insulation, Plumbing, Electrical,
              Tools, Hardware, Chemicals &amp; Fasteners, to support the
              construction needs in the Kingdom. With a network of 5 outlets,
              supported by advanced logistics &amp; professional support.
            </p>
          </div>

          <div className="vision-mission-section">
            <div className="vision-box elementor-icon-box">
              <div className="elementor-icon-box-wrapper">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon" aria-hidden="true">
                    {/* icon svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M26.875 6.25H25V3.75C25 1.6825 23.3175 0 21.25 0C19.1825 0 17.5 1.6825 17.5 3.75V6.25H12.5V3.75C12.5 1.6825 10.8175 0 8.75 0C6.6825 0 5 1.6825 5 3.75V6.25H3.125C1.4025 6.25 0 7.6525 0 9.375V23.75C0 27.1963 2.80375 30 6.25 30C9.645 30 12.4037 27.275 12.485 23.8988H12.5V15H17.5V23.8988H17.515C17.5963 27.275 20.355 30 23.75 30C27.1963 30 30 27.1963 30 23.75V9.375C30 7.6525 28.5975 6.25 26.875 6.25Z" fill="#00457C"/>
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <h3 className="elementor-icon-box-title"><span>Vision</span></h3>
                  <p className="elementor-icon-box-description">
                    To become the destination for all building and construction
                    materials requirements in Saudi Arabia.
                  </p>
                </div>
              </div>
            </div>

            <div className="mission-box elementor-icon-box">
              <div className="elementor-icon-box-wrapper">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon" aria-hidden="true">
                    {/* icon svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M29.65 11.7375C29.8875 12.8 30 13.9 30 15C30 23.275 23.275 30 15 30C6.725 30 0 23.275 0 15C0 6.725 6.725 0 15 0C16.1 0 17.2 0.125 18.2625 0.35" fill="#00457C"/>
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <h3 className="elementor-icon-box-title"><span>Mission</span></h3>
                  <p className="elementor-icon-box-description">
                    To provide customers with the largest range of building &amp;
                    construction materials in Saudi Arabia at the right value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal entity note (visible) */}
          <section className="about-legal" aria-label="Legal Entity">
            <h2>Our Legal Entity</h2>
            <p>
              MOJAF Trading operates under the licensed entity
              <strong> Establishment Mohamed Abdallah Mohamed Al-Jifri for Trading</strong>,
              registered in the Kingdom of Saudi Arabia. While we are publicly known and
              branded as <strong>MOJAF Trading</strong>, this is the official name used
              in compliance and government records.
            </p>
          </section>
        </div>

        <div className="image-content e-con-full e-flex e-child">
          <div className="main-image">
            <img
              className="img-1"
              src="/about-m.webp"
              alt="MOJAF construction materials including steel, timber, plumbing and tools"
              loading="lazy"
            />
          </div>
          <div className="overlay-image">
            <img
              className="img-2"
              src="/about2.webp"
              alt="MOJAF warehouse with building materials inventory"
              loading="lazy"
            />
          </div>
        </div>

        {/* Page styles */}
        <style>{`
          .about-us-container{display:flex;max-width:1200px;margin:0 auto;padding:60px 20px;background:#f5f5f5}
          .text-content{flex:1;padding-right:50px;position:relative;z-index:2}
          .image-content{flex:1;position:relative}
          .main-heading{font-size:46px;color:#010101;margin:0 0 20px;font-weight:600}
          .sub-heading{font-size:28px;color:#2c3e50;margin:0 0 25px;font-weight:500}
          .description{font-size:16px;line-height:1.7;color:#555;margin:0 0 40px;text-align:justify}
          .vision-mission-section{display:flex;gap:30px;margin-bottom:40px;flex-direction:column}
          .elementor-icon-box{display:flex;align-items:flex-start}
          .elementor-icon-box-wrapper{display:flex;align-items:flex-start;gap:15px}
          .elementor-icon-box-icon{margin-top:5px}
          .elementor-icon-box-icon .elementor-icon{width:50px;height:50px;display:flex;align-items:center;justify-content:center;background:#f5f9fc;border-radius:50%}
          .elementor-icon-box-title{font-size:20px;color:#2c3e50;margin:0 0 10px;font-weight:500}
          .elementor-icon-box-description{font-size:16px;line-height:1.6;color:#555;text-align:justify}
          .main-image{position:relative;z-index:2}
          .main-image img{width:70%;max-height:500px;height:auto;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.1)}
          .overlay-image{position:absolute;bottom:20px;left:50px;z-index:1;width:100%}
          .overlay-image img{width:75%;max-height:400px;height:auto;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.1)}
          .about-legal{margin-top:28px;padding:18px;background:#f9fafb;border-left:4px solid #0a2540;border-radius:6px}
          .about-legal h2{font-size:1.3rem;margin:0 0 10px;color:#0a2540}
          .about-legal p{font-size:1rem;color:#333;line-height:1.6}
          @media (max-width:992px){.about-us-container{flex-direction:column}.text-content{padding-right:0;margin-bottom:50px}.image-content{margin-top:50px}.overlay-image{right:0;bottom:-50px}}
          @media (max-width:768px){.main-heading{font-size:28px}.sub-heading{font-size:22px}}
        `}</style>
      </div>
    </>
  );
}

export default AboutUs;
