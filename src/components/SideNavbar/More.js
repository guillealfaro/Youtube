import React from "react";
import "./More.scss";
import SideText from "../SideText";

const More = () => {
  const sectionId = 4; // ID of the Home section in sideData array

  // Filter the sideData array to retrieve options for the Home section
  const sectionOptions =
    SideText.find((section) => section.id === sectionId)?.options || [];

  return (
    <div className="more-from">
      <p className="title">More from YouTube</p>
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

export default More;
