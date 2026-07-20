const galleryItems = [
  ["/images/hero-salon.png", "Editorial beauty portrait"],
  ["/images/story-salon.png", "Bridal makeup artistry"],
  ["/images/services-salon.png", "Luxury beauty tools"],
  ["/images/story-salon.png", "Elegant salon experience"],
];

export default function Gallery() {
  return (
    <section className="gallery section-pad" id="gallery">
      <div className="gallery-title">
        <div className="eyebrow">THE SHE MAKEUP STUDIO LOOKBOOK</div>
        <h2>Looks that feel<br />like <em>you.</em></h2>
        <a className="text-link" href="/contact#booking">CREATE YOUR LOOK <span>↗</span></a>
      </div>
      <div className="gallery-grid">
        {galleryItems.map(([src, alt], index) => (
          <figure key={`${src}-${index}`} className={`gallery-item gallery-item-${index + 1}`}>
            <img src={src} alt={alt} />
            <figcaption>0{index + 1} / SHE BEAUTY</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
