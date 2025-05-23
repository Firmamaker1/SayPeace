import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Academy from "./pages/Academy";
import Campaigns from "./pages/Campaigns";
import ReportHate from "./pages/ReportHate";
import Dashboard from "./pages/Admin/Dashboard";
import Home from "./pages/home/Home";
import "./App.css";
import "./index.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/report" element={<ReportHate />} />
      </Routes>
    </Router>
  );
  

} 

export default App;





