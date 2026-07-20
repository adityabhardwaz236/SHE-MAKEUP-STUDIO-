type PageHeroProps = {
  eyebrow: string;
  title: string;
  italic?: string;
  copy: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({
  eyebrow,
  title,
  italic,
  copy,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <img src={image} alt={imageAlt} />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <div className="page-breadcrumb"><a href="/">HOME</a><span>/</span>{eyebrow}</div>
        <p>{eyebrow}</p>
        <h1>{title} {italic && <em>{italic}</em>}</h1>
        <div className="page-hero-bottom">
          <span />
          <p>{copy}</p>
        </div>
      </div>
    </section>
  );
}
