import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//redux
import { setCurrentUser } from '../../features/portalSlice';

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => {
        console.log(state.portal.currentUser)
        return state.portal.currentUser})
  return (
    <div>Home</div>
  )
}

export default Home;