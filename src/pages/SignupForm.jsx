import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const SignupForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  console.log(auth?.currentUser?.email)
  
  const [error, setError] = useState('');  // For error handling
  
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');  // Clear previous errors
    try {
      await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
      // Redirect or show success message if needed
    } catch (err) {
      setError(err.message);  // Set the error message if signup fails
    }
  };
  
  return (
    <div>
      <form onSubmit={submitHandler}>
    
        <input 
          type="email"  // Changed to 'email' for proper email validation
          name="email" 
          placeholder="Enter your email" 
          value={credentials.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Enter your password" 
          value={credentials.password} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Signup</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message if there's any */}
    </div>
  );
};

export default SignupForm;
