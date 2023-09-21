import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import "../styles/LoginComponent.css";


function LoginComponent() {
  const [formData, setFormData] = useState({
    userLoginUsername: "",
    userLoginPassword: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [userId, setUserId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSuccessfulLogin = () => {
    alert("Logged in successfully");
    navigate("/home");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        formData
      );
      const { userId } = response.data;

      setUserId(userId);

      handleSuccessfulLogin();
    } catch (error) {
      if (error.response) {
        alert("Login failed: " + error.response.data.message);
      } else {
        console.error("Login failed:", error.message);
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="usrNm" controlId="formGroupUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            name="userLoginUsername"
            value={formData.userLoginUsername}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="pswrd" controlId="formGroupPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="userLoginPassword"
            value={formData.userLoginPassword}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginComponent;

