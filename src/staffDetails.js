import React from "react";
import Navbar from "./Navbar";

function staffDetails({ staffData }) {
  return (
    <>
      <Navbar />
      <h1>Staff Details</h1>
      <br />
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Job Description</th>
            <th scope="col">Working Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{staffData.firstName}</td>
            <td>{staffData.lastName}</td>
            <td>{staffData.email}</td>
            <td>{staffData.jobDescription}</td>
            <td>{staffData.workingDuration}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default staffDetails;
