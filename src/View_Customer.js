import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import axios from "./axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function View_Customer({ setCustomerData, setCustomerUpdate }) {
  let navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/home/get/customer")
      .then((res) => setCustomerDetails(res.data.data.result))
      .catch((e) => console.log("Error Found !!"));
  }, []);
  const moveToAViewPage = (data) => {
    setCustomerData(data);
    navigate("/CustomerDetails");
  };
  const moveToAddCustomer = () => navigate("/add_customer");

  const moveToUpdateCustomer = (update) => {
    // console.log(update);
    setCustomerUpdate(update);
    navigate("/updateCustomer");
  };
  const deleteCustomer = (data) => {
    axios
      .delete(`http://localhost:8000/api/users/delUser/${data.email}`, {
        allocatedBedNum: data.allocatedBedNum,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Customer Delted ",
          //text: "hehehehhe",
          showCloseButton: true,
        });
      })
      .catch((e) => {
        console.log("Error found !!");
      });
  };
  return (
    <>
      <Navbar />
      <div className="text-center my-4">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => moveToAddCustomer()}
        >
          Add Customer
        </button>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Bed No.</th>
            <th scope="col">Action</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {customerDetails.map((d, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{d.firstName}</td>
              <td>{d.lastName}</td>
              <td>{d.email}</td>
              <td>{d.allocatedBedNum}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  onClick={() => moveToAViewPage(d)}
                >
                  View Customer
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-success"
                  onClick={() => moveToUpdateCustomer(d)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  onClick={() => deleteCustomer(d)}
                >
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

export default View_Customer;
