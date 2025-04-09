// src/pages/Login.tsx

import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import './Login.css';

// GraphQL mutation for login
const LOGIN_MUTATION = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login({
        variables: {
          identifier: formData.identifier,
          password: formData.password
        }
      });

      console.log('Login success:', response.data);
      // Example: storing token in localStorage (optional)
      // localStorage.setItem('token', response.data.login.jwt);
      alert('Login successful!');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="form-title">Login</h2>

        <input
          type="text"
          name="identifier"
          value={formData.identifier}
          onChange={handleChange}
          placeholder="Username or Email"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {error && <p className="error-message">{error.message}</p>}
      </form>
    </div>
  );
};

export default Login;
