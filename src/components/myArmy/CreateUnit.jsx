import React, { useEffect, useState } from 'react';
import { skills_by_unit_type } from '../../data/skillsByUnitType';
import { capitalStart } from '../../functions/capitalStart';
import { unitsImages } from '../../images/units';

const CreateUnit = () => {
  const [currentUnit, setCurrentUnit] = useState('infantry');
  const [unitName, setUnitName] = useState('infantry');
 
  const unitTypes = [];
 
  for (let unit in skills_by_unit_type){//
    unitTypes.push(skills_by_unit_type[unit].type);
  }
  
  const addHandler = (e) => {
    console.log(e.target.name)
    setCurrentUnit(e.target.name)
  }

  return (
    <div>
      <h3>Add unit:</h3>

      <div className="panelCreateUnit">

        <div className="units">
          {
            unitTypes.map((unit,i) => (
              <div key={i} className="unitArea">
                <div className="icon" 
                style={{
                  backgroundImage: `url(${unitsImages[unit]})`,
                }}
                />
                <label style={{fontSize:"8px"}}> { capitalStart(unit.split("_").join(" ")) } </label>
                <button onClick={addHandler} name={unit}> select </button>
              </div>
            ))
            }
        </div>

        <div className="theUnit" >

          <div className="iconTheUnit" style={{
                  backgroundImage: `url(${unitsImages[currentUnit]})`
                }}/>

            <div className="inputsUnit">
              <div className='inputLittleSection'><label>Name: </label><input type="text" className='unitNameInput'/></div>
              <div className='inputLittleSection'><label>Models: </label><input type="number" className='unitInput'/></div>
              <div className='inputLittleSection'><label>Point const:</label><input type="number" className='unitInput'/></div>
            </div>
            <p>Type {currentUnit}: Can build and claim tiles. high defence vs tanks.</p>
            <button>Add unit to formation</button>
          
        </div>
      </div>
      
    </div>
  )
}

export default CreateUnit;
