import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { skills_by_unit_type } from '../../data/skillsByUnitType';
import { capitalStart } from '../../functions/capitalStart';
import { unitsImages } from '../../images/units';

//classes
import { Unit } from '../../classes/unit';
//redux
import { setName, setModels, setPoint_cost, setType } from '../../features/unitSlice';

import { setComposition, setFormationObj } from '../../features/formationSlice';

const CreateUnit = () => {
  const dispatch = useDispatch();

  const type = useSelector(state => state.unit.type);
  const unitName = useSelector(state => state.unit.name);
  const composition = useSelector(state => state.formation.composition);

  const unitDescription = "this unit is good for nothing";
  const unitTypes = [];
 
  const pointCost = useSelector(state => state.unit.point_cost);
  const models = useSelector(state => state.unit.models);


  for (let unit in skills_by_unit_type){//
    unitTypes.push(skills_by_unit_type[unit].type);
  }
  
  const nameHandler = (e) => {
    dispatch(setName( e.target.value));
  }

  const modelsHandler = (e) => {
    dispatch(setModels( parseInt(e.target.value, 10)));
  }

  const poitCostHandler = (e) => {
    dispatch(setPoint_cost( parseInt(e.target.value, 10)));
  }

  const typeHandler = (e) => {
    dispatch(setType( e.target.value));
  }

  const addUnitHandler = () => {
    if(composition.length < 9){
      const id = composition.length + 1;
      dispatch(setComposition([...composition, new Unit(id, unitName, models, pointCost, skills_by_unit_type[type])]));
    }
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
                  backgroundImage: `url(${unitsImages[type]})`
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
            <p>Type {type.type}: {unitDescription}</p>
            <button onClick={addUnitHandler}>Add unit to formation</button>
          
        </div>
      </div>
      
    </div>
  )
}

export default CreateUnit;
