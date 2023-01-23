import React from 'react';
import { UpdaatesData } from '../../../Data/Data';
import SingleData from './SingleData';
import './Updates.css'

const Updates = () => {
  return (
    <div className='Updates'>
      {
        UpdaatesData.map(data => <SingleData data={data}></SingleData>)
      }
    </div>
  );
};

export default Updates;