import React from 'react';
import './MenuItem.css'

const MenuItem = ({data}) => {
 
  const {icon,heading} =data
  return (
    <div className='menuItem active' >
      {icon}
      <span>{heading}</span>
    </div>
  );
};

export default MenuItem;