import React, { useState } from "react";
import "./Register.scss";
import { Button, Checkbox, Input } from "antd";
import { Link } from "react-router-dom";

const INITIAL_STATE = {
  user_name: "",
  password: "",
  email: "",
  phone_number: "",
};

const Register = () => {
  const [registerDetails, setRegisterDetails] = useState(INITIAL_STATE);
  const [isTNCAgree, setIsTNCAgree] = useState(false);

  const handleRegisterDetails = (value, field) => {
    setRegisterDetails({
      ...registerDetails,
      [field]: value,
    });
  };

  const onRegisterClick = () => {
    setRegisterDetails(INITIAL_STATE);
    setIsTNCAgree(false);
    // api call
    // console.log(registerDetails);
  };

  const { user_name, password, email, phone_number } = registerDetails;

  return (
    <div className="register">
      <h3>Register</h3>
      <div className="inputFields">
        <span>User Name:*</span>
        <Input
          placeholder="Enter User Name"
          value={user_name}
          onChange={(e) => handleRegisterDetails(e.target.value, "user_name")}
        />
        <span>Password:*</span>
        <Input.Password
          placeholder="Enter Password"
          value={password}
          onChange={(e) => handleRegisterDetails(e.target.value, "password")}
        />
        <span>Email:*</span>
        <Input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => handleRegisterDetails(e.target.value, "email")}
        />
        <span>Phone number:*</span>
        <Input
          placeholder="Enter Phone Number"
          value={phone_number}
          onChange={(e) =>
            handleRegisterDetails(e.target.value, "phone_number")
          }
        />
        <span>
          <Checkbox
            checked={isTNCAgree}
            disabled={Object.values(registerDetails).includes('')}
            onChange={() => setIsTNCAgree(!isTNCAgree)}
          >
            I agree all statements in Terms of service
          </Checkbox>
        </span>
        <Button type="primary" onClick={() => onRegisterClick()} disabled={!isTNCAgree}>
          Register
        </Button>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
