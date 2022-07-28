import React from "react";
import Navbar from "./Navbar";

function CustomerDetails({ customerData }) {
  return (
    <>
      <Navbar />
      <h1>Customer Details</h1>
      <br />
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Bed No.</th>
            <th scope="col">Days to Stay</th>
            <th scope="col">Gym Status</th>
            <th scope="col">No of Meals</th>
            <th scope="col">Cloth serrvice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{customerData.firstName}</td>
            <td>{customerData.lastName}</td>
            <td>{customerData.email}</td>
            <td>{customerData.allocatedBedNum}</td>
            <td>{customerData.noOfStayDays}</td>
            <td>{customerData.gym ? "Yes" : "No"}</td>
            <td>{customerData.meal}</td>
            <td>{customerData.clothe}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CustomerDetails;
