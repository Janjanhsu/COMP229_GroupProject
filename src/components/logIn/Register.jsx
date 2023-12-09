import React, { useState } from 'react';
import '../../styles/Register.css';
import SignUp from '../../assets/gif/Register.gif';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const responseBody = await response.text();
        throw new Error(`Registration failed with status ${response.status}. Response: ${responseBody}`);
      }

      // Registration successful, now handle authentication
      const authResponse = await fetch('http://localhost:3000/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!authResponse.ok) {
        const authResponseBody = await authResponse.text();
        throw new Error(`Authentication failed with status ${authResponse.status}. Response: ${authResponseBody}`);
      }

      const { token } = await authResponse.json();

      // Store the token in localStorage or a secure storage solution
      localStorage.setItem('token', token);

      // Authentication and Registration successful, perform any necessary actions
      // (e.g., redirect to a dashboard)
      console.log('Registration and authentication successful!');
    } catch (err) {
      console.error('Error during registration and authentication:', err);
      setError('Registration and authentication failed');
    }
  };

  return (
    <div className="register-container">
      <img src={SignUp} className="SignUp" alt="Register" width="500" heigth="248"/>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
