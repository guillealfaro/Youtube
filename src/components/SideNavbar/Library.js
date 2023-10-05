import React from "react";
import "./Library.scss";
import SideText from "../SideText";

const Library = () => {
  const sectionId = 2;
  const sectionOptions =
    SideText.find((section) => section.id === sectionId)?.options || [];

  return (
    <div className="library">
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

export default Library;
