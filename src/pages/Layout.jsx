import React from 'react';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

function Layout() {
  return (
    <div className='layoutContainer'>
        <div className="rigthBlock">
            <Navbar />
            <Main/>
        </div>
        
       <SideBar/>
    </div>
  )
}

export default Layout;
