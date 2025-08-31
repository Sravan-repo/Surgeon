import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState('Sign Up'); // 'Sign Up' or 'Login'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (state === 'Sign Up') {
      // Register user, then switch to Login on success
      dispatch(register({ name, email, password }))
        .unwrap()
        .then(() => {
          alert('Registration successful! Please login.');
          setState('Login');
          setName('');
          setEmail('');
          setPassword('');
        })
        .catch(() => {
          // handle registration error if needed
          alert('Registration failed. Please try again.');
        });
    } else {
      // Login user, then navigate to home page on success
      dispatch(login({ email, password }))
        .unwrap()
        .then(() => {
          navigate('/');
        })
        .catch(() => {
          // handle login error if needed
          alert('Login failed. Please try again.');
        });
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex justify-center items-center"
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 text-zinc-600 text-sm">
        <p className="text-xl items-center font-semibold">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        <p className="text-medium items-center text-center">
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to Book Appointment
        </p>

        {state === 'Sign Up' && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 w-full p-2 mt-1"
              type="text"
              placeholder="*Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 w-full p-2 mt-1"
            type="email"
            placeholder="*Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 w-full p-2 mt-1"
            type="password"
            placeholder="*Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button className="bg-amber-600 text-black w-full py-2 text-center" type="submit">
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {state === 'Sign Up' ? (
          <p>
            Already have an account?{' '}
            <span
              onClick={() => setState('Login')}
              className="text-amber-600 underline justify-end cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{' '}
            <span
              onClick={() => setState('Sign Up')}
              className="text-amber-600 underline cursor-pointer"
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
