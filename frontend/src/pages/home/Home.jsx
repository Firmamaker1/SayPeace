import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header>
        <h1> Voice of Peace</h1>
        <p>Empowering a united, global stand against hate & genocide ideology.</p>
      </header>

      <section className="action-buttons">
        <button onClick={() => navigate('/academy')}> Learn (Peace Academy)</button>
        <button onClick={() => navigate('/campaigns')}> Act (Join Campaigns)</button>
        <button onClick={() => navigate('/report')}> Report Hate Speech</button>
      </section>

      <section className="peace-feed">
        <h2> Peace Feed</h2>
        <ul>
          <li> Rwanda: Students launch anti-genocide digital campaign.</li>
          <li> AI flags hate tweets targeting a peace advocate.</li>
          <li> UN shares Voice of Peace as a global resource hub.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
