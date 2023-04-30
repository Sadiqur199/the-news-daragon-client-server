import React from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container className='mx-auto w-25 mt-5'>
      <h4 className='text-center mb-2'>Please Login Here</h4>
      <Form>
      <Form.Text className="text-success">
            We'll never share your email with anyone else.
          </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
          <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className='text-secondary'>
          Don't have an account ? <Link to= "/register">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;