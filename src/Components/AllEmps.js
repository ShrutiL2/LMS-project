import { React, useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


const AllEmp = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    /*const navigate= useNavigate();
    const Details = ()=>{
        navigate('');
    }*/


    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:23040/api/Employees")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

            
    }, [])



    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div style={{
                display: 'block',
                width: 1200,
                padding: 30, margin:'auto'
                
                
            }}>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Address</th>
                            <th>Phone number</th>
                            <th>Username</th>
                            <th>Leave In Hand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (


                            <tr>
                                <td>
                                    {item.empid}
                                </td>
                                <td>
                                    {item.empname}
                                </td>
                                <td>

                                    {item.empemail}
                                </td>
                                <td>
                                    {item.department}
                                </td>
                                <td>
                                    {item.empaddress}
                                </td>
                                <td>

                                    {item.phnumber}
                                </td>
                                <td>
                                    {item.empusername}
                                </td>
                                
                                <td>

                                    {item.leaveinhand}
                                </td>

                                <td>
                                    <Button variant="info" >Details</Button>
                                </td>
                            
                            </tr>

                        ))}
                    </tbody>

                </Table>
            </div>
        );
    }
};

export default AllEmp;

