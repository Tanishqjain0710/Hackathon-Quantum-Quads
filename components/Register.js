import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = () => {
        if (username.length < 4 || password.length < 4) {
            alert("Choose a better username and a stronger password!");
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Registration Successful! Now login.");
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="glass-container">
            <h1>Register</h1>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
