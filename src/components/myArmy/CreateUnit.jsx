import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { skills_by_unit_type } from '../../data/skillsByUnitType';
import { capitalStart } from '../../functions/capitalStart';
import { unitsImages } from '../../images/units';

//classes
import { Unit } from '../../classes/unit';
//redux
import { setName, setModels, setPoint_cost, setType } from '../../features/unitSlice';

import { setComposition } from '../../features/formationSlice';

const CreateUnit = () => {
  const dispatch = useDispatch();

  const unit = useSelector(state => state.unit.type);
  const unitName = useSelector(state => state.unit.name);
  const formation = useSelector(state => state.formation.composition);

  const unitDescription = "this unit is good for nothing";
  const unitTypes = [];
 
  for (let unit in skills_by_unit_type){//
    unitTypes.push(skills_by_unit_type[unit].type);
  }
  
  const nameHandler = (e) => {
    dispatch(setName( e.target.value));
  }

  const modelsHandler = (e) => {
    dispatch(setModels( e.target.value));
  }

  const poitCostHandler = (e) => {
    dispatch(setPoint_cost( e.target.value));
  }

  const typeHandler = (e) => {
    dispatch(setType( e.target.value));
  }

  const addUnitHandler = () => {
    const id = formation.length + 1;
    console.log() 
    dispatch(setComposition(new Unit(id, unitName)))
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
                <button onClick={typeHandler} name="type" value={unit}> ➡️ </button>
              </div>
            ))
            }
        </div>

        <div className="theUnit" >

          <div className="iconTheUnit" style={{
                  backgroundImage: `url(${unitsImages[unit]})`
                }}/>

            <div className="inputsUnit">
              <div className='inputLittleSection'><label>Name: </label><input type="text" className='unitNameInput' onChange={nameHandler}/></div>
              <div className='inputLittleSection'>
                <label>Models: </label>
                <input type="number" className='unitInput' onChange={modelsHandler}/>
              </div>
              <div className='inputLittleSection'>
                <label>Point const:</label>
                <input type="number" className='unitInput' onChange={poitCostHandler}/>
              </div>
            </div>
            <p>Type {unit.type}: {unitDescription}</p>
            <button onClick={addUnitHandler}>Add unit to formation</button>
          
        </div>
      </div>
      
    </div>
  )
}

export default CreateUnit;
