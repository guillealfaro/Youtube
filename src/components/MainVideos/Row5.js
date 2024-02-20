import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import "./Row5.scss";
import fsfeebs from "./assets/fsfeeb.png";
import thrasher from "./assets/thra.png";
import tailwind from "./assets/tailwind.png";
import fire from "./assets/fire.png";
import franky from "./assets/franky.png";
import primitive from "./assets/primitive.png";
import jim from "./assets/jim.png";
import office from "./assets/office1.png";

const Row5 = () => {
  return (
    <div className="row5">
      <div className="row">
        <div className="video-image">
          <img src={fsfeebs} alt="" />
          <p className="time">3:16</p>
        </div>
        <div className="video-title">
          <div className="profile-pic">
            <img src={thrasher} alt="" className="logo" />
          </div>
          <div className="main-title">
            <a href="">Josh Douglas' J-Force 1 Part</a>
            <p className="cap">
              Thrashermagazine <AiFillCheckCircle />
            </p>
            <p> 115k views • 3 month ago</p>
            <AiOutlineMore className="icon-hover" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="video-image">
          <img src={tailwind} alt="" />
          <p className="time">6:45</p>
        </div>
        <div className="video-title">
          <div className="profile-pic">
            <img src={fire} alt="" className="logo" />
          </div>
          <div className="main-title">
            <a href="">
              Ultimate Tailwind CSS Tutorial | Build a Discord-inspired Navbar
            </a>
            <p className="cap">
              Fireship <AiFillCheckCircle />
            </p>
            <p> 330k views • 5 month ago</p>
            <AiOutlineMore className="icon-hover" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="video-image">
          <img src={franky} alt="" />
          <p className="time">9:55</p>
        </div>
        <div className="video-title">
          <div className="profile-pic">
            <img src={primitive} alt="" className="logo" />
          </div>
          <div className="main-title">
            <a href="">DEFINE. Unmastered | Franky V.</a>
            <p className="cap">
              Thrashermagazine <AiFillCheckCircle />
            </p>
            <p> 115k views • 3 month ago</p>
            <AiOutlineMore className="icon-hover" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="video-image">
          <img src={jim} alt="" />
          <p className="time">7:36</p>
        </div>
        <div className="video-title">
          <div className="profile-pic">
            <img src={office} alt="" className="logo" />
          </div>
          <div className="main-title">
            <a href="">The Office but it Gets Progressively Toxic</a>
            <p className="cap">
              The Office US <AiFillCheckCircle />
            </p>
            <p> 371k views • 3 weeks ago</p>
            <AiOutlineMore className="icon-hover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row5;
