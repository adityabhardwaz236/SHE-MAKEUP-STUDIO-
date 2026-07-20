"use client";

import { useState } from "react";

const editorial = "/images/editorial";

export function StoryPageContent() {
  return (
    <>
      <section className="inner-story-hero">
        <div className="inner-hero-copy dark-panel">
          <p className="inner-kicker light">OUR STORY</p>
          <h1>Beauty with<br /><em>intention.</em></h1>
          <p className="inner-lead">SHE was created for women who want to feel seen, never styled into someone else.</p>
        </div>
        <figure className="inner-hero-figure">
          <img src={`${editorial}/she-salon-interior.webp`} alt="The warm, elegant interior of SHE studio" />
          <figcaption>Inside the studio · A calm space for transformation</figcaption>
        </figure>
      </section>

      <section className="manifesto inner-pad">
        <p className="inner-kicker">WHAT “SHE” MEANS</p>
        <div className="manifesto-grid">
          <h2>Not a trend.<br />Not a template.<br /><em>A feeling.</em></h2>
          <div>
            <p className="lead">To us, beauty begins before the first brush touches skin. It begins in the conversation—in understanding how you dress, what makes you comfortable and how you want to remember the moment.</p>
            <p>Our approach is refined but never rigid. We work with your natural features and choose details that belong to your face. The result is polished, expressive and beautifully familiar.</p>
          </div>
        </div>
      </section>

      <section className="story-collage inner-pad">
        <img className="story-collage-main" src={`${editorial}/she-artist-at-work.webp`} alt="SHE artist carefully creating a bridal look" />
        <div>
          <img src={`${editorial}/she-makeup-skin.webp`} alt="Fresh luminous makeup finish" />
          <p>Every face has its own rhythm. Our work is to find it, honour it and let it glow.</p>
        </div>
      </section>

      <section className="values-block inner-pad">
        <div><p className="inner-kicker light">OUR POINT OF VIEW</p><h2>The SHE<br /><em>standard.</em></h2></div>
        <div className="values-list">
          {[
            ["01", "Personal over prescribed", "We create with you, not simply for you. Every reference is translated through your features and personality."],
            ["02", "Skin should look alive", "Breathable preparation, thoughtful coverage and luminosity in the right places are central to our work."],
            ["03", "Calm is part of the service", "Clear planning and unhurried appointments let you enjoy the ritual of getting ready."],
            ["04", "Details make the difference", "From the balance of liner to the placement of a pin, small choices complete the whole look."],
          ].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="story-ritual inner-pad">
        <img src={`${editorial}/she-red-bride.webp`} alt="Bride with refined wine and gold styling" />
        <div>
          <p className="inner-kicker">THE SHE RITUAL</p>
          <h2>How your look<br />comes <em>together.</em></h2>
          <ol>
            {[["01","Listen","Your occasion, wardrobe and comfort come first."],["02","Curate","Texture, tones and hair become one direction."],["03","Create","The look is built patiently and checked in every light."],["04","Reveal","Comfortable, confident and entirely you."]].map(([n,t,c]) => <li key={n}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div></li>)}
          </ol>
        </div>
      </section>
    </>
  );
}

const serviceGroups = [
  { number: "01", category: "Bridal", title: "Your day, unmistakably you", image: "she-red-bride.webp", items: [["Signature Bridal Makeup", "Complete makeup, preparation, lashes and finishing"], ["Engagement & Reception", "Polished event artistry adapted to your outfit"], ["Bridal Trial", "A collaborative preview of your complete direction"]] },
  { number: "02", category: "Occasion", title: "Elevated for every celebration", image: "she-makeup-skin.webp", items: [["Soft Glam", "Luminous skin with softly sculpted features"], ["HD Occasion Makeup", "Long-wearing, camera-ready evening artistry"], ["Editorial Beauty", "Concept-led beauty for portraits and shoots"]] },
  { number: "03", category: "Hair", title: "The finish that frames everything", image: "she-makeup-hair.webp", items: [["Signature Waves", "Glossy movement with event-ready hold"], ["Bridal Buns & Updos", "Structure designed around jewellery and draping"], ["Contemporary Styling", "Ponytails, knots and modern silhouettes"]] },
];

export function ServicesPageContent() {
  return <>
    <section className="services-title-hero inner-pad">
      <div><p className="inner-kicker">SIGNATURE SERVICES</p><h1>Artistry for<br /><em>every moment.</em></h1></div>
      <p>Considered beauty services created around your face, your style and the way your celebration unfolds.</p>
    </section>
    <section className="service-introduction inner-pad"><p className="inner-kicker">OUR APPROACH</p><h2>Every service includes thoughtful consultation, professional preparation and finishing designed to last beautifully.</h2></section>
    <section className="service-menus">
      {serviceGroups.map((group, index) => <article className={`service-menu-row ${index % 2 ? "reverse" : ""}`} key={group.category}>
        <div className="service-menu-image"><img src={`${editorial}/${group.image}`} alt={`${group.category} services at SHE`} /></div>
        <div className="service-menu-copy">
          <div className="service-label"><span>{group.number}</span><small>{group.category}</small></div>
          <h2>{group.title}</h2>
          <div className="service-items">{group.items.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p><span>↗</span></div>)}</div>
          <a className="inner-button outline" href="/contact#booking">ENQUIRE ABOUT {group.category.toUpperCase()} <span>↗</span></a>
        </div>
      </article>)}
    </section>
    <section className="service-addons inner-pad"><div><p className="inner-kicker light">COMPLETE THE LOOK</p><h2>Finishing<br /><em>touches.</em></h2></div><div className="addon-grid">{[["01","Saree & Dupatta Draping"],["02","Hair Accessories"],["03","Lashes & Skin Prep"]].map(([n,t]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>Carefully considered details that make your complete look feel effortless.</p></article>)}</div></section>
  </>;
}

const looks = [
  ["Bridal","she-red-bride.webp","The Maharani Edit","tall"], ["Soft Glam","she-makeup-skin.webp","Barely-there radiance","tall"], ["Hair","she-makeup-hair.webp","Gloss and movement","tall"],
  ["Bridal","she-makeup-hero.webp","Champagne bride","wide"], ["Behind the scenes","she-artist-at-work.webp","The quiet before","wide"], ["Studio","she-salon-interior.webp","Inside SHE","wide"],
] as const;

export function GalleryPageContent() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Bridal", "Soft Glam", "Hair", "Studio"];
  const visible = looks.filter(([category]) => filter === "All" || category === filter || (filter === "Studio" && category === "Behind the scenes"));
  return <>
    <section className="lookbook-heading inner-pad"><div><p className="inner-kicker">THE SHE LOOKBOOK</p><h1>Every face,<br />its own <em>story.</em></h1></div><p>Bridal artistry, skin-led soft glam, modern hair and quiet moments from inside the studio.</p></section>
    <section className="lookbook-section inner-pad">
      <div className="lookbook-filters" aria-label="Filter gallery">{categories.map(category => <button type="button" className={filter === category ? "active" : ""} onClick={() => setFilter(category)} key={category}>{category}</button>)}</div>
      <div className="lookbook-grid">{visible.map(([category,image,title,shape]) => <figure className={shape} key={`${category}-${title}`}><img src={`${editorial}/${image}`} alt={title} /><figcaption><span>{category}</span><strong>{title}</strong></figcaption></figure>)}</div>
    </section>
    <section className="gallery-process"><img src={`${editorial}/she-artist-at-work.webp`} alt="Artist at work behind the scenes" /><div><p className="inner-kicker light">BEHIND EVERY LOOK</p><h2>Time. Trust.<br /><em>And tiny details.</em></h2><p>The finished image is only one moment. Behind it are conversations, careful choices and the calm that lets someone feel entirely themselves.</p><a href="/our-story">DISCOVER OUR PROCESS ↗</a></div></section>
  </>;
}

