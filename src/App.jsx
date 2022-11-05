import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//redux

//components
import Layout from './pages/Layout';
import Home from './components/home/Home';
import Login from './components/login/Login';
import { useSelector } from 'react-redux';

function App() {
  const isLogged = useSelector(state => state.portal.isLogged)
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
