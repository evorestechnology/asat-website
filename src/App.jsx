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

          <div className="structure-box">
            EVORES TECHNOLOGY
          </div>

          <div className="arrow">
            ↓
          </div>

          <div className="structure-box asat-box">
  AS SIMPLE AS THAT [ASAT]
</div>

<div className="arrow">
  ↓
</div>

<div className="structure-line"></div>

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
      <footer className="asat-footer">
  <a
    href="https://evores-website.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit EvoRES Technology LLP"
  >
    <img
      src="/images/global-icon.png"
      alt="EvoRES Technology LLP"
      className="global-footer-icon"
    />
  </a>

  <p>© 2026 EvoRES Technology LLP. All Rights Reserved.</p>
</footer>
    </main>
  );
}

export default App;