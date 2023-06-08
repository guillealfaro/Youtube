import React from "react";
import "./Shorts.scss";
import { VscClose } from 'react-icons/vsc';
import { ReactComponent as YoutubeShorts } from "../../assets/images/shorts.svg";
import cole from "./assets/coleshort.png"
import conor from "./assets/conorshort.png"
import angela from "./assets/angelashort.png"
import joe from "./assets/joeshort.png"
import pp from "./assets/pesoplumashort.png"
import ja from "./assets/jashort.png"


const Shorts = () => {
  return <div className="shorts">
    <div className="up">
      <div className="title"><YoutubeShorts className="shorts-icon"/></div>
      <p>Shorts</p>
      <VscClose className="x"/>
    </div>
    <div className="down">
      <div className="short">
        <div className="short-pic">
          <img src={cole} alt="" className="short-pic-img" />
        </div>
        <div className="short-caption">
          <p>Kendrick Lamar and J. Cole's Secret rapping ...</p>
        </div>
        <div className="short-views">
          <p>3.5M views</p>
        </div>
      </div>
      <div className="short">
       <div className="short-pic">
          <img src={conor} alt="" className="short-pic-img" />
        </div>
        <div className="short-caption">
          <p>Conor says he's focused in his next  ...</p>
        </div>
        <div className="short-views">
          <p>6M views</p>
        </div>
      </div>
      <div className="short">
      <div className="short-pic">
          <img src={angela} alt="" className="short-pic-img" />
        </div>
        <div className="short-caption">
          <p>Angela White • The Perfect Gift does exi ...</p>
        </div>
        <div className="short-views">
          <p>570K views</p>
        </div>
      </div>
      <div className="short">
      <div className="short-pic">
          <img src={joe} alt="" className="short-pic-img" />
        </div>
        <div className="short-caption">
          <p>Elon Musk Reaction to Joe Rogan Ice Bath</p>
        </div>
        <div className="short-views">
          <p>65K views</p>
        </div>
      </div>
      <div className="short">
      <div className="short-pic">
          <img src={pp} alt="" className="short-pic-img" />
        </div>
        <div className="short-caption">
          <p>Rapid Fire 🔥 With Peso Pluma Part 2</p>
        </div>
        <div className="short-views">
          <p>2.2M views</p>
        </div>
      </div>
      <div className="short">
      <div className="short-pic">
          <img src={ja} alt="" className="short-pic-img" />
        </div>
        <div className="short-caption">
          <p>Stephen Curry Mocking Ja Morant Celeb ...</p>
        </div>
        <div className="short-views">
          <p>420K views</p>
        </div>
      </div>
      <div className="short"></div>
      <div className="short"></div>
    </div>
  </div>;
};

export default Shorts;
