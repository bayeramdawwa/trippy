import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbarcompo.css'
import { Link } from "react-router-dom";
function Navbarcompo() {
  return (
    <Navbar bg="light" expand="lg" className='d-flex nav1'>
      <Container>
        <Navbar.Brand className='brand'>Trippy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav w-auto " className='flex-grow-0'>
          <Nav className="me-auto  ">
            <Link className='NAVLINK'  to = "/home">
            <i class='fas fa-home'></i>
            Home
              </Link>
            <Link  className='NAVLINK' to = "/About">
            <i class='fas fa-info-circle'></i>
              About
              </Link>
            <Link  className='NAVLINK' to = "/Service">
            <i class='fas fa-shopping-bag'></i>
              Service
              </Link>
            <Link  className='NAVLINK' to = "/Contact">
            <i class='fas fa-address-book'></i>
              Contact US
              </Link>
            
          </Nav>
          
            
            <Link   className='NAVLINK2' to = "/SingUp">Sing UP</Link>
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcompo;