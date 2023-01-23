import React from 'react';
import Updates from './Updates/Updates';
import './Rightside.css'
import CustomerReview from '../CustomerChart/CustomerReview';

const RightSide = () => {
  return (
    <div className='RightSide'>
      <div>
      <h3>Updates</h3>
      <Updates></Updates>
      </div>
      <div>
        <h3>
          Customers Review
        </h3>
      </div>
      <div>
        <CustomerReview></CustomerReview>
      </div>
    </div>
  );
};

export default RightSide;