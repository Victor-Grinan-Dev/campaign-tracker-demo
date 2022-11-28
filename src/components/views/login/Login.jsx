import React, { useRef, useState, useContext } from "react";
import HOTWButton from "../../ui_components/HOTWButton";
import Gates from "../../ui_components/Gates";
import Logo from "../../ui_components/Logo";
//import { useDispatch } from "react-redux";
//import { setCurrentUser, setIsLogged } from "../../../features/portalSlice";
import { User } from "../../../classes/user";
//import Cookies from "js-cookie";
import { UserContext } from "../../LoginComponents/UserContext";
import NextPage from "./NextPage";

export const testUser = new User("bantoros", "01928374");
testUser.type = "admin";

const Login = () => {
  const userRef = useRef();
  //const dispatch = useDispatch();

  // const handleSubmit = () => {
  //   dispatch(setCurrentUser(testUser));
  //   dispatch(setIsLogged(true));
  //   Cookies.set("portalLog", "true"); //?
  // };

  // Login to db space
  const { loginUser, wait, loggedInCheck, user } = useContext(UserContext);
  //const [redirect, setRedirect] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    // e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = async (e) => {
    console.log(wait, user);
    e.preventDefault();

    if (!Object.values(formData).every((val) => val.trim() !== "")) {
      setErrMsg("Please Fill in all Required Fields!");
      return;
    }

    const data = await loginUser(formData);
    if (data.success) {
      // console.log(data);
      // e.target.reset();
      //setRedirect("Redirecting...");
      // console.log("go to loggedIncheck");
      const ret = await loggedInCheck();
      // console.log(user.name);
      // dispatch(setIsLogged(true));
      // console.log(formData.email);
      // console.log(user);
      // console.log(formData.password);
      // dispatch(changeUserName(user.name));
      // dispatch(changeUserIndex(user.id));
      // dispatch(changeUserName(data[item].username));
      // dispatch(changeUserIndex(item));
      console.log(ret)
      return;
    }
    setErrMsg(data.message);
  };

  return (
    <div className="login-container">
      <div className="welcome">
        <p>Welcome to the "Campaing Tracker App".</p>

        <Logo />
        <Gates />
      </div>
      <div>
        <form>
          <div>
            {/* <input type="text" name="username" placeholder="Username..." /> */}
            <input
              className="login_input"
              type="text"
              name="email"
              placeholder="Username..."
              onChange={onChangeInput}
              value={formData.email}
              ref={userRef}
              autoComplete="off"
              required
            />
          </div>
          <div>
            {/* <input type="text" name="password" placeholder="Password..." /> */}
            <input
              className="login_input"
              type="password"
              name="password"
              placeholder="Password..."
              onChange={onChangeInput}
              value={formData.password}
              required
            />
          </div>
          {/* <HOTWButton caption={"Login"} action={handleSubmit} /> */}
          <HOTWButton caption={"LOGIN"} action={submitForm} />
        </form>
        <br />
        {/* <p>More...</p> */}
        <p>
          Want to enlist for battle? <br />
        </p>
        <NextPage pageUrl="/signup" pageName="Sign Up" />
      </div>
      <p>{errMsg}</p>
    </div>
  );
};

export default Login;
