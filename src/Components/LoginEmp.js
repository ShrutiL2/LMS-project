import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
  import {useNavigate} from 'react-router-dom';


  
  function LoginEmp() {

    const [id, setId]=useState(0);
   
    const navigate=useNavigate();
    
    const LoginPage=()=>
    {
      
    navigate(`/empdash/${id}`);
    }
   

    const handleChange=(event )=>{
      setId(event.target.value);
      
    }
    

    return (
      <MDBContainer className="my-5">
  
        <MDBCard style={{backgroundColor:"rgb(194 194 194)"}}>
          <MDBRow className='g-0' >
  
          <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>
  
            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column' >
  
                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                  <span className="h1 fw-bold mb-0">Employee Login</span>
                </div>
  
                <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
  
                  <MDBInput onChange={handleChange} wrapperClass='mb-4' label='Employee Id' id='formControlLg' type='number' size="lg" />
                  
  
                <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={LoginPage}>Login</MDBBtn>
                
                <div className='d-flex flex-row justify-content-start'>
                  <a href="/" className="small text-muted me-1"><b>Back to home</b></a>
                  
                </div>
  
              </MDBCardBody>
            </MDBCol>
  
          </MDBRow>
        </MDBCard>
  
      </MDBContainer>
    );
  }
  
  export default LoginEmp;