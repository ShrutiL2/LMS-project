import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {
    MDBBtn} from 'mdb-react-ui-kit';

const ManagerDetails = () => {

    const navigate=useNavigate();
    const BacktoDash =()=>{
        navigate(`/mandash/${id}`);
    }

    const [emp, setEmp] = useState({
        "empid": 0,
        "empname": "",
        "empemail": "",
        "department": "",
        "empaddress": "",
        "phnumber": "",
        "empusername": "",
        "emppassword": "",
        "leaveinhand": 0,
        "managerid": null,
        "manager": null,
        "inverseManager": [],
        "leaves": []
    })
    //  const [id, setId] = useState(0);
    const { id} = useParams();
     
    useEffect(() => {
        fetch(`http://localhost:23040/api/Employees/${id}`)
            .then(res => res.json())
            .then(res => {
                setEmp(res);
            })
            .catch(err => console.log(err));

        
     }, [])

    return (

        
        <div className="card" style={{
        marginTop: "150px",
        marginLeft: 450,
        marginRight: 450,
        backgroundColor:"darkgrey",
        height: "360px"

        }}   >
        <div className="card-header" style={{backgroundColor:"darkgrey"}}><h3>Employee Details</h3></div>
        <div className="card-body" style={{backgroundColor:"#eeeeee"}}>
            <div >
            <table striped bordered hover style={{marginTop:"3px"}}>

                <tr className="fs-4">
                <td style={{paddingLeft:"50px"}}>Name: </td>
                <td style={{ textAlign:"center" , paddingLeft:"120px"}}>{emp.empname}</td>
                </tr>
                
                <tr  className="fs-4">
                <td style={{paddingLeft:"50px"}} >Email:</td>
                <td style={{ textAlign:"center", paddingLeft:"120px"}}>{emp.empemail}</td>
                </tr>
                <tr className="fs-4" >
                <td style={{paddingLeft:"50px"}}>Department:</td>
                <td style={{ textAlign:"center" , paddingLeft:"120px"}}>{emp.department}</td>
                </tr>
                <tr className="fs-4">
                <td style={{paddingLeft:"50px"}}>Address: </td>
                <td style={{ textAlign:"center" , paddingLeft:"120px"}}>{emp.empaddress}</td>
                </tr>
                <tr className="fs-4">
                <td style={{paddingLeft:"50px"}}>Phone Number: </td>
                <td style={{ textAlign:"center" , paddingLeft:"120px"}}>{emp.phnumber}</td>
                </tr>
            </table>
            </div>
            <div style={{paddingTop:"10px"}}>
            
            <MDBBtn className="mb-4 px-6" color='dark' size='md'  style={{marginLeft: "210px"}} onClick={BacktoDash} >Back To Dashboard</MDBBtn>
            
            </div>
        </div>
        
       
        </div>
        );
}



export default ManagerDetails;