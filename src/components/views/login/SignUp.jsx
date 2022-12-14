import { useContext, useState } from "react";
// import React, { useEffect, useRef, useState } from "react";

// import axios from "../../api/axios";
// import { getIsUsernameDuplicated } from "../../services/db2connAxios";

// LoginDB place
import { UserContext } from "../../../components/LoginComponents/UserContext";
// ********* end of LoginDB place

//components:
import NextPage from "./NextPage";
import BackTo from "./BackTo";
import { User } from "../../../classes/user";
// import { User } from "../../functions/Objects";

const userImage = "https://source.unsplash.com/1vC4ZwkJNdA";

//const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/; //4 to 24
//const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/; //(?*=.*[!"$@€£%"]
//const USER_URL = "/user";

function SignUp() {
  // LoginDB place
  const [success, setSuccess] = useState(false);
  const { registerUser, wait } = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log("from input" + formData);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(wait)
    if (!Object.values(formData).every((val) => val.trim() !== "")) {
      console.log("from object" + Object.values(formData));
      setSuccessMsg(false);
      setErrMsg("Please Fill in all Required Fields!");
      return;
    }

    const data = await registerUser(formData);
    console.log(formData);
    if (data.success) {
      const data = new User(formData.username, formData.password);
      localStorage.setItem("portal", JSON.stringify(data));
      setSuccessMsg("You have successfully registered.");
      setErrMsg(false);
      setSuccess(true)
    } else if (!data.success && data.message) {
      console.log("test" + data.message);
      setSuccessMsg(false);
      setErrMsg(data.message);
    }
  };

  

  return (
    <>
      
      <div
        style={{
          display: "grid",
          placeContent: "center",
        }}
      >
        <img
          className="signup_img"
          src={userImage}
          alt="userType"
          style={{
            filter: "grayscale(100%)",
            height: "40vh",
          }}
        />
        {success ? (
          <section>
            <h1>You are Signed up!</h1>
            <br />
            <NextPage pageUrl="/" pageName="Front page" />
          </section>
        ) : (
          <section style={{ width: "300px" }}>
            <h2>Enlist soldier, dutty calls... </h2>
            <form className="signup_form">
              <label htmlFor="username">Username:</label>
              <input
                className="signup_input"
                type="text"
                name="username"
                placeholder="Username..."
                onChange={onChangeInput}
                id="name"
                value={formData.username}
                required
              />
              <br />
              <label htmlFor="email">Email:</label>
              <input
                className="signup_input"
                type="email"
                name="email"
                onChange={onChangeInput}
                placeholder="Your email"
                id="email"
                value={formData.email}
                required
              />
              <br />
              <label htmlFor="password">Password:</label>
              <input
                className="signup_input"
                type="password"
                name="password"
                placeholder="Password..."
                onChange={onChangeInput}
                id="password"
                value={formData.password}
                required
              />
              <br />
              {successMsg && <div className="success-msg">{successMsg}</div>}
              {errMsg && <div className="err-msg">{errMsg}</div>}
              <button
                caption="Sign Up"
                onClick={submitForm}
                className="signup_btn"
              >
                SIGN UP
              </button>
            </form>
            <p>
              Are you already enlisted? <br />
            </p>
            <BackTo pageUrl="/" pageName="Log in" />
          </section>
        )}
      </div>
    </>
  );
}

export default SignUp;
