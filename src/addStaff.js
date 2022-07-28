import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "./axios";

function AddStaff() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [workingDuration, setWorkingDuration] = useState("");

  const addStaff = () => {
    console.log(email, firstName, lastName, jobDescription, workingDuration);
    axios
      .post("http://localhost:8000/api/users/addStaff", {
        user: {
          firstName,
          lastName,
          email,
          jobDescription,
          workingDuration,
        },
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Staff Added ",
          //text: "hehehehhe",
          showCloseButton: true,
        });
        //window.localStorage.setItem("token", res.data.data.token);
      })
      .catch((e) => {
        console.log("Error found");
        //console.log(e);

        console.log(e.response.data.message);
        // if (e.response.data.message === "Bed Already Reserved") {
        //   Swal.fire({
        //     icon: "error",
        //     title: "Bed is Already Alocated",
        //     text: "Change Bed Number",
        //     showCloseButton: true,
        //   });
        // } else if (
        //   e.response.data.message ===
        //   "ValidationError: email: is already taken."
        // ) {
        //   Swal.fire({
        //     icon: "error",
        //     title: "Email is Already in Use",
        //     // text: "Change Bed Number",
        //     showCloseButton: true,
        //   });
        // } else

        Swal.fire({
          icon: "error",
          title: e.response.data.message,
          text: "Invlaid Data",
          showCloseButton: true,
        });
      });
  };
  return (
    <>
      <h1>Add Staff Member Details</h1>
      <div className="text-center my-4">
        <div class="input-group">
          <span class="input-group-text">First and last name</span>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            placeholder="Enter First Name"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type="text"
            aria-label="Last name"
            class="form-control"
            placeholder="Enter Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
      </div>
      <div className="text-center my-4">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Email
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className="text-center my-4">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Job Description
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Job Description"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={(event) => setJobDescription(event.target.value)}
          />
        </div>
      </div>
      <div className="text-center my-4">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Working Duration
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Working Duration"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={(event) => setWorkingDuration(event.target.value)}
          />
        </div>
      </div>
      <div className="text-center my-4">
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => addStaff()}
        >
          {" "}
          Add Staff Member
        </button>
      </div>
    </>
  );
}

export default AddStaff;
