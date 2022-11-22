import React from 'react';
import FormationCard from './FormationCard';
//test
import  testFormArr  from './dummyArmy';
import { useSelector } from 'react-redux';

const Fromations = () => {

  const addToArmy = (e) => {
     console.log(e.target.name)
  }
  const formations = useSelector(state => state.portal.currentUser.formations);
  console.log(formations)
  return (
    <div className='browseArea'>
      {
        testFormArr.map((f,i) => (
          <FormationCard formation={f} key={i} fn={addToArmy}/>
        )) 

      }
      {formations.length > 0 &&
        formations.map((f,i) => (
          <FormationCard formation={f} key={i} fn={addToArmy}/>
        )) 
      }
    </div>
  )
}

export default Fromations;