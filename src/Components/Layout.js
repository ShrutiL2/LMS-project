import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Hexaware Leave Management System</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/"> Home</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
            
                       

            <Outlet />
        </>
    )
}

export default Layout;
