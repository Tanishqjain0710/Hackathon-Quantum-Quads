import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <h2>Welcome to Your Dashboard</h2>
            <button onClick={() => navigate("/upload")}>Go to Upload Page</button> {/* ✅ Redirects to Upload */}
        </div>
    );
};

export default Dashboard;
