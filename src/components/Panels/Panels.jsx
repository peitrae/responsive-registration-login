import React from "react";

import "./Panels.scss";

const Panels = ({ toogleClickHandler }) => (
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>New here?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus
          sapien porttitor, scelerisque ante quis, eleifend justo.
        </p>
        <button
          className="btn transparent"
          id="sign-up-btn"
          onClick={toogleClickHandler}
        >
          Sign Up
        </button>
      </div>

      <img src="/add_notes.svg" className="image" alt="" />
    </div>

    <div className="panel right-panel">
      <div className="content">
        <h3>One of us?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus
          sapien porttitor, scelerisque ante quis, eleifend justo.
        </p>
        <button
          className="btn transparent"
          id="sign-in-btn"
          onClick={toogleClickHandler}
        >
          Sign In
        </button>
      </div>

      <img src="/taking_notes.svg" className="image" alt="" />
    </div>
  </div>
);

export default Panels;
