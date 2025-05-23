import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reports')
      .then(res => res.json())
      .then(data => setReports(data));
  }, []);

  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/reports/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    setReports(reports.map(r => r._id === id ? { ...r, status } : r));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="text-left p-2">Text</th>
            <th>Label</th>
            <th>Confidence</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report._id}>
              <td className="p-2 max-w-[250px] truncate">{report.text}</td>
              <td>{report.analysis?.label}</td>
              <td>{report.analysis?.confidence}</td>
              <td>{report.analysis?.severity}</td>
              <td className="font-semibold">{report.status}</td>
              <td>
                <button onClick={() => updateStatus(report._id, 'Reviewed')} className="text-green-600">✅</button>
                <button onClick={() => updateStatus(report._id, 'Escalated')} className="text-red-600 ml-2">🚨</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
