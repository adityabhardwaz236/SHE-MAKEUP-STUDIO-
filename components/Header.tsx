"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["HOME", "/"],
  ["OUR STORY", "/our-story"],
  ["SERVICES", "/services"],
  ["GALLERY", "/gallery"],
  ["CONTACT", "/contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header" id="top">
      <a className="brand" href="/" aria-label="SHE home">
        <span className="brand-mark" aria-hidden="true">
          <img src="/images/she-logo.png" alt="" />
        </span>
        <span className="brand-copy">
          <strong>SHE</strong>
          <small>SALON &amp; MAKE-UP STUDIO</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a
            className={pathname === href ? "active" : ""}
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="book-button" href="/contact#booking">
          <span>BOOK NOW</span>
          <b aria-hidden="true">→</b>
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
          <i />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a
              className={pathname === href ? "active" : ""}
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <p>Beauty, beautifully yours.</p>
      </div>
    </header>
  );
}
