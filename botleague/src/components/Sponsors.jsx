import React from "react";
import "./Sponsors.css";

const sponsors = [
  { name: "NIT Delhi",         logo: "/assets/logo-nitdelhi.png" },
  { name: "Indian Bit",        logo: "/assets/logo-indianbit.png" },
  { name: "NIT Silchar",       logo: "/assets/logo-nitsilchar.png" },
  { name: "Robo Company",      logo: "/assets/logo-delhivery.png" },
  { name: "IIT Bombay",        logo: "/assets/logo-iitbombay.png" },
  { name: "Robo Company",      logo: "/assets/logo-generalrobotics.png" },
];

export default function Sponsors() {
  return (
    <section className="section sponsors">
      <div className="container">
        <h2 className="section-heading sponsors__title">Sponsors</h2>
        <div className="sponsors__grid">
          {sponsors.map((s, i) => (
            <div className="sponsor" key={i}>
              <div className="sponsor__logo-wrap">
                <img src={s.logo} alt={s.name} className="sponsor__logo" />
              </div>
              <span className="sponsor__name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
