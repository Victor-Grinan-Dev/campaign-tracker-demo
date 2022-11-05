import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function Main({width=85}) {
    const isLogged = useSelector(state => state.portal.isLogged)
  return (
    <main style={isLogged ? {width:`${width}vw`} : null} >
        <Outlet />
    </main>
  )
}

export default Main;