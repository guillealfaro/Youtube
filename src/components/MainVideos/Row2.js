import React from "react";
import "./Row2.scss";
import { AiFillCheckCircle } from "react-icons/ai";
import steph from "./assets/steph.png";
import nba from "./assets/nba.png";
import office from "./assets/office.png";
import comedy from "./assets/comedy.png";
import god from "./assets/godspeed.png";
import ilegal from "./assets/iligal.png";
import nyjah from "./assets/nyjah.png";
import nike from "./assets/nike.png";
import { AiOutlineMore } from "react-icons/ai";

const Row2 = () => {
  return (
    <div className="row3">
      <div className="up">
        <div className="f1">
          <div className="image">
            <img src={steph} alt="" className="imagecont" />
            <p className="time">14:05</p>
          </div>
          <div className="title">
            <div className="profile-pic">
              <img src={nba} alt="" className="f1logo" />
            </div>
            <div className="main-title">
              <a href="">Stephen Curry's Top 53 Career Plays and Handling</a>
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
            <img src={office} alt="" className="imagecont" />
            <p className="time">14:05</p>
          </div>
          <div className="title">
            <div className="comedy-pic">
              <img src={comedy} alt="" className="profile-pic-cont" />
            </div>
            <div className="main-title">
              <a href="">
                Steve Carell's Best Bloopers from The Office US | Comedy Bites
              </a>
              <p className="cap">
                Comedy Bites <AiFillCheckCircle />
              </p>
              <p> 388K views • 2 weeks ago</p>
              <AiOutlineMore className="icon-hover" />
            </div>
          </div>
        </div>
        <div className="f2">
          <div className="image">
            <img src={god} alt="" className="imagecont" />
            <p className="time">14:05</p>
          </div>
          <div className="title">
            <div className="profile-pic">
              <img src={ilegal} alt="" className="profile-pic-cont" />
            </div>
            <div className="main-title">
              <a href="">GODSPEED by Davonta Jolly</a>
              <p className="cap">
                Illegal Civ <AiFillCheckCircle />
              </p>
              <p> 6M views • 2 years ago</p>
              <AiOutlineMore className="icon-hover" />
            </div>
          </div>
        </div>
        <div className="f2">
          <div className="image">
            <img src={nyjah} alt="" className="imagecont" />
            <p className="time">14:05</p>
          </div>
          <div className="title">
            <div className="profile-pic">
              <img src={nike} alt="" className="profile-pic-cont" />
            </div>
            <div className="main-title">
              <a href="">Nike SB | Nyjah Huston | Need that </a>
              <p className="cap">
                nikeskateboarding <AiFillCheckCircle />
              </p>
              <p> 2.7M views • 6 months ago</p>
              <AiOutlineMore className="icon-hover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row2;
