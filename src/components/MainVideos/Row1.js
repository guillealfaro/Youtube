import React from "react";
import "./Row1.scss";
import f1 from "./assets/screen1.png";
import f1logo from "./assets/f1.jpg";
import screen2 from "./assets/screen2.png";
import { AiFillCheckCircle } from "react-icons/ai";
import pedro from "./assets/pedro.png";
import thrasher from "./assets/screen 3.png";
import thrasherpic from "./assets/thra.png";
import { AiOutlineMore } from "react-icons/ai";
const Row1 = () => {
  return (
    <div className="row1">
      <div className="up">
        <div className="f1">
          <div className="image">
            <img src={f1} alt="" className="imagecont" />
            <p className="time">14:05</p>
          </div>
          <div className="title">
            <div className="profile-pic">
              <img src={f1logo} alt="" className="f1logo" />
            </div>
            <div className="main-title">
              <a href="">FP2 Highlights | 2023 Spanish Grand Prix</a>

              <p className="cap">
                FORMULA 1 <AiFillCheckCircle />
              </p>
              <p> 1.6M views • 17 hours ago</p>
              <AiOutlineMore className="icon-hover" />
            </div>
          </div>
        </div>
        <div className="f2">
          <div className="image">
            <img src={screen2} alt="" className="imagecont" />
            <p className="time">32:40</p>
          </div>
          <div className="title">
            <div className="profile-pic">
              <img src={pedro} alt="" className="profile-pic-cont" />
            </div>
            <div className="main-title">
              <a href="">All The JavaScript You Need To Know For React</a>
              <p className="cap">
                PedroTech <AiFillCheckCircle />
              </p>
              <p> 15.3K views • 2 days ago</p>
              <AiOutlineMore className="icon-hover" />
            </div>
          </div>
        </div>
        <div className="f2">
          <div className="image">
            <img src={thrasher} alt="" className="imagecont" />
            <p className="time">7:10</p>
          </div>
          <div className="title">
            <div className="profile-pic">
              <img src={thrasherpic} alt="" className="profile-pic-cont" />
            </div>
            <div className="main-title">
              <a href="">Out There: Josh Kalis</a>
              <p className="cap">
                ThrasherMagazine <AiFillCheckCircle />
              </p>
              <p> 98K views • 7 days ago</p>
              <AiOutlineMore className="icon-hover" />
            </div>
          </div>
        </div>
        <div className="f1"></div>
      </div>
    </div>
  );
};

export default Row1;
