import React from "react";
import { useState } from "react";
import axios from "./axios";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";
import Swal from "sweetalert2";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [InvalidInput, setInvalidInput] = useState(0);

  const checkUser = () => {
    axios
      .post("http://localhost:8000/api/users/login", { email, password })
      .then((res) => {
        window.localStorage.setItem("token", res.data.data.token);
        Swal.fire({
          icon: "success",
          title: "sucess login ",
          text: "hehehehhe",
          showCloseButton: true,
        });
        navigate(`/admin`);
      })
      .catch((e) => {
        console.log("Error found");
        Swal.fire({
          icon: "error",
          title: "Invalid Input",
          text: "Invalid Id or Invalid Password",
          showCloseButton: true,
        });
      });
  };
  return (
    <>
      <div className="text-center my-4">
        <div className="mb-3 row">
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputemail"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => checkUser()}
        >
          Sign in
        </button>
      </div>
    </>
  );
};

export default Login;
