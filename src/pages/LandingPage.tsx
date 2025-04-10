import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: 'linear-gradient(to top, #fff, rgb(255, 110, 168))',
      }}
    >
      <div
        className="card p-5 shadow text-center"
        style={{ width: '100%', maxWidth: '500px', backgroundColor: '#ffffff' }}
      >
        <h1 className="mb-3 text-dark">Welcome!</h1>
        <p className="mb-4 text-secondary">
          Please log in or create a new account to continue.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn"
            style={{ backgroundColor: '#ff4da6', color: 'white' }}
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => navigate('/signup')}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
