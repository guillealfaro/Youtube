import React from "react";
import "./Main.scss";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Shorts from "../Shorts";

const MainVideos = () => {
  return (
    <div className="main">
      <Row1 />
      <Row2 />
      <Shorts />
    </div>
  );
};

export default MainVideos;
