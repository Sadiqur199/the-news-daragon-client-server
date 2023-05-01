import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(location)
  if (loading) {
    return (
      <div className='text-center'>
        <Button variant="primary" >
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>

    )
  }

  if (user) {
    return children
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;

/**
 * --------------
    STEPS
 * --------------
    1.checked user logged or not
    2.if user login then the visit the route 
    3.else redirect the login the user page
    4.setup the private router
 */