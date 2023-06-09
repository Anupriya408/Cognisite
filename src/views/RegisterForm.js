import React, { useState,useEffect } from 'react';
//  import axios from 'axios';
import './registerForm.css'

const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);



  const handleSubmit =  (e) => {
   e.preventDefault();

    // axios.post("http://localhost:8080/",users)
  

      const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/users", requestOptions)
      .then((response) => response.json())
      .then((result) => setUsers(result))
      .catch((error) => console.log("error", error));
  };

  
    getData();




    // Validate the form inputs
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const user = { name, mobile, password };
      onRegister(user);
      setName('');
      setMobile('');
      setPassword('');
      setErrors({});
      setUsers({});
    } else {
      setErrors(formErrors);
    }
  };
  // useEffect(() => {
  //   localStorage.setItem('dataKey', JSON.stringify(user));
  // }, [user]);

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!name.trim()) {
      errors.name = 'fill the details';
    }

    // Validate mobile
    // if (!mobile.trim()) {
    //   errors.mobile = 'Mobile is required';
    // } else if (!/^\d{10}$/.test(mobile.trim())) {
    //   errors.mobile = 'Invalid mobile number';
    // }


    // Validate password
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.trim().length < 6) {
      errors.password = 'Password should be at least 6 characters long';
    }

    return errors;
  
  
  };

 
  return (
    <div className='register-form'>
      <h2  style={{color:"teal"}}>Registeration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:--</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label>Mobile:--</label>
          <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>

        <div>
          <label>Password:--</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        
        <button type="submit">REGISTER</button>
       
      
      </form>
     
    </div>

  );
};

export default RegisterForm;
