import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Info.css';

const Info = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div>
      <section className="in-why-section" id='in-info'>
        <div className="in-container">
          <div className="in-why-content">
            <div className="in-section-header">
              <div className="in-accent-line" data-aos="flip-left" data-aos-duration="1500"></div>
              <span className="in-section-subtitle">Why MOJAF?</span>
            </div>
            <h2 className="in-section-title" data-aos="fade-left" data-aos-duration="400">
              Providing the Quality Construction & Building Materials
            </h2>
            <div className="in-section-text" data-aos="fade-left" data-aos-duration="400" data-aos-delay="100">
              <p>
                As your dedicated source for construction and building materials solutions, MOJAF offers a comprehensive range of top-tier hardware essentials...
              </p>
              <p>
                Uncover a world of craftsmanship and reliability as you navigate through our carefully curated collection...
              </p>
            </div>
          </div>
          <div className="in-why-image">
            <img
              src="https://www.deercreekstables.com/wp-content/uploads/2021/07/Portable-Building-Advantages.jpg"
              alt="Building Materials"
              className="in-main-image"
            />
            <div className="in-decorative-element in-top-left" data-aos="zoom-in"></div>
            <div className="in-decorative-element in-bottom-right" data-aos="zoom-in"></div>
          </div>
        </div>
      </section>

      <section className="in-excellence-section">
        <div className="in-container1">
          <h2 className="in-section-title in-center" data-aos="fade-up" data-aos-duration="400">
            How We Excel as Your Premier Construction & Building Material Supplier
          </h2>
          <p className="in-section-description in-center" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
            As a leading construction and building materials supplier, MOJAF is committed to delivering high-quality products and exceptional service...
          </p>
        </div>
      </section>

      <section className="in-features-section">
        <div className="in-container">
          {/* Feature 1 */}
          <div className="in-feature">
            <div className="in-feature-content">
              <h3 className="in-feature-title" data-aos="fade-right" data-aos-duration="500">
                Sourcing Top Quality Construction & Building Materials
              </h3>

              <div className="in-feature-item">
                <div className="in-accent-line" data-aos="flip-left" data-aos-duration="1500"></div>
                <div>
                  <h4 className="in-feature-subtitle">Uncompromising Selection Process</h4>
                  <p className="in-feature-text">We carefully select and examine our suppliers...</p>
                </div>
              </div>

              <div className="in-feature-item">
                <div className="in-accent-line" data-aos="flip-left" data-aos-duration="1500"></div>
                <div>
                  <h4 className="in-feature-subtitle">Continuous Quality Control</h4>
                  <p className="in-feature-text">Our dedicated quality control team performs regular checks...</p>
                </div>
              </div>
            </div>
            <div className="in-feature-image">
              <img
                src="https://bvb1.eu/images/gradjevinski-materijali.jpg"
                alt="Quality Materials"
              />
              <div className="in-decorative-box in-box-1"></div>
              <div className="in-decorative-box in-box-2"></div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="in-feature in-reverse">
            <div className="in-feature-content">
              <h3 className="in-feature-title" data-aos="fade-right" data-aos-duration="500">
                Offering Global Standards at Reasonable Prices
              </h3>

              <div className="in-feature-item">
                <div className="in-accent-line" data-aos="flip-left" data-aos-duration="1500"></div>
                <div>
                  <h4 className="in-feature-subtitle">Strategic Partnerships</h4>
                  <p className="in-feature-text">We collaborate with quality brands to offer premium construction and building materials...</p>
                </div>
              </div>

              <div className="in-feature-item">
                <div className="in-accent-line" data-aos="flip-left" data-aos-duration="1500"></div>
                <div>
                  <h4 className="in-feature-subtitle">Cost Efficiency</h4>
                  <p className="in-feature-text">Our efficient local distribution network helps us maintain cost-effectiveness...</p>
                </div>
              </div>
            </div>
            <div className="in-feature-image">
              <img
                src="https://www.portakabin.com/contentassets/96117c8c47bc41bdaef924f2c7831d28/7322-100.jpg"
                alt="Global Standards"
              />
              <div className="in-decorative-box in-box-1"></div>
              <div className="in-decorative-box in-box-2"></div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="in-feature">
            <div className="in-feature-content">
              <h3 className="in-feature-title" data-aos="fade-right" data-aos-duration="500">
                Maintaining the Largest Stock of Construction & Building Materials
              </h3>

              <div className="in-feature-item">
                <div className="in-accent-line" data-aos="flip-left" data-aos-duration="1500"></div>
                <div>
                  <h4 className="in-feature-subtitle">Extensive Inventory</h4>
                  <p className="in-feature-text">We stock a vast range of products to meet all your needs...</p>
                </div>
              </div>

              <div className="in-feature-item">
                <div className="in-accent-line" data-aos="flip-left" data-aos-duration="1500"></div>
                <div>
                  <h4 className="in-feature-subtitle">Efficient Stock Management</h4>
                  <p className="in-feature-text">Our advanced inventory management system ensures optimal stock levels...</p>
                </div>
              </div>
            </div>
            <div className="in-feature-image">
              <img
                src="https://images.pexels.com/photos/5511065/pexels-photo-5511065.jpeg?auto=compress..."
                alt="Large Stock"
              />
              <div className="in-decorative-box in-box-1"></div>
              <div className="in-decorative-box in-box-2"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
