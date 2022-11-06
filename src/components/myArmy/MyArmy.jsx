import React from 'react';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Formations from './Formations';
const MyArmy = () => {
  return (
    <div className='myArmy view'>

      <div className="panel">

        <div className="addFormationButton"><Link to="/createformation">+🪖</Link></div>

        <div className="searchArea">
          <input type="text" placeholder='Search...'/>
        </div>
        
      </div>
      


      <Formations />
    </div>
  )
};

export default MyArmy;