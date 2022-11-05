import React from 'react';
import { useSelector } from 'react-redux';
import { capitalStart } from '../../functions/capitalStart';

const UserData = () => {
    const user = useSelector(state => state.portal.currentUser);

  return (
    <div className="userData">
        <img className="avatar" src="" alt="avatar" />
        <p>{capitalStart(user.type)} {capitalStart(user.username)} Lvl{user.level}</p>
    </div>
  )
}

export default UserData;