import React from 'react';
import logo from '../../assets/app_company_logo/favicon.png';

const Logo = () => {
  return (
    <div className="App-logo"
        style={{
          backgroundImage:`url(${logo})`,
        }}> 
    </div>
  )
}

export default Logo;