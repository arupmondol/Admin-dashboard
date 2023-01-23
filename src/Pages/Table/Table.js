import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(name, trackingId,date,status) {
  return { name, trackingId,date,status };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 'Approve', 4.0),
  createData('Ice cream ', 237, 9.0, 'Not Approve', 4.3),
  createData('Fries', 262, 16.0, 'Approve', 6.0),
  createData('Cupcake', 305, 3, 'Decline', 4.3),
  
];

const makeStyles =(status) =>{
  if(status =='Approve')
  {
    return{
    background:'rgb(145 254 159 / 47%)',
    color:'green'
    }
  }
 else if(status =='Not Approve')
  {
    return{
    background:'#ffadad8f',
    color:'red'
    }
  }
  else 
  {
    return{
    background:'#59bfff',
    color:'white'
    }
  }
  
}

export default function BasicTable() {
  return (
  <div>
   <h2>Recent Orders</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className='details'>Unabelavle</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
