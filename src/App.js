import React, { useState } from "react";

import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Panels from "./components/Panels/Panels";

import "./App.scss";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toogleClickHandler = () => setIsSignUp(!isSignUp);

  return (
    <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <SignIn />
          <SignUp />
        </div>
      </div>
      <Panels toogleClickHandler={toogleClickHandler}/>
    </div>
  );
}

export default App;
