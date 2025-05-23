import React from 'react';

function Academy() {
  return (
    <div className="academy-container">
      <h1> Peace Academy</h1>
      <p>Empower yourself with knowledge to stand against genocide ideology.</p>

      <section className="academy-section">
        <h2>🎥 Featured Video</h2>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Peace Education"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

      <section className="academy-section">
        <h2> Quick Reads</h2>
        <ul>
          <li><a href="#">Understanding Genocide Ideology</a></li>
          <li><a href="#">10 Signs of Hate Speech Online</a></li>
          <li><a href="#">How to Respond with Peace</a></li>
        </ul>
      </section>
    </div>
  );
}

export default Academy;
