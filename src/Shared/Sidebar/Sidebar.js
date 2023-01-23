import React from 'react';
import './Sidebar.css'
import Logo from '../../../src/imgs/logo.png'
import { SidebarData } from '../../Data/Data';
import MenuItem from './MenuItem';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
     <div className='logo'>
      <img src={Logo} alt="" />
      <span>
        ROYAL <span>JS</span>
      </span>

     </div>
    {/*logo end */}

    <div className="menu">
      {
      SidebarData.map(data => <MenuItem data={data}></MenuItem>)
      }

      
    </div>
    </div>
  );
};

export default Sidebar;