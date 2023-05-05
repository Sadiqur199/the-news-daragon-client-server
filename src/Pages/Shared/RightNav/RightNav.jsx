import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import './RightNav.css'
import UseTitle from '../../../hooks/UseTitle';

const RightNav = () => {
  UseTitle('Login')
  return (
    <div className='mt-4'>
      <h4>Login With</h4>

      <div>
        <Button variant="outline-primary" className='mb-2'> <FaGoogle /> Login With Google</Button>
        <Button variant="outline-secondary"> <FaGithub /> Login With Github</Button>
      </div>
      <div className='mt-3'>
      <h4>Find Us  On</h4>

        <ListGroup as="ul">
          <ListGroup.Item as="li"> <FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item as="li">
          <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item as="li"> <FaInstagram /> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      
      <div  style={{backgroundImage: `url(${bg})` }} className='background-color'>
       <h5 className='text-white text-center header-text'>Create an <br></br> Amazing <br></br> Newspaper</h5>
       <p className='text-center text-white body'>Discover thousands of <br></br> options, easy to <br></br> customize layouts, one- <br></br> click to import demo <br></br> and much more.</p>
       <Button variant="danger" className='LearnMore'>Learn More</Button>
      </div>

    </div>
  );
};

export default RightNav;