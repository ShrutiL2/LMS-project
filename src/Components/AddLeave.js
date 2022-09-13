import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {useNavigate,useParams} from 'react-router-dom';


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
                    <select id="leavetype" onChange={handleChange("leavetype")}>
                        <option value="Medical">Medical </option>
                        <option value="Vacation">Vacation</option>
                        <option value="Emergency">Emergency</option>
                        <option value="Maternity">Maternity</option>
                        <option value="Paternity">Paternity</option>
                        <option value="Exam ">exams leave</option>
                    </select>
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
*/

                   /* <Form.Control type="number"
                         id="leavetype" onChange={handleChange("leavetype")} />*/
                    
               