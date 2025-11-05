import React, { useEffect, useState } from "react";
import "./Events.css";

const Events = () => {
  const [timeLeft, setTimeLeft] = useState({
    pecfest: {},
    nationals: {},
  });

  useEffect(() => {
    const events = {
      pecfest: new Date("2025-11-21T00:00:00"),
      nationals: new Date("2026-03-15T00:00:00"),
    };

    const calcTimeLeft = (eventDate) => {
      const now = new Date();
      const diff = eventDate - now;
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    const updateTime = () => {
      setTimeLeft({
        pecfest: calcTimeLeft(events.pecfest),
        nationals: calcTimeLeft(events.nationals),
      });
    };

    updateTime(); // Initial call
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []); // ✅ safe to keep empty, no external dependencies now

  return (
    <div className="events">
      <h2>🏁 Upcoming Events</h2>

      <div className="event-card">
        <h3>GKDC Nationals 2026</h3>
        <p>📍 Chennai | 🗓️ March 15–18, 2026</p>
        <div className="countdown">
          <span>{timeLeft.nationals.days ?? "--"}d</span> :
          <span>{timeLeft.nationals.hours ?? "--"}h</span> :
          <span>{timeLeft.nationals.minutes ?? "--"}m</span> :
          <span>{timeLeft.nationals.seconds ?? "--"}s</span>
        </div>
      </div>

      <div className="event-card">
        <h3>PECFEST 2025</h3>
        <p>📍 Chandigarh | 🗓️ Nov 21–23, 2025</p>
        <div className="countdown">
          <span>{timeLeft.pecfest.days ?? "--"}d</span> :
          <span>{timeLeft.pecfest.hours ?? "--"}h</span> :
          <span>{timeLeft.pecfest.minutes ?? "--"}m</span> :
          <span>{timeLeft.pecfest.seconds ?? "--"}s</span>
        </div>
      </div>
    </div>
  );
};

export default Events;
