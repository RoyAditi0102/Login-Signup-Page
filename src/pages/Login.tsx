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

  const [isDarkMode, setIsDarkMode] = useState(false);

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
      alert('Login successful!');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center vh-100 ${
        isDarkMode ? 'bg-dark text-light' : ''
      }`}
      style={{
        background: isDarkMode
          ? 'linear-gradient(to top,rgb(43, 39, 16), #000)'
          : 'linear-gradient(to top, #fff, rgb(255, 110, 168))',
      }}
    >
      <button
        className={`btn position-absolute top-0 end-0 m-3px-3 py-2 fw-bold shadow rounded-pill d-flex align-items-center gap-2 ${isDarkMode ? 'btn-light' : 'btn-dark'}`}
        onClick={toggleTheme}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <div
        className={`card p-4 shadow ${isDarkMode ? 'bg-secondary' : 'bg-white'}`}
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <h2 className={`text-center mb-4 ${isDarkMode ? 'text-white' : 'text-dark'}`}>
          Login
        </h2>
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

          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: '#ff4da6',
              color: 'white'
            }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {error && (
            <p className="text-danger text-center mt-3">
              {error.message.replace('GraphQL error: ', '')}
            </p>
          )}

          <p className="mt-3 text-center">
            New here?{' '}
            <a href="/signup" className={`link-${isDarkMode ? 'light' : 'dark'}`}>
              Signup
            </a>
          </p>
        </form>
      </div>

      <div className="position-absolute bottom-0 start-50 translate-middle-x text-center pb-3 small">
        <a href="#" className="text-decoration-none me-3">Terms</a>
        <a href="#" className="text-decoration-none me-3">Privacy</a>
        <a href="#" className="text-decoration-none">Contact</a>
      </div>
    </div>
  );
};

export default Login;
