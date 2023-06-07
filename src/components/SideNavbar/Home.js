import React from "react";
import "./Home.scss";
import SideText from "../SideText";

const Home = () => {
  const sectionId = 1; // ID of the Home section in sideData array

  // Filter the sideData array to retrieve options for the Home section
  const sectionOptions =
    SideText.find((section) => section.id === sectionId)?.options || [];

  return (
    <div className="home">
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

export default Home;
