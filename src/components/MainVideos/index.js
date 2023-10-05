import React from "react";
import "./Main.scss";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Shorts from "../Shorts";
import Row4 from "./Row4";
import Categories from "../Categories";
import Row5 from "./Row5";

const MainVideos = () => {
  return (
    <div className="main">
      <Categories />
      <Row1 />
      <Row2 />
      <Shorts />
      <Row4 />
      <Row5 />
    </div>
  );
};

export default MainVideos;
