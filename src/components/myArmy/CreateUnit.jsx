import React, { useEffect } from 'react';
import { skills_by_unit_type } from '../../data/skillsByUnitType';
import { capitalStart } from '../../functions/capitalStart';
import { unitsImages } from '../../images/units';

const CreateUnit = () => {

  const unitTypes = [];
 
  for (let unit in skills_by_unit_type){//
    unitTypes.push(skills_by_unit_type[unit].type);
  }

  const currentUnit = "infantry";
  

  return (
    <div>
      <h3>create unit:</h3>

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
                <button> + </button>
              </div>
            ))
            }
        </div>

        <div className="theUnit" >

          <div className="iconTheUnit" style={{
                  backgroundImage: `url(${unitsImages[currentUnit]})`
                }}/>
            <p>Type {currentUnit}: Can build and claim tiles. high defence vs tanks.</p>

            <div className="inputsUnit">
              <div className='inputLittleSection'><label>Name: </label><input type="text" className='unitNameInput'/></div>
              <div className='inputLittleSection'><label>Models: </label><input type="number" className='unitInput'/></div>
              <div className='inputLittleSection'><label>Point const:</label><input type="number" className='unitInput'/></div>
            </div>
            <button>Add to formation</button>
          
        </div>
      </div>
      
    </div>
  )
}

export default CreateUnit;

/*
<button key={i} 
            style={{ 
              margin:"5px",
              backgroundColor:"grey",
              ,
              
            }} > { unit.split("_").join(" ") } </button>
*/