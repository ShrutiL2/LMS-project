import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';



const AddEmp = () => {
    const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({});

    const navigate= useNavigate();
    



    const handleChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs.desc);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Empname: inputs.name,
                Empemail: inputs.email,
                Department: inputs.department,
                Empaddress: inputs.address,
                Phnumber: inputs.number,
                Empusername: inputs.username,
                Emppassword: inputs.pass,
                Leaveinhand: inputs.leaveinhand,
                Managerid: inputs.manid

            })
        };
        fetch('http://localhost:23040/api/Employees/', requestOptions)
            .then(response => response.json())
            .then(response => {navigate(`/employees`)})
            .then(data => setSubmit(data.id))
            .catch(error => alert (error));
      

    }


    return (
        <div style={{
            display: 'block',
            width: 700,
            padding: 30, margin:'auto'
        }} >
            <form onSubmit={handleSubmit}>
                <Form.Group style={{ paddingBottom:15 }} >
                    <Form.Label>Enter your full name:</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter your full name" id="name" onChange={handleChange}/>
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Enter your Email:</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter your email" id="email" onChange={handleChange} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Enter your Department:</Form.Label>
                    <Form.Control type="text"
                        placeholder="Department " id="department" onChange={handleChange} />
                </Form.Group>
                
                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Enter your Address:</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Address " id="address" onChange={handleChange} />
                </Form.Group>


                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Enter your Phone Number:</Form.Label>
                    <Form.Control type="number"
                        placeholder="1234567890 " id="number" onChange={handleChange} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Enter your Username:</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Username " id="username" onChange={handleChange} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Enter your Username:</Form.Label>
                    <Form.Control type="password"
                        placeholder="Enter Password " id="pass" onChange={handleChange} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Enter Leave in hand:</Form.Label>
                    <Form.Control type="number"
                        id="leaveinhand" onChange={handleChange} />
                </Form.Group>
                

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Enter your Manager's Id:</Form.Label>
                    <Form.Control type="number"
                         id="manid" onChange={handleChange} />
                </Form.Group>


                <Button variant="success" onClick={handleSubmit}>Submit your Form</Button>
                {submit &&
                    <label>Response Submitted</label>
                }
            </form>
        </div>
    );
}



export default AddEmp;