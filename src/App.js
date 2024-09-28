import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError('Invalid username or password');
      return;
    }

    console.log('Logging in with:', formData);

    setWelcomeMessage('Welcome, user!');
    setError('');
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      {error && <p className="error">{error}</p>}
      {welcomeMessage && <p className="welcome-message">{welcomeMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
