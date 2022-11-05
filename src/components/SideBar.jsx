import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SideBar = () => {
    const isLogged = useSelector(state => state.portal.isLogged)
  return (
    isLogged && <div className='sidebarContainer'>
        <p></p>
        <Link to="/">🏠</Link>
        <Link to="/profile">👤</Link>
        <p>💬</p>
        <Link to="/createuser">+👤</Link>
        <p>✍️</p>
        <Link to="/about">📜</Link>
        <Link to="/contact">☎️</Link>
        <Link to="/settings">⚙️</Link>
        <p>👉🚪</p>
    </div>
  )
}

export default SideBar;