import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import InputField from "../UI/InputField/InputField";

const SignUp = () => (
  <form className="sign-up-form">
    <h2 className="title">Sign Up</h2>
    <InputField icon={["fas", "user"]} type="text" placeholder="Username" />
    <InputField icon={["fas", "envelope"]} type="text" placeholder="Email" />
    <InputField icon={["fas", "lock"]} type="password" placeholder="Password" />
    <input type="submit" value="Sign Up" className="btn solid" />

    <p className="social-text">Or Sign up with social platforms</p>
    <div className="social-media">
      <NavLink to="/" className="social-icon">
        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
      </NavLink>
      <NavLink to="/" className="social-icon">
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </NavLink>
      <NavLink to="/" className="social-icon">
        <FontAwesomeIcon icon={["fab", "google"]} />
      </NavLink>
      <NavLink to="/" className="social-icon">
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
      </NavLink>
    </div>
  </form>
);

export default SignUp;
