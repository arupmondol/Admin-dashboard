import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CompactCard.css'

const CompactCard = ({data, setExpended}) => {
  const {title, color,barValue,value,Png,series} = data
  return (
    <div className='CompactCard'
    style={{
      background :color.backGround,
      boxShadow:color.boxShadow
    }}
     onClick={setExpended}
    >
      
      <div className='radialBar'>
      
       <CircularProgressbar value={barValue}
       text={`${barValue}%`}
       ></CircularProgressbar>
       <span>{title}</span>
      </div>
      

      <div className="details">
        <div className='png'>
      <Png></Png>
      </div>
      <div className='value'>
      <span >{value}</span>
      </div>
     <div className='value2'>
      <span>Last 24hr</span>
      </div>
      </div>
    </div>
  );
};

export default CompactCard;