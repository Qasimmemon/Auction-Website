import React, { useRef } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} placeholder="Email" required />
      <input type="password" ref={passwordRef} placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
