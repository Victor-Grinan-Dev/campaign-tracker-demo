import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SideBar = () => {
    const isLogged = useSelector(state => state.portal.isLogged)
  return (
    isLogged && <div className='sidebarContainer'>
        <p></p>
        <Link to="/profile">👤</Link>

        <p>📜</p>
        <p>☎️</p>
        <p>⚙️</p>
        <p>👉🚪</p>
    </div>
  )
}

export default SideBar;