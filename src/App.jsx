//styles:
import "./styles/appMain.css";
import "./styles/login.css";
import "./styles/logo.css";
import "./styles/button.css";
import "./styles/navBar.css";
import "./styles/sideBar.css";
import "./styles/userData.css";
import "./styles/profile.css";
import "./styles/contact.css";
import "./styles/chat.css";
import "./styles/myArmy.css";
import "./styles/formations.css";
import "./styles/formationCard.css";
import "./styles/token.css";
import "./styles/createFormation.css";
import "./styles/createUnit.css";
import "./styles/warRoom.css";
import "./styles/campaignCard.css";
import "./styles/createCampaign.css";
import "./styles/drawMap.css";
import "./styles/tile.css";

//components:
import Layout from "./pages/Layout";
import Home from "./components/views/home/Home";
import Profile from "./components/views/profile/Profile";
import About from "./components/views/about/About";
import Contact from "./components/views/contact/Contact";
import Settings from "./components/views/settings/Settings";
import AddUser from "./components/views/addUser/AddUser";
import Post from "./components/views/post/Post";
import Chat from "./components/views/chat/Chat";
import SignUp from "./components/views/login/SignUp";

import WarRoom from "./components/warRoom/WarRoom";
import MyArmy from "./components/myArmy/MyArmy";
import CreateFormation from "./components/myArmy/CreateFormation";
import CreateCampaign from "./components/campaigns/CreateCampaign";
import DrawMap from "./components/drawMap/DrawMap";

//react:
import { BrowserRouter, Routes, Route } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";

//cookies
import Cookies from "js-cookie";
import { useEffect } from "react";
import { setCurrentUser, setIsLogged } from "./features/portalSlice";

//test
import { testUser } from "./components/views/login/Login";

//device
import { isMobile } from "react-device-detect";
import { User } from "./classes/user";

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
      <Route path="/createcampaign" element={<CreateCampaign />} />
      <Route path="/drawmap" element={<DrawMap />} />
    </>
  );
};

function App() {
  const dispatch = useDispatch();

  const isLogged = useSelector(state => state.portal.isLogged);
  const username = useSelector(state => state.portal.currentUser.username);

  useEffect(() => {
    if (Cookies.get("portalLog")) {
      // console.log(Cookies.get({ name: "ugid" }));
      // if (Cookies.get("ugid")) {
      const cookie = Cookies.get("portalLog");
      if (cookie === "true") {
        dispatch(setIsLogged(true));

        if (localStorage.getItem("lostordata")) {
          dispatch(setCurrentUser(JSON.parse(localStorage.getItem("lostordata"))));
          console.log("read from localStorage");
        } else {
          // localStorage.setItem("portal", JSON.stringify(testUser));
          new User(username)
          localStorage.setItem("lostordata", );
          //this comes from the database?
          console.log("get data from database?");
        }
      }
    }

    // eslint-disable-next-line
  }, []);

  if (isMobile) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            {isLogged && protectedViews()}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  return <h1>This app is only for mobiles</h1>;
}

export default App;
