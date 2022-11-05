import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../assets/app_company_logo/favicon.png';

const Navbar = () => {
    const isLogged = useSelector(state => state.portal.isLogged)
  return (
    isLogged && <div className='navBarContainer'>
        <img src={logo} alt="logo" className='navBarLogo'/>
        <div>Campaigns</div>
        <div>My Army</div>
    </div>
  )
}

export default Navbar;