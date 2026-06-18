import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const NAV_LINKS = ["Events", "Programs", "Community", "Ranks"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" aria-label="BotLeague home">
          <span className="navbar__tri navbar__tri--tl" />
          <span className="navbar__logo-text">
            <span className="navbar__logo-bot">
              B
              <span className="navbar__logo-gear" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="0.85em" height="0.85em">
                  <g fill="currentColor">
                    <circle cx="12" cy="12" r="3.4" />
                    {Array.from({ length: 8 }).map((_, i) => (
                      <rect
                        key={i}
                        x="10.6"
                        y="0.5"
                        width="2.8"
                        height="5.5"
                        rx="0.8"
                        transform={`rotate(${i * 45} 12 12)`}
                      />
                    ))}
                  </g>
                </svg>
              </span>
              T
            </span>
            <span className="navbar__logo-league">LEAGUE</span>
          </span>
          <span className="navbar__tri navbar__tri--br" />
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`navbar__link ${i === 0 ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="navbar__cta navbar__cta--mobile">
            <button className="btn btn-outline">LOGIN</button>
            <button className="btn btn-primary">REGISTER NOW</button>
          </div>
        </nav>

        <div className="navbar__cta">
          <button className="btn btn-outline">LOGIN</button>
          <button className="btn btn-primary">REGISTER NOW</button>
        </div>

        <button
          className="navbar__burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
