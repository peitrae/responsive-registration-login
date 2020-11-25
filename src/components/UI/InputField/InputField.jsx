import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./InputField.scss";

const InputField = ({ icon, type, placeholder }) => (
  <div className="input-field">
    <div className="icon-container">
      <FontAwesomeIcon icon={icon} className="input-icon" />
    </div>
    <input type={type} placeholder={placeholder} />
  </div>
);

export default InputField;
