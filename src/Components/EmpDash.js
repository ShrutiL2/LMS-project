import react from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate,useParams} from 'react-router-dom';

export default function EmpDash(){

  const {id}=useParams();
  const navigate= useNavigate();
  const goToApply =()=>
  {
    navigate(`/addleave/${id}`);
  }
  const viewDetails =()=>{
    navigate(`/employee/details/${id}`);
  }
  const viewStatus  =()=>{
    navigate(`/leavestatus/${id}`);
  }


    return(
        <div className="h1 fw-bold mb-0" style={{marginTop:"5%"}}>
            <h1 style={{textAlign:"center"}}>Employee Dashboard</h1>
            <h5 style={{textAlign:"center"}}>Employee View </h5>
            <a href="/emplogin" style={{textAlign:"center"}}><h5>LogOut</h5></a>
        <div style={{marginTop:"7vw"}}>
        <Container>
    <Row>
        <Col sm={4}>
    <Card style={{background:"#dfdede", border:"1px solid rgb(0,0,0)"}}>
      <Card.Body>
        <Card.Text>
            <h1>View Profile</h1>
            <h5>Check your profile</h5>
        </Card.Text>
        <Button variant="primary"style={{marginTop:"30px"}} onClick={viewDetails}>View</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={4}>
    <Card style={{background:"#dfdede", border:"1px solid rgb(0,0,0)"}}>
      <Card.Body>
      <Card.Text>
            <h1> Leave Status</h1>
            <h5>Check if your leave is approved</h5>
        </Card.Text>
        <Button variant="primary" style={{marginTop:"30px"}} onClick={viewStatus}>Check</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col sm={4}>
    <Card style={{background:"#dfdede", border:"1px solid rgb(0,0,0)"}}>
      <Card.Body>
      <Card.Text>
            <h1>Apply for Leave</h1>
            <h5>Insert new leave in system</h5>
        </Card.Text>
        <Button variant="primary" style={{marginTop:"30px"}} onClick={goToApply}>Apply</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>   
</div>
    );
}