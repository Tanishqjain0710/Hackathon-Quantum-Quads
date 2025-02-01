import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedUser = localStorage.getItem("username");
        const storedPass = localStorage.getItem("password");

        if (!storedUser || !storedPass) {
            alert("No user found! Please register first.");
            return;
        }

        if (username.trim() === storedUser && password.trim() === storedPass) {
            alert("Login successful!");
            navigate("/dashboard");  // Redirect to Dashboard
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
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
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
