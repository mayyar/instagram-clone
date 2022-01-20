import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

const login = () => {
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
    <p>I am the login page</p>
  );
};

export default login;