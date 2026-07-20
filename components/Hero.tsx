export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="SHE Salon introduction">
      <img
        className="hero-image"
        src="/images/services-salon.png"
        alt="Premium salon beauty tools and makeup brushes"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <h1>
          Artistry for every
          <br />
          <em>moment.</em>
        </h1>
        <div className="hero-copy">
          <span />
          <p>
            Considered services shaped around your features, style and
            occasion.
          </p>
        </div>
        <div className="hero-actions">
          <a href="/services">EXPLORE SERVICES <span>→</span></a>
          <a href="/contact#booking">BOOK AN APPOINTMENT <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}
