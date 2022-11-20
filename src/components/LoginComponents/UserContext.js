// added from Game
import React from "react";
//hooks:

// import { Link, useNavigate } from "react-router-dom";
//redux:
import { useDispatch } from "react-redux";
// import { changeUserName, changeUserType, changeUserIndex, setIsLogged } from "../../features/globalState/globalStateSlice";
import { changeUserName, changeUserType, changeUserIndex, setCurrentUser, setIsLogged } from "../../features/portalSlice";
// **********

import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();

export const Axios = axios.create({
  // baseURL: "http://localhost/hammer_db_api/",
  baseURL: "https://hammerdbapi.herokuapp.com/",
});

export const UserContextProvider = ({ children }) => {
  // const [theUser, setUser] = useState(null);
  const [wait, setWait] = useState(false);
  // added from Game
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // **********

  const registerUser = async ({ username, email, password }) => {
    setWait(true);
    try {
      const { data } = await Axios.post("register.php", {
        username,
        email,
        password,
      });
      setWait(false);
      return data;
    } catch (err) {
      setWait(false);
      return { success: 0, message: "Server Error!" };
    }
  };

  const loginUser = async ({ email, password }) => {
    setWait(true);
    // console.log("from before 111 loggedInCheck");
    // console.log(email, password);
    // console.log("from loginUser");

    try {
      const { data } = await Axios.post("login.php", {
        email,
        password,
      });
      // console.log(data);
      if (data.success && data.token) {
        localStorage.setItem("loginToken", data.token);
        setWait(false);
        return { success: 1 };
      }
      setWait(false);
      // console.log(data.message);
      return { success: 0, message: data.message };
    } catch (err) {
      setWait(false);
      return { success: 0, message: "Server Error!" };
    }
  };

  const loggedInCheck = async () => {
    const loginToken = localStorage.getItem("loginToken");
    Axios.defaults.headers.common["Authorization"] = "Bearer " + loginToken;
    if (loginToken) {
      // const { data } = await Axios.get("getUser.php");
      const { data } = await Axios.get("getUser.php");
      // console.log(data);
      if (data.success && data.user) {
        // console.log(data.user);
        // dispatch(changeUserName(data.user.name));
        // dispatch(changeUserIndex(data.user.id));
        // dispatch(setCurrentUser(data.user.name));
        // dispatch(setCurrentUser(data.user.id));
        dispatch(setCurrentUser(data.user));
        dispatch(setIsLogged(true));
        // setUser(data.user);
        // console.log(theUser);
        return;
        // return setUser(data.user);
      }

      // setUser(null);
      dispatch(setCurrentUser({}));
    }
  };

  useEffect(() => {
    async function asyncCall() {
      await loggedInCheck();
    }
    asyncCall();
  }, []);

  const logout = () => {
    localStorage.removeItem("loginToken");
    dispatch(setCurrentUser({}));
    // setUser(null);
    // added from Game
    // dispatch(setIsLogged(false));
    // dispatch(changeUserType(undefined));
    // dispatch(changeUserName(undefined));
    // navigate("/");
  };

  // return <UserContext.Provider value={{ registerUser, loginUser, wait, user: theUser, loggedInCheck, logout }}>{children}</UserContext.Provider>;
  return <UserContext.Provider value={{ registerUser, loginUser, wait, loggedInCheck, logout }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
