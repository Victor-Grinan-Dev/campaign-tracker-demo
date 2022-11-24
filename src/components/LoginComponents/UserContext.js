// added from Game
import React from "react";
//hooks:

//import { Link, useNavigate } from "react-router-dom";
//redux:
import { useDispatch } from "react-redux";
// import { changeUserName, changeUserType, changeUserIndex, setIsLogged } from "../../features/globalState/globalStateSlice";
import { setCurrentUser, setIsLogged, setCurrentUserID } from "../../features/portalSlice";
// **********

import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { User } from "../../classes/user";
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
  //const navigate = useNavigate();
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

  const updateUser = async (userportdata, useridtodb) => {
    console.log(userportdata, useridtodb);
    // const updateUser = async (useridtodb) => {
    //   console.log(useridtodb);

    setWait(true);
    // console.log("from before 111 loggedInCheck");
    // console.log(email, password);
    // console.log("from loginUser");

    try {
      const { data } = await Axios.post("suportal.php", {
        userportdata,
        useridtodb,
      });
      // console.log(data);
      if (data.success) {
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
      //console.log(data);
      if (data.success && data.user) {
        dispatch(setIsLogged(true));
        dispatch(setCurrentUserID(data.user.id));
        if (!data.user.lostordata) {
          const newUser = new User(data.user.username);
          newUser.email = data.user.email;
          dispatch(setCurrentUser(newUser));
          return;
        }
        const fetdata = JSON.parse(data.user.lostordata);
        // console.log(fetdata);
        // console.log(JSON.parse(data.user.lostordata));
        dispatch(setCurrentUser(fetdata));
        return;
      }
      dispatch(setCurrentUser({}));
    }
  };

  useEffect(() => {
    async function asyncCall() {
      await loggedInCheck();
    }
    asyncCall();
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    localStorage.removeItem("loginToken");
    dispatch(setCurrentUser({}));
    dispatch(setIsLogged(false));
    //TRANSFER LOCAL STORAGE TO DB
    //navigate("/");
  };

  // return <UserContext.Provider value={{ registerUser, loginUser, wait, user: theUser, loggedInCheck, logout }}>{children}</UserContext.Provider>;
  return <UserContext.Provider value={{ registerUser, loginUser, wait, loggedInCheck, logout, updateUser }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
