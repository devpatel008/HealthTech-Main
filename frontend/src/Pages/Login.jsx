import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    // Prevent form default action
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, confirmPassword, role },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(response.data.message);
      setIsAuthenticated(true);
      if (role === 'Patient') {
        navigateTo("/");
      }
      else if (role === 'Doctor') {
        navigateTo("/Doctor");
      }

      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // Example of usage in a React component
  if (isAuthenticated && role === 'Patient') {
    return <Navigate to={"/"} />;
  } else if (isAuthenticated && role === 'Doctor') {
    return <Navigate to={"/Doctor"} />;
  }

  return (
    <>
      <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa
          voluptas expedita itaque ex, totam ad quod error?
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Register Now
            </Link>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
            <button type="submit" onClick={() => setRole('Patient')}>Login as User</button>
            <button type="submit" onClick={() => setRole('Doctor')}>Login as Doctor</button>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <Link to={"/register"} style={{ textDecoration: "none", color: "#271776ca" }}>
              <button type="button">Register as User</button>
            </Link>
          </div>
        </form>

      </div>
    </>
  );
};

export default Login;
