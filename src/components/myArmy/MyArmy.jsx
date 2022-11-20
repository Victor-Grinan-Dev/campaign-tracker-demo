import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Formations from './Formations';
const MyArmy = () => {
  const robotSay = useSelector(state=>state.portal.robotSay)
  return (
    <div className='myArmy view'>
      
      <div className="panel">
        <div className="showSelected"> 🪖✅</div>
        <div className="addFormationButton"><Link to="/createformation">+🪖</Link></div>

        <div className="searchArea">
          {
            /* robotSay ? <p>🤖: {robotSay}</p> :  */<input type="text" placeholder='Search...' className='searchInput'/>
          }
          
        </div>
        
      </div>
      <Formations />
    </div>
  )
};

export default MyArmy;