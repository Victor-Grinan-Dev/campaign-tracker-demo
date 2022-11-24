import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../assets/app_company_logo/favicon.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const robotSay = useSelector(state=>state.portal.robotSay)
    const isLogged = useSelector(state => state.portal.isLogged)
  return (
    isLogged && <div>
      <div className='navBarContainer'>
        <Link to="/"><img src={logo} alt="logo" className='navBarLogo'/></Link>
        <Link to="/warroom" >WarRoom</Link>
        <Link to="/myarmy" >My Army</Link>
        <div></div>
    </div>
    <p style={{
      fontSize:"12px",
      marginTop:0,
    }}>🤖: {robotSay}</p>
    </div>


  )
}

export default Navbar;