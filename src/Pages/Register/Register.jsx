import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handelRegister = (event) =>{
   event.preventDefault()
   const form  = event.target
   const name = form.name.value
   const photo = form.photo.value
   const email = form.email.value
   const password = form.password.value
   console.log(name,photo,email,password)
  }

  return (
    <Container className='mx-auto w-25 mt-5'>
      <h4 className='text-center mb-2'>Please Register Now</h4>
      <Form onSubmit={handelRegister}>
      <Form.Text className="text-success">
            We'll never share your email with anyone else.
          </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Your Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Photo Url" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name='accept' label="Accept Terms And Condition" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className='text-secondary'>
         Already have an account ? <Link to= "/login">Login</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;