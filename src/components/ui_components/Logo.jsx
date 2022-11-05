import React from 'react';
import logo from '../../assets/app_company_logo/favicon.png';

const Logo = () => {
  return (
    <div className='companyLogo'>

    <div className="App-logo"
        style={{
          backgroundImage:`url(${logo})`,
        }}> 
    </div>

    <div>
        <p>Powered by <mark className="initialA">H</mark>exes <mark className="initialA">O</mark>n <mark className="initialA">T</mark>he <mark className="initialB">W</mark>eb™</p> 
    </div>
   
    
    </div>
  )
}

export default Logo;