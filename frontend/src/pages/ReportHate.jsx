import React, { useState } from 'react';

function ReportHate() {
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: send to backend Flask AI analyzer
    console.log("Reported content:", content);
    setSubmitted(true);
  };

  return (
    <div className="report-container">
      <h1> Report Hate Speech</h1>
      <p>Help us detect and act on hate speech circulating online.</p>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Paste hate content or describe the incident..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="6"
          />
          <button type="submit">Submit for Review</button>
        </form>
      ) : (
        <p>Thank you! Your report has been submitted for AI analysis.</p>
      )}
    </div>
  );
  
}
fetch("http://localhost:5000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: content })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Analysis Result:", data);
      // show result to user or admin
    });
  
export default ReportHate;
