import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(mobile, password);
    setMobile('');
    setPassword('');
  };

  
  return (
    <div >
      <h2 style={{color:"teal"}}>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Mobile:--</label>
        <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        <br></br>
        <label>Password:--</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br></br>
        <button type="submit" style={{color:"black",width:"8%"}}>LOGIN</button>
      </form>
    </div>
  );
};

export default LoginForm;
