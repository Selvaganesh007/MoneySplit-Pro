import React, { useState } from 'react';
import './Login.scss';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({user_name: '', password: ''});

  const handleLoginDetails = (value, field) => {
    setLoginDetails({
      ...loginDetails,
      [field]: value,
    });
  };

  const onLoginClick = () => {
    setLoginDetails({user_name: '', password: ''});
    const go = true;
    if (go) {
      console.log('User sucessfully logined');
    } else {
      alert('Kindly check your user id and password');
    }
  };

  return (
    <div className='login'>
      <h3>Login</h3>
      <div className="inputFields">
        <span>User Name:*</span>
        <Input
          placeholder="Enter User Name"
          value={loginDetails.user_name}
          onChange={(e) => handleLoginDetails(e.target.value, "user_name")}
        />
        <span>Password:*</span>
        <Input.Password
          placeholder="Enter Password"
          value={loginDetails.password}
          onChange={(e) => handleLoginDetails(e.target.value, "password")}
        />
        <Button type="primary" onClick={() => onLoginClick()} disabled={Object.values(loginDetails).includes('')}>
          Login
        </Button>
        <Link to="/">Register</Link>
        </div>
    </div>
  )
}

export default Login;