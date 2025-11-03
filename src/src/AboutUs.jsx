import React from 'react';
import { Helmet } from 'react-helmet-async';

function AboutUs() {
  return (
    <>
    <Helmet>
        <title>About MOJAF - Leading Construction Materials Supplier in Saudi Arabia</title>
        <meta 
          name="description" 
          content="Mojaf is Saudi Arabia's premier building materials supplier since 2020, offering steel, timber, insulation, plumbing, electrical, tools & more across 5 locations." 
        />
        <meta 
          name="keywords" 
          content="construction materials Saudi Arabia, building supplies, steel suppliers, timber suppliers, plumbing materials, electrical supplies, hardware Saudi Arabia" 
        />
        <meta property="og:title" content="About MOJAF - Your Complete Construction Materials Solution" />
        <meta 
          property="og:description" 
          content="Discover Mojaf's vision to be Saudi Arabia's top destination for all building & construction material needs with our extensive product range." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mojaf-sa.com/about" />
        <meta property="og:image" content="https://www.mojaf-sa.com/about-m.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.mojaf-sa.com/about" />
</Helmet>
      <div className="about-us-container e-con-full e-flex e-parent">
        {/* Add schema markup for better search engine understanding */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MOJAF",
            "url": "https://www.mojaf-sa.com",
            "logo": "https://www.mojaf-sa.com/logo.webp",
            "foundingDate": "2020",
            "description": "Leading building & construction materials company in Saudi Arabia",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Saudi Arabia"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Construction Materials",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Steel Products"
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Timber Products"
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Insulation Materials"
                }
              ]
            }
          })}
        </script>

        <div className="text-content e-con-full e-flex e-child">
          <div className="heading-section">
            <h1 className="main-heading elementor-heading-title">About MOJAF</h1>
            <h2 className="sub-heading elementor-heading-title">All Building & Construction Materials Under One Roof</h2>
            <p className="description">
              Founded in 2020, MOJAF is the leading building & construction materials company in Saudi Arabia, 
              specializing in the distribution of all kinds of Steel, Timber, Insulation, Plumbing, Electrical, 
              Tools, Hardware, Chemicals & Fasteners, to support the construction needs in the Kingdom. With a 
              network of 5 Outlets, supported by advanced Logistics & Professional support.
            </p>
          </div>

          <div className="vision-mission-section">
            <div className="vision-box elementor-icon-box">
              <div className="elementor-icon-box-wrapper">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M26.875 6.25H25V3.75C25 1.6825 23.3175 0 21.25 0C19.1825 0 17.5 1.6825 17.5 3.75V6.25H12.5V3.75C12.5 1.6825 10.8175 0 8.75 0C6.6825 0 5 1.6825 5 3.75V6.25H3.125C1.4025 6.25 0 7.6525 0 9.375V23.75C0 27.1963 2.80375 30 6.25 30C9.645 30 12.4037 27.275 12.485 23.8988H12.5V15H17.5V23.8988H17.515C17.5963 27.275 20.355 30 23.75 30C27.1963 30 30 27.1963 30 23.75V9.375C30 7.6525 28.5975 6.25 26.875 6.25ZM18.75 3.75C18.75 2.37125 19.8713 1.25 21.25 1.25C22.6287 1.25 23.75 2.37125 23.75 3.75V6.25H18.75V3.75ZM6.25 3.75C6.25 2.37125 7.37125 1.25 8.75 1.25C10.1287 1.25 11.25 2.37125 11.25 3.75V6.25H6.25V3.75ZM6.25 28.75C3.4925 28.75 1.25 26.5075 1.25 23.75C1.25 20.9925 3.4925 18.75 6.25 18.75C9.0075 18.75 11.25 20.9925 11.25 23.75C11.25 26.5075 9.0075 28.75 6.25 28.75ZM23.75 28.75C20.9925 28.75 18.75 26.5075 18.75 23.75C18.75 20.9925 20.9925 18.75 23.75 18.75C26.5075 18.75 28.75 20.9925 28.75 23.75C28.75 26.5075 26.5075 28.75 23.75 28.75ZM23.75 17.5C21.6987 17.5 19.89 18.5075 18.75 20.0387V13.75H11.25V20.0387C10.11 18.5075 8.30125 17.5 6.25 17.5C4.19875 17.5 2.39 18.5075 1.25 20.0387V9.375C1.25 8.34125 2.09125 7.5 3.125 7.5H26.875C27.9088 7.5 28.75 8.34125 28.75 9.375V20.0387C27.61 18.5075 25.8013 17.5 23.75 17.5Z" fill="#00457C"></path>
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <h3 className="elementor-icon-box-title">
                    <span>Vision</span>
                  </h3>
                  <p className="elementor-icon-box-description">
                    To become the destination for all building and construction materials requirements in Saudi Arabia.
                  </p>
                </div>
              </div>
            </div>

            <div className="mission-box elementor-icon-box">
              <div className="elementor-icon-box-wrapper">
                <div className="elementor-icon-box-icon">
                  <span className="elementor-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M29.65 11.7375C29.8875 12.8 30 13.9 30 15C30 23.275 23.275 30 15 30C6.725 30 0 23.275 0 15C0 6.725 6.725 0 15 0C16.1 0 17.2 0.125 18.2625 0.35C18.6 0.425 18.8125 0.7625 18.7375 1.1C18.6625 1.4375 18.325 1.65 17.9875 1.575C17.0125 1.3625 16 1.25 15 1.25C7.4125 1.25 1.25 7.4125 1.25 15C1.25 22.5875 7.4125 28.75 15 28.75C22.5875 28.75 28.75 22.5875 28.75 15C28.75 13.9875 28.6375 12.9875 28.425 12.0125C28.35 11.675 28.5625 11.3375 28.9 11.2625C29.2375 11.1875 29.575 11.4 29.65 11.7375ZM16.75 6.425C17.0875 6.4875 17.4125 6.275 17.4875 5.9375C17.55 5.6 17.3375 5.275 17 5.2C16.35 5.0625 15.675 5 15 5C9.4875 5 5 9.4875 5 15C5 20.5125 9.4875 25 15 25C20.5125 25 25 20.5125 25 15C25 14.325 24.9375 13.65 24.8 13C24.7375 12.6625 24.4 12.45 24.0625 12.5125C23.725 12.5875 23.5 12.9125 23.575 13.25C23.6875 13.825 23.75 14.4125 23.75 15C23.75 19.825 19.825 23.75 15 23.75C10.175 23.75 6.25 19.825 6.25 15C6.25 10.175 10.175 6.25 15 6.25C15.5875 6.25 16.175 6.3125 16.75 6.425ZM14.4625 11.2875C14.8 11.2375 15.0375 10.925 14.9875 10.575C14.9375 10.225 14.625 9.9875 14.275 10.05C11.825 10.4 9.9875 12.525 9.9875 15C9.9875 17.7625 12.225 20 14.9875 20C17.4625 20 19.5875 18.1625 19.9375 15.7125C19.9875 15.375 19.75 15.05 19.4125 15C19.075 14.95 18.75 15.1875 18.7 15.525C18.4375 17.3625 16.8375 18.7375 14.9875 18.7375C12.925 18.7375 11.2375 17.05 11.2375 14.9875C11.2375 13.1375 12.6125 11.5375 14.45 11.275L14.4625 11.2875ZM20 9.1125V5.4125C20 4.575 20.325 3.7875 20.9125 3.2L23.9375 0.1875C24.1125 0.0125 24.3875 -0.05 24.6125 0.05C24.85 0.15 25 0.375 25 0.625V5H29.375C29.625 5 29.85 5.15 29.95 5.3875C30.05 5.625 29.9875 5.8875 29.8125 6.0625L26.8 9.075C26.2125 9.6625 25.425 9.9875 24.5875 9.9875H20.8875L15.45 15.425C15.325 15.55 15.1625 15.6125 15.0125 15.6125C14.8625 15.6125 14.6875 15.55 14.575 15.425C14.325 15.175 14.325 14.7875 14.575 14.5375L20.0125 9.1L20 9.1125ZM21.25 8.75H24.5875C25.0875 8.75 25.5625 8.55 25.9125 8.2L27.8625 6.25H24.375C24.025 6.25 23.75 5.975 23.75 5.625V2.1375L21.8 4.0875C21.45 4.4375 21.25 4.9125 21.25 5.4125V8.75Z" fill="#00457C"></path>
                    </svg>
                  </span>
                </div>
                <div className="elementor-icon-box-content">
                  <h3 className="elementor-icon-box-title">
                    <span>Mission</span>
                  </h3>
                  <p className="elementor-icon-box-description">
                    To provide customers with the largest range of building & construction materials in Saudi Arabia at the right value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="image-content e-con-full e-flex e-child">
          <div className="main-image">
            <img 
              className='img-1' 
              src="/about-m.webp" 
              alt="Mojaf construction materials including steel, timber, and plumbing supplies" 
              loading="lazy"
            />
          </div>
          <div className="overlay-image">
            <img 
              className='img-2' 
              src="/about2.webp" 
              alt="Mojaf warehouse with building materials inventory" 
              loading="lazy"
            />
          </div>
        </div>

        <style jsx>{`
          .about-us-container {
            display: flex;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px;
            font-family: 'Arial', sans-serif;
            position: relative;
            background-color: #f5f5f5;
          }
          
          .text-content {
            flex: 1;
            padding-right: 50px;
            position: relative;
            z-index: 2;
          }
          
          .image-content {
            flex: 1;
            position: relative;
          }
          
          .main-heading {
            font-size: 46px;
            color:rgb(1, 1, 1);
            margin-bottom: 20px;
            font-weight: 600;
          }
          
          .sub-heading {
            font-size: 28px;
            color: #2c3e50;
            margin-bottom: 25px;
            font-weight: 500;
          }
          
          .description {
            font-size: 16px;
            line-height: 1.7;
            color: #555;
            margin-bottom: 40px;
            text-align: justify;
          }
          
          .vision-mission-section {
            display: flex;
            gap: 30px;
            margin-bottom: 40px;
            flex-direction: column;
          }
          
          .vision-box, .mission-box {
            flex: 1;
          }
          
          .elementor-icon-box {
            display: flex;
            align-items: flex-start;
          }
          
          .elementor-icon-box-wrapper {
            display: flex;
            align-items: flex-start;
            gap: 15px;
          }
          
          .elementor-icon-box-icon {
            margin-top: 5px;
          }
          
          .elementor-icon-box-icon .elementor-icon {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f5f9fc;
            border-radius: 50%;
          }
          
          .elementor-icon-box-title {
            font-size: 20px;
            color: #2c3e50;
            margin-bottom: 10px;
            font-weight: 500;
          }
          
          .elementor-icon-box-description {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
            text-align: justify;
          }
          
          .experience-counter {
            width: 250px;
            height: 150px;
            text-align: left;
            background: #00457C;
            color: white;
            padding: 15px 30px;
            border-radius: 10px;
            display: inline-block;
            position: absolute;
            top: 10%;
            left: 92%;
            align-item: center;
          }
          
          .counter-number {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 2px;
          }
          
          .counter-title {
            font-size: 16px;
            font-weight: 500;
          }
          
          .main-image {
            position: relative;
            z-index: 2;
          }
          
          .main-image img {
            width: 70%;
            height: 500px;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          
          .overlay-image {
            position: absolute;
            bottom: 20px;
            left: 50px;
            z-index: 1;
            width: 100%;
          }
          
          .overlay-image img {
            width: 75%;
            height: 400px;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          
          @media (max-width: 992px) {
            .about-us-container {
              flex-direction: column;
            }
            
            .text-content {
              padding-right: 0;
              margin-bottom: 50px;
            }
            
            .image-content {
              margin-top: 50px;
            }
            
            .overlay-image {
              right: 0;
              bottom: -50px;
            }
          }
          
          @media (max-width: 768px) {
            .vision-mission-section {
              flex-direction: column;
            }
            
            .main-heading {
              font-size: 28px;
            }
            
            .sub-heading {
              font-size: 22px;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default AboutUs;