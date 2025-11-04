import React from 'react';

const Driver = () => {
  const teamMembers = [
    { name: 'Ansh Verma',  img: '/images/ansh1.jpg' },
    { name: 'Kushagra Bhandhari', img: '/images/kush.jpg' },
    
  ];

  return (
    <div className="team">
      <h2>Our Driver's</h2>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <img src={member.img} alt={member.name} />
            <div className="card-info">
              <h3>{member.name}</h3>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Driver;
