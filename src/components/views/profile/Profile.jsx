import React from 'react';
import { useSelector } from 'react-redux';
import { avatars } from '../../../i_mages/avatars';

const Profile = () => {
    const user = useSelector(state => state.portal.currentUser);
    const avatar = avatars[user.avatar];
  return (
    <div className='profile view'>
        <div className="userDatasection" ><img className="avatar" src={avatar} alt="avatar" /> <button>✏️</button></div>
        <div className="userDatasection" ><p>Username: {user.username}</p><button>✏️</button></div>
        <div className="userDatasection" ><p>User type: {user.type}</p><button>✏️</button></div>
        <div className="userDatasection" ><p>Player level: {user.level}</p><button>✏️</button></div>
        <div className="userDatasection" ><p>Rank: {user.rank}</p><button>✏️</button></div>
        <div className="userDatasection" ><p>Badges earned: {user.badges.length}</p><button>✏️</button></div>
        <div className="userDatasection" ><p>battles: {user.battles}</p><button>✏️</button></div>
        <div className="userDatasection" ><p>winRate: {user.winRate}</p><button>✏️</button></div>
        <div className="userDatasection" ><p>formations: {user.formations.length}</p><button>✏️</button></div>
        <div className="userDatasection" ><p>armyList: {user.armyList.point_cost}</p><button>✏️</button></div>
        <div className="userDatasection" ><p>email: {user.email}</p><button>✏️</button></div>
        <div className="userDatasection" ><p>Password</p> <button>✏️</button></div>
    </div>
  )
}

export default Profile;

/*
        <select name="changeAvatar" >
            {
                user.avatars.map((avatar, i) => (
                    <option key={i} value="avatar">{avatar}</option>
                ))
            }
        </select>
*/