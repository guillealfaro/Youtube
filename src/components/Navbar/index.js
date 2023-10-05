import React from "react";
import { VscMenu } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { BiMicrophone, BiVideoPlus } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import foto from "./profile.JPG";
import SVG from "react-inlinesvg";
import AssetYouTubeLogo from "../../assets/images/youtube-logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <div className="icon-more-cont">
          <VscMenu className="icon-menu" />
        </div>
        <SVG
          className="youtube-logo"
          id="youtube-logo"
          src={AssetYouTubeLogo}
        />
      </div>
      <div className="middle-nav">
        <div className="search-bar">
          <input className="search-input" type="text" placeholder="Search" />
          <button className="search-icon" type="submit">
            <IoIosSearch className="logo-search" />
          </button>
        </div>
        <div className="search-micro">
          <BiMicrophone className="micro" />
        </div>
      </div>
      <div className="right-nav">
        <BiVideoPlus className="camera" />
        <AiOutlineBell className="camera" />
        <div className="profile">
          <img src={foto} alt="" className="prof-pic" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
