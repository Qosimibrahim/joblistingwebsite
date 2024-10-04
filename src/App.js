import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login/Login';
import Signup from './signup/Signup';
import Joblisting from './joblisting/Joblisting';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Routes>
        {/* If logged in, redirect to Job Listing */}
        <Route path="/joblisting" element={user ? <Joblisting user={user} handleLogout={handleLogout} /> : <Navigate to="/login" />} />
        
        {/* Login route */}
        <Route path="/login" element={user ? <Navigate to="/joblisting" /> : <Login handleLogin={handleLogin} />} />
        
        {/* Signup route */}
        <Route path="/signup" element={user ? <Navigate to="/joblisting" /> : <Signup />} />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;


