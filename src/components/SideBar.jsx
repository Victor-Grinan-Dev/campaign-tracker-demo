//react
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

//cookies
import Cookies from "js-cookie";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setIsLogged } from "../features/portalSlice";

import { UserContext } from "../components/LoginComponents/UserContext";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.portal.isLogged);
  const user = useSelector((state) => state.portal.currentUser);
  const usertodb = useSelector((state) => state.portal.currentUser);
  const useridtodb = useSelector((state) => state.portal.currentUserID);

  const { updateUser } = useContext(UserContext);

  const logout = () => {
    // const usertodb = useSelector((state) => state.portal.currentUser);
    updateUser(usertodb, useridtodb);
    // updateUser(useridtodb);
    // console.log(useSelector((state) => state.portal.currentUser));
    console.log(usertodb, useridtodb);
    console.log("from logout");
    navigate("/");
    Cookies.remove("portalLog", { path: "/" });

    dispatch(setCurrentUser({}));
    dispatch(setIsLogged(false));

    localStorage.removeItem("loginToken");
    localStorage.removeItem("portal");
  };

  return (
    isLogged && (
      <div className="sidebarContainer">
        <p></p>
        <Link to="/">🏠</Link>
        <p>❤️</p>
        {/* support us */}
        <p>🔗</p>
        {/* share the app */}
        <p>🧮</p>
        {/* MathHammer app */}
        <p>🎲</p>
        {/* diceRoller app */}
        <p>🏈</p>
        {/* blood bowl app */}
        <Link to="/profile">👤</Link>
        <Link to="/chat">💬</Link>
        <a href="https://victor-grinan-dev.github.io/the_game/">🎮</a>
        {user.type === "admin" && <Link to="/adduser">+👤</Link>}
        {user.type === "admin" && <Link to="/post">✍️</Link>}
        <Link to="/about">📜</Link>
        <Link to="/contact">☎️</Link>
        <Link to="/settings">⚙️</Link>
        <p onClick={logout}>👉🚪</p>
      </div>
    )
  );
};

export default SideBar;
