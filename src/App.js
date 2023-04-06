import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enroll from "./components/Enroll";
import Schedule from "./components/Schedule";
import "./App.css";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enroll />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}
