//react
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

//cookies
import Cookies from 'js-cookie';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, setIsLogged } from '../features/portalSlice';


const SideBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogged = useSelector(state => state.portal.isLogged);
    const user = useSelector(state =>state.portal.currentUser);

    const logout = () => {
      navigate("/")
      Cookies.remove("portalLog", { path: '/' });
      
      dispatch(setCurrentUser({}));
      dispatch(setIsLogged(false));
      //dispatch()
   }

  return (
    isLogged && <div className='sidebarContainer'>
        <p></p>
        <Link to="/">🏠</Link>
        <Link to="/showlove">❤️</Link>
        {/* share the app  <p>🔗</p> */}
        <a href="https://github.com/Victor-Grinan-Dev/MathHammer">🧮</a>{/* MathHammer app */}
        <a href="https://victor-grinan-dev.github.io/diceRoller/">🎲</a>
        <a href="https://victor-grinan-dev.github.io/blood_bowl_turn_timer/">🏈</a>
        {/* https://github.com/Victor-Grinan-Dev/chess */}
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