import React from 'react';
import FormationCard from './FormationCard';
//test
import  testForm  from './dummyArmy';
import { useSelector } from 'react-redux';

const Fromations = () => {
  const formations = useSelector(state => state.portal.currentUser.formations);
  console.log(formations)
  return (
    <div className='browseArea'>
      {
        formations.map((f,i) => (
          <FormationCard formation={f} key={i} />
        ))
      }
      {/*
      <FormationCard formation={testForm}/>
      <FormationCard formation={testForm}/>
      <FormationCard formation={testForm}/>
      <FormationCard formation={testForm}/>
      <FormationCard formation={testForm}/>
      <FormationCard formation={testForm}/>
      <FormationCard formation={testForm}/>
      <FormationCard formation={testForm}/>
      <FormationCard formation={testForm}/>
      <FormationCard formation={testForm}/>
      <FormationCard formation={testForm}/>
      <FormationCard formation={testForm}/>
      */}
    </div>
  )
}

export default Fromations;