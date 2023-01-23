import { color } from '@mui/system';
import React from 'react';
import './SingleData.css'

const SingleData = ({data}) => {
  const {img, name, noti,time}= data
  return (
    <div className='SingleData'>
      <img src={img} alt="" />
      <div>
        <div className='noti'>
          <span className='name-cus bold'>{name}</span>
          <span> {noti}</span>
        </div>
        <div className='time'>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleData;