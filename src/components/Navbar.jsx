import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../assets/app_company_logo/favicon.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const isLogged = useSelector(state => state.portal.isLogged)
  return (
    isLogged && <div className='navBarContainer'>
        <Link to="/"><img src={logo} alt="logo" className='navBarLogo'/></Link>
        <Link to="/warroom" >WarRoom</Link>
        <div>My Army</div>
        <div></div>
    </div>
  )
}

export default Navbar;