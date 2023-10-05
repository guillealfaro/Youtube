import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import steph from "./assets/curry.png";
import stephmini from "./assets/stephmini.png";
import lando from "./assets/lando.png";
import landomini from "./assets/landomini.png";
import wes from "./assets/wes.png";
import wesmini from "./assets/wesmini.png";
import tate from "./assets/tate.png";
import tatemini from "./assets/tatemini.png";
import { AiOutlineMore } from "react-icons/ai";

import "./Row4.scss";

const Row4 = () => {
  return (
    <div className="row4">
      <div className="up">
        <div className="f1">
          <div className="image">
            <img src={steph} alt="" className="imagecont" />
            <p className="time">11:40</p>
          </div>
          <div className="title">
            <div className="profile-pic">
              <img src={stephmini} alt="" className="f1logo" />
            </div>
            <div className="main-title">
              <a href="">Stephen Curry's 2023 Highlights Pre Season</a>
              <p className="cap">
                NBA <AiFillCheckCircle />
              </p>
              <p> 2.9M views • 1 month ago</p>
              <AiOutlineMore className="icon-hover" />
            </div>
          </div>
        </div>
        <div className="f2">
          <div className="image">
            <img src={tate} alt="" className="imagecont" />
            <p className="time">17:38</p>
          </div>
          <div className="title">
            <div className="comedy-pic">
              <img src={tatemini} alt="" className="profile-pic-cont" />
            </div>
            <div className="main-title">
              <a href="">Andrew Tate | Waste of time for His Schedule</a>
              <p className="cap">
                CobraKai <AiFillCheckCircle />
              </p>
              <p> 8M views • 2 days ago</p>
              <AiOutlineMore className="icon-hover" />
            </div>
          </div>
        </div>
        <div className="f2">
          <div className="image">
            <img src={lando} alt="" className="imagecont" />
            <p className="time">5:22</p>
          </div>
          <div className="title">
            <div className="profile-pic">
              <img src={landomini} alt="" className="profile-pic-cont" />
            </div>
            <div className="main-title">
              <a href="">Simulation F1 Monaco | Lando Norris Funny</a>
              <p className="cap">
                LandoMoments <AiFillCheckCircle />
              </p>
              <p> 600k views • 4 months ago</p>
              <AiOutlineMore className="icon-hover" />
            </div>
          </div>
        </div>
        <div className="f2">
          <div className="image">
            <img src={wes} alt="" className="imagecont" />
            <p className="time">22:35</p>
          </div>
          <div className="title">
            <div className="profile-pic">
              <img src={wesmini} alt="" className="profile-pic-cont" />
            </div>
            <div className="main-title">
              <a href="">RedBull Skateboarding | Wes Kremer | California </a>
              <p className="cap">
                RedBullSB <AiFillCheckCircle />
              </p>
              <p> 1M views • 3 months ago</p>
              <AiOutlineMore className="icon-hover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row4;
