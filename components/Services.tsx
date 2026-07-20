const services = [
  {
    number: "01",
    title: "Hair Artistry",
    copy: "Cuts, styling, colour and restorative care designed around your texture and lifestyle.",
    items: "CUT · COLOUR · STYLING",
  },
  {
    number: "02",
    title: "Makeup",
    copy: "Refined, camera-ready makeup that still feels like you—from soft glam to statement looks.",
    items: "OCCASION · EDITORIAL · GLAM",
  },
  {
    number: "03",
    title: "Bridal",
    copy: "A considered bridal journey with trials, planning and personal attention from first look to final touch.",
    items: "BRIDE · FAMILY · EVENTS",
  },
  {
    number: "04",
    title: "Skin & Rituals",
    copy: "Thoughtful skin preparation and finishing rituals for a rested, radiant and beautifully balanced result.",
    items: "FACIALS · PREP · FINISH",
  },
];

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="services-heading">
        <div>
          <div className="eyebrow light">WHAT WE DO</div>
          <h2>Made for your moment.</h2>
        </div>
        <p>
          Bespoke artistry, considered details and a beautifully unhurried
          experience—whatever brings you to our chair.
        </p>
      </div>

      <div className="service-cards">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <small>{service.items}</small>
          </article>
        ))}
      </div>

      <div className="service-feature">
        <img src="/images/services-salon.png" alt="Luxury salon tools and beauty ritual" />
        <div className="service-feature-copy">
          <span>OUR APPROACH</span>
          <h3>Quiet luxury.<br />Exceptional detail.</h3>
          <p>
            Premium products, practiced hands and time set aside for you. No
            rushed finishes. No one-look-fits-all beauty.
          </p>
          <a href="#booking">EXPLORE YOUR APPOINTMENT <b>→</b></a>
        </div>
      </div>
    </section>
  );
}
