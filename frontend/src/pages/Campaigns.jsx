import React from 'react';

function Campaigns() {
  const campaigns = [
    {
      title: " #PeaceVoicesChallenge",
      desc: "Post a short video about peace on social media.",
      status: "Active",
    },
    {
      title: " Digital March for Unity",
      desc: "Join our global campaign every 7th April.",
      status: "Upcoming",
    },
  ];

  return (
    <div className="campaigns-container">
      <h1> Join Campaigns</h1>
      <p>Be part of global peace actions & raise your voice against hate.</p>

      <ul>
        {campaigns.map((c, idx) => (
          <li key={idx} className="campaign-card">
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <span>Status: {c.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Campaigns;
