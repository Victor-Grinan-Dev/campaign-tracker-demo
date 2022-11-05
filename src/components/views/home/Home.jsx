import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//components:
import Gates from '../../ui_components/Gates';

//functions
import { capitalStart } from '../../../functions/capitalStart';


const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => {
        return state.portal.currentUser});

  return (
    
    <div>
      <div className="userWelcome view">
        <Gates />
        <p>Welcome Home {capitalStart(user.username)}</p>
      </div>
      <div className="newsletteer">

      </div>

    </div>
  )
}

export default Home;