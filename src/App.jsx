import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CampaignsRegistration from "./pages/CampaignsRegistration";
import CampaignsTable from "./pages/CampaignsTable";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Dashboard"/>} />
        <Route path="/CampaignsRegistration" element={<CampaignsRegistration />} /> 
        <Route path="/CampaignsTable" element={<CampaignsTable />} /> 
        <Route path="/Dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  )
}

export default App