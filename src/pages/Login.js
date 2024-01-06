import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'; // Import your CSS file
import {Link} from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const validate = () => {
    if (email === '' || password.length < 6) {
      alert("Please enter a valid email and a password with at least 6 characters.");
      return false;
    }
    // Add any additional validation logic as needed
    
      navigate('/home');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Add your form submission logic here
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div>
      
    <div className="box">
        
      <form className="form-box" onSubmit={handleSubmit}>
       <span className="text-center"><b>My Restaurant</b></span>\
        <div className="input-container">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email ID</label>
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <Link to="/">
        <button type="button1" class="signin-button">SignIn</button>
      </Link>
        <p>Not created an account?<Link to="/register">Register Now</Link></p>
        
      </form>
    </div>
    </div>
  );
};

export default LoginForm;