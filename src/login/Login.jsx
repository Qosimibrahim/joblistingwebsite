import React, { useState } from 'react';
import "./login.css";
import { Link } from "react-router-dom";

const Login = ({ handleLogin }) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const storedUser = JSON.parse(localStorage.getItem('user'));
          
          if (storedUser && storedUser.email === email.trim().toLowerCase() && storedUser.password === password.trim()) {
            handleLogin(storedUser);
          } else {
            alert('Invalid credentials');
          }
        };
    return (
        <div className="addUser">
            <h3>Sign In</h3>
            <form onSubmit={handleSubmit} className="addUserForm">
                <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required id="email" autoComplete="off" placeholder="Enter your email"></input>

                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required id="password" autoComplete="off" placeholder="Enter your password"></input>
                    <br />
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="login">
                <p>Don't have account?</p>
                <Link to="/signup" type="submit" class="btn btn-success">Sign Up</Link>
            </div>
        </div>
    )
}

export default Login


