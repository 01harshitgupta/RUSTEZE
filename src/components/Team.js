import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: 'Ansh Verma', role: 'Electrical Head', img: '/images/ansh.jpg', email: 'Ansh@example.com' },
    { name: 'Kushal Kumar', role: 'Designing Head', img: '/images/kushal.jpg', email: 'Kushal@example.com' },
    { name: 'Vivek', role: 'Mechanical Head', img: '/images/vivek.jpg', email: 'Vivek@example.com' },
    { name: 'Ayush', role: 'Mechanical Head', img: '/images/ayush.jpg', email: 'Ayush@example.com' },
    // { name: 'Aditya', role: 'Mechanical Head', img: '/images/aditya.jpg', email: 'Aditya@example.com' }
  ];

  return (
    <div className="team">
      <h2>Our Team Heads</h2>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <img src={member.img} alt={member.name} />
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              {/* <p>{member.email}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
