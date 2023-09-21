import { useState } from "react";
import axios from "axios";
import "../styles/RegisterComponent.css"

const RegisterComponent = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    userFirstName: "",
    userLastName: "",
    userSalary: "",
    userUsername: "",
    userPassword: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    for (const key in formData) {
      if (!formData[key]) {
        setError(`"${key}" cannot be empty.`);
        return;
      }
    }

    // Clear any previous error messages
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/register",
        formData
      );

      // Handle successful registration here
      console.log("Registration successful:", response.data);
      alert("Registration Successful");

      // Optionally, you can redirect the user to a login page or other page.
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration Failed");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
      <div className="Int-Regis">
        <div className="email">
          <label>Email:</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleInputChange}
            placeholder="email id"
          />
        </div>
       
        <div className="firstname">
          <label>First Name:</label>
          <input
            type="text"
            name="userFirstName"
            value={formData.userFirstName}
            onChange={handleInputChange}
            placeholder="First name"
          />
        </div>
        <div className="LastName">
          <label>Last Name:</label>
          <input
            type="text"
            name="userLastName"
            value={formData.userLastName}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="userSalary"
            value={formData.userSalary}
            onChange={handleInputChange}
            placeholder="salary"
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="userUsername"
            value={formData.userUsername}
            onChange={handleInputChange}
            placeholder="User Name"
          />
        </div>
        <div>
          <label>Password:</label>
          				<input type="password" name="pswd" placeholder="Password" required=""
            value={formData.userPassword}
            onChange={handleInputChange}
            
          />
        </div>
        </div>
        <button className="btn">Register</button>
      </form>
    </div>
  );
};

export default RegisterComponent;
