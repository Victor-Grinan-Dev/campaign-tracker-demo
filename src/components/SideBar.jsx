import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SideBar = () => {
    const isLogged = useSelector(state => state.portal.isLogged);
    const user = useSelector(state =>state.portal.currentUser);

  return (
    isLogged && <div className='sidebarContainer'>
        <p></p>
        <Link to="/">🏠</Link>
        <Link to="/profile">👤</Link>
        <p>💬</p>
        {user.type === "admin" && <Link to="/adduser">+👤</Link>}
        {user.type === "admin" && <Link to="/post">✍️</Link>}

        <Link to="/about">📜</Link>
        <Link to="/contact">☎️</Link>
        <Link to="/settings">⚙️</Link>
        <p>👉🚪</p>
    </div>
  )
}

export default SideBar;