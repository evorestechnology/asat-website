import "./App.css";

function App() {
  return (
    <main className="asat-page">

      {/* TITLE */}
      <section className="title-section">
        <h1>AS SIMPLE AS THAT [ASAT]</h1>
      </section>


      {/* PRODUCTS */}
      <section className="products-section">

        <div className="section-label">
          OUR PRODUCTS
        </div>

        <div className="products-grid">

          <div className="product-card">
            <h2>DESIGNER PARADISE</h2>

            <p>
              Designer Paradise is a creative marketplace where designers can
              showcase, sell, and grow their fashion and digital design collections.
              <br />
              It connects independent designers with customers through a modern,
              technology-driven platform that supports brand building and direct sales.
              <br />
              Built under the EvoRES ecosystem, Designer Paradise empowers creative
              talent with tools to launch, manage, and scale their businesses.
            </p>

            <button>VISIT WEBSITE</button>
          </div>


          <div className="product-card">
            <h2>BRAND HUB</h2>

            <p>
              Brand Hub is a marketplace that helps brands grow from local markets
              to a global audience through one unified platform.
              <br />
              It connects businesses directly with customers, enabling brands to
              showcase, sell, and build lasting relationships without unnecessary
              intermediaries.
              <br />
              Built under the EvoRES ecosystem, Brand Hub empowers emerging and
              established brands with the tools to reach consumers at scale.
            </p>

            <button>VISIT WEBSITE</button>
          </div>


          <div className="product-card">
            <h2>H&amp;S</h2>

            <p>
              H&amp;S is a unisex Indian streetwear fashion brand created for Gen Z
              and the new generation of trendsetters.
              <br />
              It blends contemporary street culture with bold, comfortable, and
              expressive designs inspired by modern fashion trends.
              <br />
              Built under the EvoRES ecosystem, H&amp;S delivers affordable, stylish
              collections made for everyday wear and global fashion enthusiasts.
            </p>

            <button>VISIT WEBSITE</button>
          </div>


          <div className="product-card">
            <h2>FiTX</h2>

            <p>
              FiTX is a performance-focused fitness and sportswear brand designed
              for athletes, gym enthusiasts, and active lifestyles.
              <br />
              It creates high-quality apparel and accessories engineered for
              comfort, durability, and performance for both Indian and global audiences.
              <br />
              Built under the EvoRES ecosystem, FiTX combines innovation, style,
              and functionality to help people perform at their best every day.
            </p>

            <button>VISIT WEBSITE</button>
          </div>

        </div>

      </section>


      {/* STRUCTURE */}
      <section className="structure-section">

        <div className="section-label">
          STRUCTURE
        </div>

        <div className="structure">

          {/* EVORES */}
          <div className="structure-box">
            EVORES TECHNOLOGY
          </div>

          {/* Arrow */}
          <div className="arrow">
            ↓
          </div>

          {/* ASAT */}
          <div className="structure-box asat-box">
            AS SIMPLE AS THAT [ASAT]
          </div>

          {/* Arrow directly below ASAT */}
          <div className="arrow asat-arrow">
            ↓
          </div>

          {/* Flowchart line */}
          <div className="structure-line"></div>

          {/* Products */}
          <div className="structure-products">

            <div className="structure-product">
              DESIGNER PARADISE
            </div>

            <div className="structure-product">
              BRAND HUB
            </div>

            <div className="structure-product">
              H&amp;S
            </div>

            <div className="structure-product">
              FiTX
            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="asat-footer">

        <div className="footer-content">

          <p>
            © 2026 EvoRES Technology LLP. All Rights Reserved.
          </p>

          {/* Globe → EvoRES Website */}
          <a
            href="https://evores-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit EvoRES Technology LLP"
            className="global-link"
          >
            <svg
              className="global-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M12 3C14.5 5.5 15.5 8.5 15.5 12C15.5 15.5 14.5 18.5 12 21"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M12 3C9.5 5.5 8.5 8.5 8.5 12C8.5 15.5 9.5 18.5 12 21"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>

        </div>

      </footer>

    </main>
  );
}

export default App;