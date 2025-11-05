import React from "react";

import "./Driver.css";

const Driver = () => {
  const drivers = [
    { name: "Ansh Verma", img: "/images/ansh1.jpg", role: " Driver" },
    { name: "Kushagra Bhandhari", img: "/images/kush.jpg", role: " Lead Driver" },
  ];

  return (
    <section className="driver-section" id="Driver">
      <div className="driver-container">
        <h2 className="driver-title">
          Our <span>Drivers</span>
        </h2>
        <p className="driver-subtitle">
          Meet the skilled racers who bring RUSTEZE to life on the track.
        </p>

        <div className="driver-grid">
          {drivers.map((driver, index) => (
            <div key={index} className="driver-card">
              <div className="driver-img-wrap">
                <img src={driver.img} alt={driver.name} className="driver-img" />
                <div className="driver-glow"></div>
              </div>
              <h3 className="driver-name">{driver.name}</h3>
              <p className="driver-role">{driver.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Driver;
