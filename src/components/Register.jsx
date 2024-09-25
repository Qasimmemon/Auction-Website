import React, { useRef } from 'react';
import { useAuth } from '../context/AuthContext';

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} placeholder="Email" required />
      <input type="password" ref={passwordRef} placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Register;
