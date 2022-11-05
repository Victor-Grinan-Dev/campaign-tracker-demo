import React from 'react';
import { useSelector } from 'react-redux';
const SideBar = () => {
    const isLogged = useSelector(state => state.portal.isLogged)
  return (
    isLogged && <div className='sidebarContainer'>
        <p></p>
        <p>icon1</p>
        <p>icon1</p>
        <p>icon1</p>
        <p>icon1</p>
    </div>
  )
}

export default SideBar;