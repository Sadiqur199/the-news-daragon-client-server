import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUser, FaUserCircle } from 'react-icons/fa';


const Header = () => {
 
   const {user} = useContext(AuthContext)
   
  return (
    <Container className='mt-4'>
      <div className="text-center">
        <img src={logo} alt="" />
        <p><small className='text-secondary'>Journalism Without Fear or Favour</small></p>
        <p>{moment().format("dddd, MMMM D ,YYYY")}</p>
      </div>

      <div className='d-flex mb-3 bg-secondary p-3'>
        <Button variant="danger">Latest</Button>
        <Marquee speed={70} className='text-white'>
          I can be a React component, multiple React components, or just some text....
          I can be a React component, multiple React components, or just some text....
          I can be a React component, multiple React components, or just some text....
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {
                user &&
                <Nav.Link href="#deets" className='mt-1'><FaUserCircle style={{fontSize: '2rem'}}/>
                </Nav.Link>
              }
              <Nav.Link eventKey={2} href="#memes">
              {
                user ?
                <Button variant="dark">Log Out</Button>
                :
                <Link to ='/login'><Button variant="dark">Login</Button></Link>
              }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Container>
  );
};

export default Header;