import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Updatecustomer(customerUpdate) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [stayDays, setStayDays] = useState("");
  const [bedNum, setBedNum] = useState("");

  //   useEffect(() => {
  //     console.log(customerUpdate);
  //   }, []);

  const addCustomer = () => {
    console.log(email, firstName, lastName, stayDays, bedNum);
    console.log(customerUpdate);
    console.log(customerUpdate.customerUpdate.firstName);
    axios
      .put(
        `http://localhost:8000/api/users/home/edit/${customerUpdate.customerUpdate.email}`,
        {
          firstName,
          lastName,
          email,
          noOfStayDays: stayDays,
          allocatedBedNum: bedNum,
        }
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Customer Updated ",
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
      <h1>Update Customer Details</h1>
      <div className="text-center my-4">
        <div class="input-group">
          <span class="input-group-text">First and last name</span>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            placeholder="Enter First Name"
            defaultValue={customerUpdate.customerUpdate.firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type="text"
            aria-label="Last name"
            class="form-control"
            placeholder="Enter Last Name"
            defaultValue={customerUpdate.customerUpdate.lastName}
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
            defaultValue={customerUpdate.customerUpdate.email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className="text-center my-4">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            No of days to stay
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Days to stay"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            defaultValue={customerUpdate.customerUpdate.noOfStayDays}
            onChange={(event) => setStayDays(event.target.value)}
          />
        </div>
      </div>
      <div className="text-center my-4">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            Allocate Bed Number
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Bed No."
            aria-label="Username"
            defaultValue={customerUpdate.customerUpdate.allocatedBedNum}
            aria-describedby="addon-wrapping"
            onChange={(event) => setBedNum(event.target.value)}
          />
        </div>
      </div>
      <div className="text-center my-4">
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => addCustomer()}
        >
          Update Customer
        </button>
      </div>
    </>
  );
}

export default Updatecustomer;
