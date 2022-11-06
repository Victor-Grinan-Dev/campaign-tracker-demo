//styles:

import './styles/appMain.css';
import './styles/login.css';
import './styles/logo.css';
import './styles/button.css';
import './styles/navBar.css';
import './styles/sideBar.css';
import './styles/userData.css';
import './styles/profile.css';
import './styles/contact.css';
import './styles/chat.css';
import './styles/myArmy.css'
import './styles/formations.css'
import './styles/formationCard.css';
import './styles/token.css';
import './styles/createUnit.css';

//components:
import Layout from './pages/Layout';
import Home from './components/views/home/Home';
import Login from './components/views/login/Login';
import Profile from './components/views/profile/Profile';
import About from './components/views/about/About';
import Contact from './components/views/contact/Contact';
import Settings from './components/views/settings/Settings';
import AddUser from './components/views/addUser/AddUser';
import Post from './components/views/post/Post';
import Chat from './components/views/chat/Chat';


import WarRoom from './components/warRoom/WarRoom';
import MyArmy from './components/myArmy/MyArmy';
import CreateFormation from './components/myArmy/CreateFormation';

//react:
import { BrowserRouter, Routes, Route } from "react-router-dom";

//redux
import {  useSelector } from 'react-redux';

const protectedViews = () => {
  return (
    <>
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/post" element={<Post />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/warroom" element={<WarRoom />} />
      <Route path="/myarmy" element={<MyArmy />} />
      <Route path="/createformation" element={<CreateFormation />} />
    </>
  )
}

function App() {
  //const dispatch = useDispatch();
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
