import React from "react";
import "./Shorts.scss";
import { VscClose } from 'react-icons/vsc';
import { ReactComponent as YoutubeShorts } from "../../assets/images/shorts.svg";


const Shorts = () => {
  return <div className="shorts">
    <div className="up">
      <div className="title"><YoutubeShorts className="shorts-icon"/></div>
      <p>Shorts</p>
      <VscClose className="x"/>
    </div>
    <div className="down">

    </div>
  </div>;
};

export default Shorts;
