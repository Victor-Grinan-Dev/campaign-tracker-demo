//react
import React from 'react';
import { Link } from 'react-router-dom';

//cookies
import Cookies from 'js-cookie';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, setIsLogged } from '../features/portalSlice';


const SideBar = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.portal.isLogged);
    const user = useSelector(state =>state.portal.currentUser);

    const logout = () => {
      Cookies.remove("portalLog", { path: '/' });
      dispatch(setCurrentUser({}));
      dispatch(setIsLogged(false));
      //dispatch()
   }

  return (
    isLogged && <div className='sidebarContainer'>
        <p></p>
        <Link to="/">🏠</Link>
        <p>❤️</p>{/* support us */}
        <p>🔗</p>{/* share the app */}
        <p>🧮</p>{/* MathHammer app */}
        <p>🎲</p>{/* diceRoller app */} 
        <p>🏈</p>{/* blood bowl app */} 
        <Link to="/profile">👤</Link>
        <Link to="/chat">💬</Link>
        
        {user.type === "admin" && <Link to="/adduser">+👤</Link>}
        {user.type === "admin" && <Link to="/post">✍️</Link>}
        <Link to="/about">📜</Link>
        <Link to="/contact">☎️</Link>
        <Link to="/settings">⚙️</Link>
        <p onClick={logout}>👉🚪</p>
    </div>
  )
}

export default SideBar;