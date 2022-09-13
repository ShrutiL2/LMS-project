import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './Components/Home';
import AllEmp from './Components/AllEmps';
import Layout from './Components/Layout';
import AllLeaves from './Components/AllLeaves';
import AddEmp from './Components/AddEmp';
import AddLeave from './Components/AddLeave';
import LoginEmp from './Components/LoginEmp';
import reportWebVitals from './reportWebVitals';

import EmpDash from './Components/EmpDash';
import EmployeeDetails from './Components/EmployeeDetails';
import ManDash from './Components/ManDash';
import LoginMan from './Components/LoginMan';
import ManagerDetails from './Components/ManagerDetails';
import LeaveStatus from './Components/LeaveStatus';

export default function App1() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="employees" element={<AllEmp />} />
                    <Route path="leaves" element={<AllLeaves />} />
                    <Route path="addemp" element={<AddEmp />} />
                    <Route path="addleave/:id" element={<AddLeave />} />
                    <Route path="emplogin" element={<LoginEmp />} />
                    <Route path="empdash" element={<EmpDash/>} />
                    <Route path="empdash/:id" element={<EmpDash/>} />
                    <Route path="employee/details/:id" element={<EmployeeDetails/>} />
                    <Route path="manager/details/:id" element={<ManagerDetails/>} />
                    <Route path="mandash/:id" element={<ManDash/>} />
                    <Route path="manlogin" element={<LoginMan />} />
                    <Route path="leavestatus/:id" element={<LeaveStatus />} />
                    
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App1 />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
