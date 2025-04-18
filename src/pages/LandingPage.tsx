import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
<div
  className={`landing-container d-flex flex-column justify-content-center align-items-center vh-100 ${
    isDarkMode ? 'gradient-dark text-light' : 'gradient-light'
  }`}
>
  <div className="container h-100 position-relative">
    {/* Theme Toggle */}
    <button
      className={`btn theme-toggle-btn position-absolute top-0 end-0 m-3 py-2 fw-bold shadow rounded-pill d-flex align-items-center gap-2 ${
        isDarkMode ? 'btn-light' : 'btn-dark'
      }`}
      onClick={toggleTheme}
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>

    {/* Main content centered */}
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <div
        className={`card p-5 shadow text-center landing-card w-100 ${
          isDarkMode ? 'bg-secondary' : 'bg-white'
        }`}
        style={{ maxWidth: '500px' }}
      >
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
    </div>

    {/* Footer */}
    <div className="position-absolute bottom-0 start-50 translate-middle-x text-center pb-3 small">
      <a href="#" className="text-decoration-none me-3">Terms</a>
      <a href="#" className="text-decoration-none me-3">Privacy</a>
      <a href="#" className="text-decoration-none">Contact</a>
    </div>
  </div>
</div>

  );
};

export default LandingPage;
