import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = { name: name.trim(), email: email.trim().toLowerCase(), password: password.trim() };
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/login');
    };

    return (
        <div className="addUser">
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit} className="addUserForm">
                <div className="inputGroup">
                    <label htmlFor="name">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required id="name" autoComplete="off" placeholder="Enter your name" />
                    <label htmlFor="name">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required id="email" autoComplete="off" placeholder="Enter your email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required id="password" autoComplete="off" placeholder="Enter your password" />
                    <br />
                    <button type="submit" class="btn btn-success">Sign Up</button>
                </div>
            </form>
            <div className="login">
                <p>Already have an account?</p>
                <Link to="/login" type="submit" class="btn btn-primary">Login</Link>
            </div>
        </div>
    )
}

export default Signup

// import React, { useState } from 'react';

// function Signup({ handleLogin }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = { name, email, password };
//     localStorage.setItem('user', JSON.stringify(userData));
//     handleLogin(userData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default Signup;

