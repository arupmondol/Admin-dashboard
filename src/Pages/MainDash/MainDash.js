import { Card } from '@mui/material';
import React from 'react';
import Table from '../Table/Table';
import Card1 from './Card/Card1';
import './MainDash.css'

const MainDash = () => {
  return (
    <div className='MainDash'>
     <h1>Dashboard</h1>
     <Card1></Card1>
     <Table></Table>
    </div>
  );
};

export default MainDash;