import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate,useParams,useState} from 'react-router-dom';


const AddLeave = () => {

    const [form ,setForm]=useState({});
    const [errors,setErrors]= useState({});
    //const [submit, setSubmit] = useState(null);
    const [inputs, setInputs] = useState({
        "empid": 0,
        "manid": 0,
        "leavefrom": "2022-09-09T11:11:04.204Z",
        "leaveto": "2022-09-09T11:11:04.204Z",
        "noofdays": 0,
        "leavestatus": "pending",
        "leavetype": "string",
        "emp":null
});

    
    const navigate= useNavigate();
    
    const {id}= useParams();
    const [submit, setSubmit]=useState(false);
    
    

    const back =()=>{
        navigate(`/empdash/${id}`);
    }

    const handleChange = (n)=>(event) => {
        setInputs({...inputs,[n]:event.target.value})
    }

    const handleSubmit = (event) => {
        //event.preventDefault();
        setInputs({...inputs,"empid":id});
        
        
        
        // alert(inputs.desc);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        };
        fetch('http://localhost:23040/api/Leaves/', requestOptions)
            .then(response => response.json())
            .then(response => {navigate(`/empdash/${id}`)});
            
            
            

    }


    return (
        <div style={{
            display: 'block',
            width: 700,
            padding: 30, margin: 'auto'
        }} >
            <form onSubmit={handleSubmit}>
                


                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Enter your Manager Id:</Form.Label>
                    <Form.Control type="number"
                        placeholder="Enter your manager's id:" id="manid" onChange={handleChange("manid")} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control type="date"
                        id="leavefrom" onChange={handleChange("leavefrom")} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control type="date"
                         id="leaveto" onChange={handleChange("leaveto")} />
                </Form.Group>


                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Enter number of days:</Form.Label>
                    <Form.Control type="number"
                         id="days" onChange={handleChange("noofdays")} />
                </Form.Group>

                <Form.Group style={{ paddingBottom: 15 }}>
                    <Form.Label>Enter leave type:</Form.Label>
                    <Form.Control type="number"
                         id="leavetype" onChange={handleChange("leavetype")} />
                    
                </Form.Group>


                <Button variant="success" onClick={handleSubmit}>Submit your Form</Button>
                <Button variant="primary" onClick={back} style={{marginLeft:"4%"}}>Back</Button>
                {submit &&
                    <label>Response Submitted</label>
                }
            </form>
        </div>
    );
}

export default AddLeave;
/*
<Form.Select id="leave" defaultValue="Select the type" onChange={handleChange("leavetype")}>
                        <option value="1">Medical </option>
                        <option value="2">Vacation</option>
                        <option value="3">Emergency</option>
                        <option value="4">Maternity</option>
                        <option value="5">Paternity</option>
                        <option value="6">exams leave</option>
                    </Form.Select>*/