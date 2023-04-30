import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavegationBar = () => {

  const {user} = useContext(AuthContext)


  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Link to="/">Home</Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {
                user &&
                <Nav.Link href="#deets" className='mt-1'><FaUserCircle style={{ fontSize: '2rem' }} />
                </Nav.Link>
              }
                {
                  user ?
                    <Button variant="dark">Log Out</Button>
                    :
                    <Link to='/login'><Button variant="dark">Login</Button></Link>
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavegationBar;