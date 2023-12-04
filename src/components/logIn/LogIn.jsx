import React, { useState } from 'react';
import '../../styles/LogIn.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async (credentials) => {
    try {
      const response = await fetch('/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const { token } = await response.json();
      localStorage.setItem('token', token);
      // Assuming you have a function to handle successful login and redirection
      handleSuccessfulLogin();
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleSuccessfulLogin = () => {
    // Perform any necessary actions upon successful login
    // For example, you can redirect to a dashboard page
    window.location.href = '/dashboard';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      email,
      password,
    };

    login(credentials);
  };

  return (
    <div className="login-container">
      <h1>Log In</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
