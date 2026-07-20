export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <a className="footer-brand" href="/">
          <span className="brand-mark"><img src="/images/she-logo.png" alt="" /></span>
          <span className="brand-copy"><strong>SHE</strong><small>SALON &amp; MAKE-UP STUDIO</small></span>
        </a>
        <p>Beauty created with calm, care and an eye for every detail.</p>
        <a className="back-top" href="#top">BACK TO TOP ↑</a>
      </div>
      <div className="footer-grid">
        <div>
          <span>EXPLORE</span>
          <a href="/our-story">Our Story</a><a href="/services">Services</a><a href="/gallery">Gallery</a>
        </div>
        <div>
          <span>VISIT</span>
          <p>By appointment<br />Monday — Sunday<br />10:00 AM — 8:00 PM</p>
        </div>
        <div>
          <span>CONNECT</span>
          <a href="/contact#booking">Book an appointment</a><a href="/contact">Instagram</a><a href="/contact">WhatsApp</a>
        </div>
        <div className="footer-cta">
          <span>KEEP IN TOUCH</span>
          <p>Follow the artistry, new looks and studio stories.</p>
          <a href="/gallery">DISCOVER THE SHE EDIT →</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 SHE Salon &amp; Make-Up Studio</p>
        <p>Made for beautiful moments.</p>
      </div>
    </footer>
  );
}
