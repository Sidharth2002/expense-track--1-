import { useState } from "react";
import "../styles/LoginPage.css";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";

function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleComponent = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="login-box">
      {showLogin ? (
        <div>
          <LoginComponent />
          <p>
            Do not have an account?{" "}
            <span className="toggle-link" onClick={toggleComponent}>
              Register
            </span>
          </p>
        </div>
      ) : (
        <div>
          <RegisterComponent />
          <p>
            Already have an account?{" "}
            <span className="toggle-link" onClick={toggleComponent}>
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
