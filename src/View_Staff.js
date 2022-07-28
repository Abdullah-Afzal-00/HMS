import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import axios from "./axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function View_Staff({ setStaffData }) {
  let navigate = useNavigate();
  const [staffDetails, setStaffDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/home/get/staff")
      .then((res) => setStaffDetails(res.data.data.result))
      .catch((e) => console.log("Error Found !!"));
  });
  const moveToAStaffViewPage = (data) => {
    setStaffData(data);
    //console.log(data);
    navigate("/staff_details");
  };
  const moveToAddStaff = () => navigate("/add_staff");
  return (
    <>
      <Navbar />
      <div className="text-center my-4">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => moveToAddStaff()}
        >
          Add Staff
        </button>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Working Duration</th>
            <th scope="col">Action</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {staffDetails.map((d, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{d.firstName}</td>
              <td>{d.lastName}</td>
              <td>{d.email}</td>
              <td>{d.workingDuration}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  onClick={() => moveToAStaffViewPage(d)}
                >
                  View Staff Member
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-success">
                  Update
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-outline-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default View_Staff;
