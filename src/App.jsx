//styles:

import './styles/appMain.css';
import './styles/login.css';
import './styles/logo.css';
import './styles/button.css';
import './styles/navBar.css';
import './styles/sideBar.css';
import './styles/userData.css';

//components:
import Layout from './pages/Layout';
import Home from './components/views/home/Home';
import Login from './components/views/login/Login';

//react:
import { BrowserRouter, Routes, Route } from "react-router-dom";

//redux
import { useDispatch, useSelector } from 'react-redux';

const protectedViews = () => {
  return (
    <>
    
    </>
  )
}

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.portal.isLogged);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {isLogged ? <Route index element={<Home />} /> : <Route index element={<Login />} />}
          {isLogged && protectedViews()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
