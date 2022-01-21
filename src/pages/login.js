import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

const Login = () => {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, serEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInValid = emailAddress === '' || password === '';

  const handleLogin = () => {};

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <p>I have no idea!</p>
    </div>
  );
};

export default Login;