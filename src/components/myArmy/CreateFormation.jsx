import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formation } from '../../classes/formation';
import { setFormationObj } from '../../features/formationSlice';
import CreateUnit from './CreateUnit';
import FormationCard from './FormationCard';

const CreateFormation = () => {

  const nameFormation = useSelector(state => state.formation.name)
  const composition = useSelector(state => state.formation.composition);
  const creatingFormation = useSelector(state => state.formation.formationObj);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFormationObj(new Formation("-", [ ])))
  }, []);

  useEffect(() => {
    const newFormation = new Formation(nameFormation, composition);
    dispatch(setFormationObj(newFormation));
  }, [composition]);

  const updateFormation = (e) => {
    dispatch(setFormationObj({...creatingFormation, [e.target.name]: e.target.value}))
  }
  
  return (
    <div className='create-formation view'>
        <h3>Create Formation: {/* creatingFormation.name === '-' ? 'Name...?' : creatingFormation.name */}</h3>

        <div className="FormationPart">
            
            <div className="namingSection" style={{overflow:'scroll'}}>
              <div>
                <button>Add</button>
                  <input type="text" className='unitNameInput' name='name' placeholder={creatingFormation.name === '-' ? 'Name...' : creatingFormation.name} onChange={updateFormation}/>
                  <select name="faction">
                    <option value="" hidden></option>
                  </select>
              </div>
              <div className="sideData">
                <div className="keys">
                  <p className='createFormInfoAtrr'>🕴Model count:</p>
                  <p className='createFormInfoAtrr'>🪖Infantry count:</p>
                </div>
                <div className="values">
                  <p className='createFormInfoAtrr'>{creatingFormation.model_count}</p>
                  <p className='createFormInfoAtrr'>{creatingFormation.infantry_count}</p>
                </div>
              </div>

              {/*
              <div className="sideData">
                <div className="keys">
                <p className='createFormInfoAtrr'>⚒️work force</p>
                <p className='createFormInfoAtrr'>👀vision</p>
                <p className='createFormInfoAtrr'>🧠intelligence</p>
                <p className='createFormInfoAtrr'>🎒carry capacity</p>
                
                </div>
                <div className="values">
                <p className='createFormInfoAtrr'>{creatingFormation.work_force}</p>
                <p className='createFormInfoAtrr'>{creatingFormation.vision}</p>
                <p className='createFormInfoAtrr'>{creatingFormation.intelligence}</p>
                <p className='createFormInfoAtrr'>{creatingFormation.carry_capacity}</p>
                </div>
              </div>
              */}

                {/* 
                ⚔️🥾🗡️🎯💥☠️🛡️🔭🎓📚📈🧮🏴󠁧󠁢󠁥󠁮󠁧󠁿🚩📊🎁🏅
                faction(pin):""
                color(pin):"white"

                subfaction(pin):""
                subColor(pin):"white"

                is_listed(pin):false

                s_description(pin):""
                l_description(pin):""
                */}
            </div>

            <FormationCard formation={creatingFormation}/>
        </div>
        
        <CreateUnit />
    </div>
  )
}

export default CreateFormation;