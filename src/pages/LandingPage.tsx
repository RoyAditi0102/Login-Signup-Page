import { useNavigate } from 'react-router-dom';
import './landing.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1>Welcome!</h1>
        <p>Please choose an option:</p>
        <div className="button-group">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
