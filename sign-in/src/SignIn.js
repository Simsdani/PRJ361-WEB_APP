import './styling/SignIn.css';
import { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          required 
        />

        <label>Password</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter password" 
          required 
        />

        <label>Confirm Password</label>
        <input 
          type="password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} 
          placeholder="Confirm password" 
          required 
        />

        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Log In</a></p>
    </div>
  );
}

export default SignIn;
