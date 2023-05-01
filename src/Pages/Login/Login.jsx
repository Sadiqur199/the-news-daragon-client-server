import React, { useContext } from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const {loggedUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  console.log('login page location',location)
  const from = location.state?.from?.pathname || '/category/0'

  const handelSingIn = event =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    loggedUser(email, password)
    .then(result=>{
      const login = result.user
      console.log(login)
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log(error.message)
    })
  } 

  return (
    <Container className='mx-auto w-25 mt-5'>
      <h4 className='text-center mb-2'>Please Login Here</h4>
      <Form onSubmit={handelSingIn}>
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