import React from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../../hooks/UseTitle';

const TermsCondition = () => {
  UseTitle('Terms&Condition')
  return (
    <div className='border mx-auto container mt-5'>
      <h4>Terms & Condition</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate aspernatur id reiciendis voluptatibus ea alias porro accusamus, minima harum iure debitis perferendis qui ducimus ullam illo, maxime, sunt quo nisi!</p>
      
      <p>Go Back To <Link to="/register">Register</Link></p>
    </div>
  );
};

export default TermsCondition;