import React from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./login";
import "./App.css";

const Home = () => {
  let navigate = useNavigate();
  const goToLoginPage = () => {
    navigate(`/login`);
  };
  return (
    <>
      <h1>Hostel Managment System</h1>
      <div className="text-center my-4">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => goToLoginPage()}
        >
          Login
        </button>
        <p className="LoginMessage">Press Login Button to go to Login Form</p>
      </div>
    </>
  );
};

export default Home;
