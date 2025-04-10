import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../graphql/mutations';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = useNavigate();
  const [registerUser, { loading, error }] = useMutation(SIGNUP_MUTATION);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await registerUser({
        variables: {
          input: {
            email,
            username,
            password,
          },
        },
      });

      console.log('Signup success:', response.data);
      toast.success('User registered!');
      toast.success('Redirecting to Login...');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Signup error:', err.message);
        toast.error(err.message.replace('GraphQL error: ', ''));
      } else {
        console.error('Unexpected signup error:', JSON.stringify(err, null, 2));
        toast.error('Unexpected signup error');
      }
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
      <Toaster />

      <button
        className={`btn position-absolute top-0 end-0 m-3 py-2 fw-bold shadow rounded-pill d-flex align-items-center gap-2 ${isDarkMode ? 'btn-light' : 'btn-dark'}`}
        onClick={toggleTheme}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <div
        className={`card p-4 shadow ${isDarkMode ? 'bg-secondary' : 'bg-white'}`}
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <h2 className={`text-center mb-4 ${isDarkMode ? 'text-white' : 'text-dark'}`}>
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="Username"
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{ backgroundColor: '#ff4da6', color: 'white' }}
            disabled={loading || !email || !username || !password}
          >
            {loading ? 'Signing up...' : 'Signup'}
          </button>

          {error && (
            <p className="text-danger text-center mt-3">
              {error.message.replace('GraphQL error: ', '')}
            </p>
          )}

          <p className="mt-3 text-center">
            Already have an account?{' '}
            <a href="/login" className={`link-${isDarkMode ? 'light' : 'dark'}`}>
              Login
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

export default Signup;
