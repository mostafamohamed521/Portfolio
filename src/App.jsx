import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Cursor from "./components/Cursor.jsx";

export default function App() {
  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/works/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}
