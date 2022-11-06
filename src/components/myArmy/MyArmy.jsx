import React from 'react';
//import { Link } from 'react-router-dom';
import Fromations from './Formations';
const MyArmy = () => {
  return (
    <div className='myArmy view'>

      <div className="addFormationButton"><p>+🪖</p></div>
      
      <div className="searchArea">
        <input type="text" placeholder='Search...'/>
      </div>
      <Fromations />
    </div>
  )
};

export default MyArmy;