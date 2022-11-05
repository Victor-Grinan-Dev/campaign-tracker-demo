import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Layout from './pages/Layout';
import Home from './components/home/Home';
import Login from './components/login/Login';

const isLogged = true;

function App() {
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
