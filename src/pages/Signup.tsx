import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../graphql/mutations';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: 'linear-gradient(to top, #fff, rgb(255, 110, 168))',
      }}
    >
      <Toaster />
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#ffffff' }}>
        <h2 className="text-center mb-4 text-dark">Sign Up</h2>
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
            Already have an account? <a href="/login" className="link-dark">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
