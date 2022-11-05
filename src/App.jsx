//styles:
import './App.css';
import './styles/login.css';
import './styles/logo.css';

//components:
import Layout from './pages/Layout';
import Home from './components/views/home/Home';
import Login from './components/views/login/Login';

//react:
import { BrowserRouter, Routes, Route } from "react-router-dom";

//redux
import { useDispatch, useSelector } from 'react-redux';



function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.portal.isLogged);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {isLogged ? <Route index element={<Home />} /> : <Route index element={<Login />} />}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
