import React from 'react';
import FormationCard from './FormationCard';
//test
import { testForm } from './dummyArmy';

const Fromations = () => {
  return (
    <div className='browseArea'>
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
    </div>
  )
}

export default Fromations;