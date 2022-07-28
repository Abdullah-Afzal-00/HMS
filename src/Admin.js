import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/context")
      .then((res) => {
        console.log("i am here");
        setAdminName(res.data.data.firstName);
      })
      .catch((e) => console.log("Error Found"));
  }, []);
  return (
    <>
      <h1>Admin Page</h1>
      <Navbar />
      <h2>Welcome {adminName}</h2>
      <img
        src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
        className="center"
        alt="Image of Admin"
      ></img>
    </>
  );
};

export default Admin;
