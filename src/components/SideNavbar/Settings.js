import React from "react";
import "./Settings.scss";
import SideText from "../SideText";

const Settings = () => {
  const sectionId = 5;
  const sectionOptions =
    SideText.find((section) => section.id === sectionId)?.options || [];

  return (
    <div className="settings">
      {sectionOptions.map((option) => (
        <li className="rows" key={option.id}>
          <div className="side-icons">{option.icon}</div>
          <a className="texts" href={option.text}>
            {option.text}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Settings;
