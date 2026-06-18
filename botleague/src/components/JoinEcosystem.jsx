import React from "react";
import "./JoinEcosystem.css";

const panels = ["BECOME IN JUDGE", "VOLUNTEER", "COMMUNITY MEMBER"];

export default function JoinEcosystem() {
  return (
    <section className="section join">
      <div className="container">
        <h2 className="section-heading join__title">Join The Ecosystem</h2>

        <div className="join__grid">
          {panels.map((p) => (
            <form className="join-card" key={p} onSubmit={(e) => e.preventDefault()}>
              <h3>{p}</h3>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Location" />
              <input type="text" placeholder="Enroll" />
              <button className="btn btn-primary btn-block" type="submit">
                SIGN UP
              </button>
            </form>
          ))}
        </div>
      </div>
    </section>
  );
}
