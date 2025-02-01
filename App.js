import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register"; // ✅ Ensure this is imported
import FileUploadPage from "./components/FileUploadPage";

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  {/* ✅ Ensure this exists */}
        <Route path="/upload" element={<FileUploadPage />} />
        <Route path="/AuthButton" element={<auth-button/>} />
      </Routes>
    </Router>
  );
}

export default App;
