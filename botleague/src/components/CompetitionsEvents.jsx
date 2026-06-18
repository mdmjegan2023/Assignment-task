import React from "react";
import "./CompetitionsEvents.css";

const upcoming = [
  { city: "Mumbai", date: "11/11/25", location: "BKC", category: "Lorem" },
  { city: "Delhi", date: "11/11/25", location: "BKC", category: "Lorem" },
];

const pastResults = ["Bengaluru Regionals", "Bengaluru Regionals", "Bengaluru Regionals"];

export default function CompetitionsEvents() {
  return (
    <section className="section comp">
      <div className="comp__glow" aria-hidden="true" />
      <div className="container">
        <h2 className="section-heading comp__title">Competitions &amp; Events</h2>

        <div className="comp__grid">
          {/* LIVE NOW */}
          <div className="comp__col">
            <h3 className="comp__col-title comp__col-title--red">Live Now</h3>
            <div className="comp__card">
              <div className="comp__card-head">
                <div>
                  <h4>Bengaluru Regionals</h4>
                  <p className="comp__muted">Lorem Ipsum</p>
                </div>
                <span className="comp__tag">Ongoing</span>
              </div>
              <div className="comp__divider" />
              <BracketTree />
            </div>
          </div>

          {/* UPCOMING */}
          <div className="comp__col">
            <h3 className="comp__col-title">Upcoming</h3>
            {upcoming.map((ev) => (
              <div className="comp__card comp__card--event" key={ev.city}>
                <h4>Event in {ev.city}</h4>
                <div className="comp__meta">
                  <div>
                    <span className="comp__meta-label">Date</span>
                    <span>{ev.date}</span>
                  </div>
                  <div>
                    <span className="comp__meta-label">Location</span>
                    <span>{ev.location}</span>
                  </div>
                  <div>
                    <span className="comp__meta-label">Category</span>
                    <span>{ev.category}</span>
                  </div>
                </div>
                <button className="btn btn-primary btn-block">REGISTER</button>
              </div>
            ))}
          </div>

          {/* PAST RESULTS */}
          <div className="comp__col">
            <h3 className="comp__col-title">Past Results</h3>
            <div className="comp__card comp__card--results">
              {pastResults.map((r, i) => (
                <div key={i} className={`comp__result ${i < pastResults.length - 1 ? "has-divider" : ""}`}>
                  <h4>{r}</h4>
                  <p className="comp__muted">Lorem Ipsum</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BracketTree() {
  const slot = (x, y) => (
    <rect key={`${x}-${y}`} x={x} y={y} width="78" height="26" rx="5" fill="#3a3a3a" />
  );
  const line = (d) => <path d={d} stroke="var(--red)" strokeWidth="1.5" fill="none" />;

  return (
    <svg className="bracket" viewBox="0 0 280 200">
      {/* round 1 slots */}
      {slot(0, 10)}
      {slot(0, 50)}
      {slot(0, 120)}
      {slot(0, 160)}
      {/* round 2 slots */}
      {slot(95, 30)}
      {slot(95, 140)}
      {/* round 3 / final */}
      {slot(190, 85)}

      {/* connectors round1 -> round2 */}
      {line("M78,23 H88 V43 H95")}
      {line("M78,63 H88 V43")}
      {line("M78,133 H88 V153 H95")}
      {line("M78,173 H88 V153")}
      {/* connectors round2 -> final */}
      {line("M173,43 H183 V98 H190")}
      {line("M173,153 H183 V98")}
    </svg>
  );
}
