import React from 'react';

const SectionArmySize = ({changeData}) => {
  return (
    <div className="section">
            
        <p className="sectionName">Army size:</p>      
        <select name="armySize" defaultValue="100" onChange={changeData}>

            <option value="" hidden>Choose</option>
            <option value="100" >100pts</option>
            <option value="100" >200pts</option>
            <option value="100" >300pts</option>
            <option value="100" >400pts</option>
            <option value="100" >500pts</option>
            <option value="100" >750pts</option>
            <option value="100" >1000pts</option>
            <option value="100" >1250pts</option>
            <option value="100" >1500pts</option>
            <option value="100" >1750pts</option>
            <option value="100" >2000pts</option>
            <option value="100" >2500pts</option>
            <option value="100" >3000pts</option>
            <option value="100" >4000pts</option>
            <option value="100" >5000pts</option>

        </select>
        
    </div>
  )
}

export default SectionArmySize;