const faqs = [
  ["How early should I book my bridal appointment?", "Popular dates fill quickly, so reach out as soon as your date and venue are confirmed."],
  ["Do you offer on-location makeup?", "Yes. Studio, local on-location and selected outstation appointments can be discussed."],
  ["Is a bridal trial available?", "Yes. Trials help us explore complexion, eyes, lips and hair direction before the event."],
  ["Can I book makeup and hair together?", "Yes. Complete makeup and hair bookings can be planned as one coordinated appointment."],
];

export function ContactPageContent({ children }: { children: React.ReactNode }) {
  return <>
    <section className="contact-split-hero"><div><p className="inner-kicker light">CONTACT & BOOKINGS</p><h1>Let’s begin<br />with your <em>vision.</em></h1><p>Share the date, the celebration and how you want to feel. We’ll help shape the rest.</p></div><img src={`${editorial}/she-red-bride.webp`} alt="Signature bridal makeup by SHE" /></section>
    {children}
    <section className="visit-studio inner-pad"><img src={`${editorial}/she-salon-interior.webp`} alt="Inside SHE salon studio" /><div><p className="inner-kicker">VISIT THE STUDIO</p><h2>A quiet space<br />made for <em>you.</em></h2><p>Our studio works by appointment so every client receives dedicated time, a prepared station and an unrushed experience.</p><dl><div><dt>Studio visits</dt><dd>Appointment required</dd></div><div><dt>Working hours</dt><dd>Monday — Sunday, 10 AM — 8 PM</dd></div><div><dt>Bridal travel</dt><dd>Local & selected outstation</dd></div></dl></div></section>
    <section className="faq-section inner-pad"><div><p className="inner-kicker">BEFORE YOU BOOK</p><h2>A few helpful<br /><em>answers.</em></h2></div><div>{faqs.map(([q,a],i) => <details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>
  </>;
}
