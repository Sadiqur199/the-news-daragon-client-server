import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const {id} =useParams()
  return (
    <div>
      <h5>This is Category folder:{id}</h5>
    </div>
  );
};

export default Category;