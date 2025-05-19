import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
    adaptiveHeight: false
  };

  const sliderImages = [
    "https://hhic.sa/wp-content/uploads/2023/11/Pic-2.png",
    "https://hhic.sa/wp-content/uploads/2023/11/Pic-5.png",
    "https://maggiescarf.com/wp-content/uploads/2019/01/images2089-5c34eb74dd517-1024x683.jpg",
    "https://images.pexels.com/photos/218445/pexels-photo-218445.jpeg",
    "https://content.app-sources.com/s/10477147413060978/uploads/Blog_Images/unnamed_58-9991579.jpg",
    "https://www.decormania.co.uk/cdn/shop/files/il11-2m-black-wallstyl-skirting-board-covings-decormania-656622.webp",
  ];

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/all-products');
  };

  return (
    <div className="hero-wrapper1">
      {/* Hero Slider Section */}
      <section className="hero-section1" id='hero1'>
        <div className="slider-container1">
          <Slider {...settings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="slide1">
                <div className="image-overlay1"></div>
                <img
                  src={image}
                  alt={`Construction materials ${index + 1}`}
                  className="slider-image1"
                />
                <div className="slider-content1">
                  <div className="welcome-container1">
                    <div className="welcome-line1"></div>
                    <div className="welcome-text1">Welcome to MOJAF</div>
                  </div>
                  <h1 className="hero-title1">
                    Explore World class<br />
                    Construction & Building Materials
                  </h1>
                  <div className="hero-subtitle-container1">
                    <div className="subtitle-line1"></div>
                    <div className="hero-subtitle1">
                      The complete solution for construction and building materials
                    </div>
                  </div>
                  <div className="hero-button-container1">
                    <a href="/all-products" className="hero-button1" onClick={handleClick}>
                      <div className="button-text1">Explore Products</div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
 <div style={{marginTop:20}} />
      {/* Features Section */}
      <section className="features-section1">
        <div className="features-container1">
          <div className="feature1" data-aos="zoom-in-up" data-aos-delay="0">
            <div className="feature-icon1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path className="st01" d="M6.5,9.9L7,9.5c0.8-0.6,1.4-1.6,1.5-2.6l0.1-0.4c0.4-2.6,3.2-4.2,5.8-3.2l0,0c1.1,0.4,2.2,0.4,3.3,0l0,0 c2.5-1.1,5.4,0.5,5.8,3.2l0.1,0.4c0.1,1,0.7,2,1.5,2.6l0.5,0.4c2.1,1.6,2.1,4.6,0,6.2L25,16.5c-0.8,0.6-1.4,1.6-1.5,2.6l-0.1,0.4 c-0.4,2.6-3.2,4.2-5.8,3.2l0,0c-1.1-0.4-2.2-0.4-3.3,0l0,0c-2.5,1.1-5.4-0.5-5.8-3.2l-0.1-0.4c-0.1-1-0.7-2-1.5-2.6l-0.5-0.4 C4.5,14.5,4.5,11.5,6.5,9.9z"></path>
                <polyline className="st01" points="22,22 22,29 16,26 10,29 10,22 "></polyline>
                <line className="st01" x1="16" y1="9" x2="16" y2="10"></line>
                <line className="st01" x1="16" y1="16" x2="16" y2="17"></line>
                <path className="st01" d="M17,10h-1.5c-0.8,0-1.5,0.7-1.5,1.5v0c0,0.8,0.7,1.5,1.5,1.5h1c0.8,0,1.5,0.7,1.5,1.5v0c0,0.8-0.7,1.5-1.5,1.5 H15"></path>
              </svg>
            </div>
            <h3 className="feature-title1">Affordable Pricing</h3>
            <p className="feature-description1">We offer competitive prices without compromising quality.</p>
          </div>
          
          <div className="feature1" data-aos="zoom-in-up" data-aos-delay="100">
            <div className="feature-icon1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 48">
                <path d="M38.2235 18.1173C38.2332 20.8309 37.4346 23.4858 35.9294 25.7438C34.8662 27.3295 33.4833 28.6755 31.8693 29.6954C30.2553 30.7152 28.446 31.3864 26.5573 31.6658C25.8912 31.7835 25.2044 31.8423 24.4985 31.8423C23.7926 31.8423 23.1059 31.7835 22.4397 31.6658C20.5511 31.3864 18.7417 30.7152 17.1277 29.6954C15.5138 28.6755 14.1308 27.3295 13.0676 25.7438C11.5625 23.4858 10.7638 20.8309 10.7735 18.1173C10.7722 16.3144 11.1262 14.529 11.8155 12.8631C12.5047 11.1972 13.5156 9.68358 14.7904 8.4087C16.0651 7.13383 17.5787 6.12277 19.2445 5.43334C20.9103 4.74392 22.6957 4.38965 24.4985 4.39081C26.3014 4.38946 28.0869 4.74359 29.7528 5.43295C31.4187 6.12231 32.9323 7.13336 34.2071 8.40827C35.4819 9.68318 36.4928 11.1969 37.1819 12.8629C37.8711 14.5289 38.2251 16.3144 38.2235 18.1173Z" stroke="#E21E26" strokeWidth="2.64706" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M42.6367 36.6867L39.4014 37.4515C38.6764 37.6279 38.1073 38.1765 37.9514 38.9029L37.2647 41.7853C36.8926 43.3529 34.8926 43.8235 33.8529 42.5882L24.5 31.8441L15.147 42.6088C14.1073 43.8441 12.1073 43.3735 11.7353 41.8044L11.0485 38.922C10.9652 38.5694 10.7855 38.2469 10.5294 37.9906C10.2734 37.7342 9.95104 37.5542 9.59849 37.4706L6.3632 36.7059C4.87202 36.3529 4.34261 34.4912 5.42202 33.4117L13.0691 25.7647C14.1323 27.3505 15.5152 28.6965 17.1292 29.7163C18.7431 30.7361 20.5525 31.4073 22.4411 31.6867C23.1073 31.8044 23.7941 31.8632 24.5 31.8632C25.2058 31.8632 25.8926 31.8044 26.5588 31.6867C28.4474 31.4073 30.2568 30.7361 31.8707 29.7163C33.4847 28.6965 34.8677 27.3505 35.9308 25.7647L43.5779 33.4117C44.6573 34.4706 44.1279 36.3338 42.6367 36.6867ZM25.6367 12.1956L26.7941 14.5103C26.8937 14.6845 27.029 14.8356 27.1912 14.9538C27.3535 15.0719 27.5389 15.1543 27.7353 15.1956L29.8338 15.5485C31.1661 15.7647 31.4808 16.7456 30.5191 17.7059L28.8926 19.3338C28.7481 19.4936 28.6427 19.6848 28.5848 19.8923C28.5269 20.0997 28.518 20.3179 28.5588 20.5294L29.0294 22.5485C29.4014 24.1367 28.5588 24.7647 27.147 23.922L25.1867 22.7647C24.9876 22.6585 24.7654 22.6029 24.5397 22.6029C24.314 22.6029 24.0917 22.6585 23.8926 22.7647L21.9308 23.922C20.5191 24.7456 19.6764 24.1367 20.0485 22.55L20.5191 20.5294C20.5985 20.1573 20.4603 19.6073 20.1867 19.3338L18.5588 17.7059C17.5985 16.7456 17.9117 15.7853 19.2455 15.55L21.3426 15.197C21.6955 15.1382 22.1073 14.8235 22.2647 14.5103L23.422 12.1956C23.9897 10.9412 25.0103 10.9412 25.6367 12.1956Z" stroke="#E21E26" strokeWidth="2.64706" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="feature-title1">Uncompromising Quality</h3>
            <p className="feature-description1">We are committed to providing only highest quality standards to our customers.</p>
          </div>
          
          <div className="feature1" data-aos="zoom-in-up" data-aos-delay="200">
            <div className="feature-icon1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 120">
                <path fill="#E21E26" d="M89.76035,32.75531a142.66562,142.66562,0,0,0-30.062,30.83315q-2.23721-2.93979-4.605-5.66192A95.71928,95.71928,0,0,0,46.85687,49.538a3.304,3.304,0,1,0-4.40448,4.926,89.11252,89.11252,0,0,1,7.67045,7.81132,108.25051,108.25051,0,0,1,6.98279,8.94907,3.30129,3.30129,0,0,0,4.59594.80927c.0876-.0614.886-.91431.8865-.91549a125.01665,125.01665,0,0,1,13.989-17.702A129.15407,129.15407,0,0,1,93.67173,38.09859a3.31095,3.31095,0,0,0-3.91138-5.34328Z"></path>
                <circle cx="105.71451" cy="89.8705" fill="#E21E26" r="8.76782" transform="translate(-16.8754 154.86263) rotate(-68.29938)"></circle>
                <circle cx="115.20641" cy="65.9834" r="8.79235" fill="#E21E26" transform="translate(11.30619 148.63368) rotate(-68.30298)"></circle>
                <circle cx="112.49643" cy="40.4394" fill="#E21E26" r="7.87649" transform="translate(33.3251 130.00889) rotate(-68.29836)"></circle>
                <circle cx="98.25154" cy="19.07085" fill="#E21E26" r="6.13056" transform="translate(44.20853 103.31108) rotate(-68.30308)"></circle>
                <circle cx="75.68809" fill="#E21E26" cy="6.78377" r="3.9157" transform="translate(41.41223 74.60612) rotate(-68.31063)"></circle>
                <path fill="#E21E26" d="M92.11736,100.81943,65.958,97.45142a1.67772,1.67772,0,0,0-1.76252,2.31048l2.8116,6.73336c-.2228.00128-.4456.00963-.668.00781A51.29371,51.29371,0,0,1,48.7625,7.05034,1.67784,1.67784,0,0,0,49.87041,5.7314a1.60622,1.60622,0,0,0-1.9742-1.775A57.73986,57.73986,0,0,0,4.00131,60.20291,59.71779,59.71779,0,0,0,8.924,83.37609a58.33966,58.33966,0,0,0,34.38771,31.6467,59.31579,59.31579,0,0,0,23.50894,2.98178q2.39525-.181,4.75253-.57385l2.78507,6.66982a1.67775,1.67775,0,0,0,2.88219.37126L93.237,103.50118A1.67788,1.67788,0,0,0,92.11736,100.81943Z"></path>
              </svg>
            </div>
            <h3 className="feature-title1">Availability</h3>
            <p className="feature-description1">We ensure timely access to our products through a wide distribution network.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Global Styles */
        .hero-wrapper1 {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section1 {
          width: 100%;
          position: relative;
          height: 65vh;
          min-height: 500px;
          max-height: 800px;
        }

        .slider-container1 {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .slide1 {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .slider-image1 {
          width: 100%;
          height: 570px;
          object-fit: cover;
          object-position: center;
        }

        .image-overlay1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 2;
        }

        .slider-content1 {
          position: absolute;
          top: 40%;
          left: 10%;
          transform: translateY(-50%);
          z-index: 3;
          max-width: 600px;
          color: white;
          padding: 2rem;
        }

        .welcome-container1 {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .welcome-line1 {
          width: 40px;
          height: 2px;
          background-color: #d4af37;
        }

        .welcome-text1 {
          color: white;
          font-size: 1rem;
          font-weight: 300;
          margin-left: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-title1 {
          color: white;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 1.5rem 0;
          text-transform: capitalize;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }

        .hero-subtitle-container1 {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
        }

        .subtitle-line1 {
          width: 4px;
          height: 40px;
          background-color: #d4af37;
          margin-right: 15px;
        }

        .hero-subtitle1 {
          color: white;
          font-size: 1.1rem;
          font-weight: 300;
          line-height: 1.6;
          max-width: 400px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .hero-button-container1 {
          margin-top: 2rem;
        }

        .hero-button1 {
          text-decoration: none;
        }

        .hero-button1 div {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          background-color: #d4af37;
          padding: 12px 32px;
          transition: all 0.3s ease;
        }

        .hero-button1 div:hover {
          background-color: #c19b2e;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .button-text1 {
          color: white;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        /* Slick Carousel Customization */
        :global(.slick-dots) {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          list-style: none;
          display: flex !important;
          padding: 0;
          margin: 0;
          z-index: 10;
        }

        :global(.slick-dots li) {
          margin: 0 6px;
        }

        :global(.slick-dots li button) {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          font-size: 0;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        :global(.slick-dots li.slick-active button) {
          background: #d4af37;
          width: 30px;
          border-radius: 6px;
        }

        /* Features Section */
        .features-section1 {
          padding: 4rem 2rem;
          background: #f9f9f9;
        }

        .features-container1 {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature1 {
          padding: 2rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature1:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .feature-icon1 {
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .feature-icon1 svg {
          width: 40px;
          height: 40px;
        }

        .feature-title1 {
          font-size: 0.9rem;
          font-weight: 600;
          color: #222;
          margin-bottom: 1rem;
        }

        .feature-description1 {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        /* SVG Styles */
        .st01 {
          fill: none;
          stroke: #d4af37;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .slider-content1 {
            left: 5%;
            padding: 1.5rem;
          }
          .hero-title1 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section1 {
            height: 60vh;
            min-height: 450px;
          }
          .slider-content1 {
            left: 0;
            width: 100%;
            padding: 2rem;
            text-align: center;
          }
          .hero-subtitle-container1 {
            justify-content: center;
          }
          .hero-title1 {
            font-size: 2rem;
          }
          .hero-subtitle1 {
            margin: 0 auto;
          }
          .features-container1 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-section1 {
            height: 55vh;
            min-height: 400px;
          }
          .hero-title1 {
            font-size: 1.8rem;
          }
          .hero-subtitle1 {
            font-size: 1rem;
          }
          .welcome-text1 {
            font-size: 0.9rem;
          }
          .feature1 {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;