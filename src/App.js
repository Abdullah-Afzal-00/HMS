import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./Home";
import { useState } from "react";
import "./App.css";
import Admin from "./Admin";
import View_Customer from "./View_Customer";
import CustomerDetails from "./CustomerDetails";
import Add_Customer from "./Add_Customer";
import View_Staff from "./View_Staff";
import AddStaff from "./addStaff";
import StaffDetails from "./staffDetails";
import Updatecustomer from "./updateCustomer";

const App = () => {
  const [customerData, setCustomerData] = useState();
  const [staffData, setStaffData] = useState();
  const [customerUpdate, setCustomerUpdate] = useState();

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/view_customer"
          element={
            <View_Customer
              setCustomerData={setCustomerData}
              setCustomerUpdate={setCustomerUpdate}
            />
          }
        />
        <Route
          path="/CustomerDetails"
          element={<CustomerDetails customerData={customerData} />}
        />
        <Route path="/add_customer" element={<Add_Customer />} />
        <Route
          path="/view_staff"
          element={<View_Staff setStaffData={setStaffData} />}
        />
        <Route
          path="/staff_details"
          element={<StaffDetails staffData={staffData} />}
        />
        <Route path="/add_staff" element={<AddStaff />} />
        <Route
          path="/updateCustomer"
          element={<Updatecustomer customerUpdate={customerUpdate} />}
        />
      </Routes>
    </>
  );
};

export default App;
