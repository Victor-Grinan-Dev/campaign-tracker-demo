import React from 'react';
import WarRoom from '../components/warRoom/WarRoom';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';

const atWarRoom = false;

function Layout() {

  if (atWarRoom){
    return (
      <div className='layoutContainer'>
          <div className="rigthBlock">
              <Navbar />
              <Main width={100}/>
          </div>
      </div>
    )
  }

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
