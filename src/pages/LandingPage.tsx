import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`landing-container d-flex flex-column justify-content-center align-items-center vh-100 ${
        isDarkMode ? 'dark-mode text-light' : 'light-mode'
      }`}
    >
      <button
        className={`btn theme-toggle-btn position-absolute top-0 end-0 m-3 py-2 fw-bold shadow rounded-pill d-flex align-items-center gap-2 ${
          isDarkMode ? 'btn-light' : 'btn-dark'
        }`}
        onClick={toggleTheme}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <div className={`card p-5 shadow text-center ${isDarkMode ? 'bg-secondary' : 'bg-white'} landing-card`}>
        <h1 className={`mb-3 ${isDarkMode ? 'text-white' : 'text-dark'}`}>Welcome!</h1>
        <p className={`mb-4 ${isDarkMode ? 'text-light' : 'text-secondary'}`}>
          Please log in or create a new account to continue.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn login-signup-btn"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
            onClick={() => navigate('/signup')}
          >
            Signup
          </button>
        </div>
      </div>

      <div className="position-absolute bottom-0 start-50 translate-middle-x text-center pb-3 small">
        <a href="#" className="text-decoration-none me-3">Terms</a>
        <a href="#" className="text-decoration-none me-3">Privacy</a>
        <a href="#" className="text-decoration-none">Contact</a>
      </div>
    </div>
  );
};

export default LandingPage;
