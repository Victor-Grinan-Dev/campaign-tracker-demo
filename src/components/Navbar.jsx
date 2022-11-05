import React from 'react';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const isLogged = useSelector(state => state.portal.isLogged)
  return (
    isLogged && <div className='navBarContainer'>
        <div>logo</div>
        <div>Campaigns</div>
        <div>My Army</div>
    </div>
  )
}

export default Navbar;