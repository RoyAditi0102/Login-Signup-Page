import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from '../graphql/mutations';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './Signup.css';
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
    <div className="signup-container">
      <Toaster />
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button
          type="submit"
          disabled={loading || !email || !username || !password}
        >
          {loading ? 'Signing up...' : 'Signup'}
        </button>
        {error && (
          <p className="error">
            {error.message.replace('GraphQL error: ', '')}
          </p>
        )}
      </form>
    </div>
  );
};

export default Signup;
