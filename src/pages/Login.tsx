// src/pages/Login.tsx

import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

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
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background : 'linear-gradient(to top, #fff,rgb(255, 110, 168))',
      }}
    >
      <div className="card p-4 shadow" 
      style={{ width: '100%', maxWidth: '400px', backgroundColor: '#fffff'}}>
        <h2 className="text-center mb-4 text-dark">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              className="form-control"
              placeholder="Username or Email"
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="btn w-100" style={{ backgroundColor: '#ff4da6', color: 'white' }} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {error && <p className="text-danger text-center mt-3">{error.message}</p>}

          <p className="mt-3 text-center">
            Don't have an account? <a href="/signup" className="link-dark">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
