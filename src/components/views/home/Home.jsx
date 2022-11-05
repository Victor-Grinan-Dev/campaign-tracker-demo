import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//redux
import { setCurrentUser } from '../../../features/portalSlice';

//functions
import { capitalStart } from '../../../functions/capitalStart';

//images
const visitor = "https://source.unsplash.com/R_6kw7NUTLY";
const admin = "https://source.unsplash.com/BoISbSP0HVk";
const user = "https://source.unsplash.com/1vC4ZwkJNdA";

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => {
        return state.portal.currentUser});

  return (
    <div>Welcome Home {capitalStart(user)}</div>
  )
}

export default Home;