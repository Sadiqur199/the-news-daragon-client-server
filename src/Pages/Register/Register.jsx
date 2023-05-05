import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import UseTitle from '../../hooks/UseTitle';

const Register = () => {
 UseTitle('Register')
  const {createUser} = useContext(AuthContext)
  const [accepted , setAccepted] = useState(false)

  const handelaccepted = (event) =>{
      setAccepted(event.target.checked)

  }

  const handelRegister = (event) =>{
   event.preventDefault()
   const form  = event.target
   const name = form.name.value
   const photo = form.photo.value
   const email = form.email.value
   const password = form.password.value
   console.log(name,photo,email,password)
   
   createUser(email,password)
   .then(result=>{
    const createUser = result.user
    console.log(createUser)
   })
   .catch(error=>{
    console.log(error.message)
   })
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
          <Form.Check 
          onClick={handelaccepted}
          type="checkbox" 
          name='accept' 
          label={<>Accept <Link to = "/terms">Terms And Condition</Link></>} />
        </Form.Group>
        <Button disabled={!accepted} variant="primary" type="submit">
          Register
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