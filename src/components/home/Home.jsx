import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//redux
import { setCurrentUser } from '../../features/portalSlice';

//functions
import { capitalStart } from '../../functions/capitalStart';

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => {
        return state.portal.currentUser});

  return (
    <div>Welcome Home {capitalStart(user)}</div>
  )
}

export default Home;