import React from 'react';
import { CardsData } from '../../../Data/Data';
import SingleCard from './SingleCard/SingleCard';
import './Card1.css';

const Card1= () => {
  return (
    <div className='Card1'>
      {
        CardsData.map(data => <SingleCard data={data}></SingleCard>)
      }
    </div>
  );
};

export default Card1;