import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const LeaveStatus = () => {

    const navigate=useNavigate();
    const {id} = useParams();
    const back =()=>{
        navigate(`/empdash/${id}`);
    }

    const [leave, setLeave] = useState(
        []
        /*"leaveid": 0,
        "empid": 0,
        "manid": 0,
        "leavefrom": null,
        "leaveto": null,
        "noofdays": 0,
        "leavestatus": "pending",
        "leavetype": "",
        "emp": null*/
        //"leaves": null
    )
    
    
     
    useEffect(() => {
        fetch(`http://localhost:23040/api/Leaves/byempid/${id}`)
        .then(res=> res.json())
            .then(res => {
                setLeave(res);
            })
            .catch(err => console.log(err));
            //alert(leave.leavestatus);
            console.log(leave.leavestatus);

        
     }, [])

     return (
         <div>
<div style={{
              display: 'block',
              width: 1200,
              padding: 30, margin:'auto',
              marginTop:"3%"
              
              
          }}>
              <h2 style={{textAlign:"center"}}>Leave Status</h2>
              <br/>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th scope="col">Leave Id:</th>
                        <th scope="col">Leave Type</th>
                        
                        <th scope="col">Leave Status</th>


                    </tr>
                </thead>
                <tbody>
                {leave.map(e => (
                        <tr key={e.leaveid}>
                    
                            <td>{e.leaveid}</td>
                            <td>{e.leavetype}</td>
                            
                            <td>{e.leavestatus}</td>
                    </tr>   
                ))}     
                </tbody>
            </table>
            </div>
            <Button variant="primary" onClick={back} style={{marginLeft:"43%", marginTop:"5%", width:"10%"}}>Back</Button>
         </div>
     );
    }

    export default LeaveStatus;