import React from "react";
import "./About.css";

const About = () => (
  <div className="about-section">
    <div className="about-content">
      <h2>About RUSTEZE Racing</h2>
      <p>
        We’re an energetic student racing team participating in the Go-Kart Design Challenge (GKDC). 
        Our journey started in a small garage with just a few tools, a big dream, and endless nights of innovation.
      </p>
      <p className="mission">
        <strong>Our Mission:</strong> Build, race, and inspire — one kart at a time.
      </p>
    </div>
    <div className="about-image">
      <img src="/images/team.jpg" alt="Team Workshop" />
    </div>
  </div>
);

export default About;
