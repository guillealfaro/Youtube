import React, { useEffect, useState } from "react";
import "./SideNavbar.scss";
import Home from "./Home";
import Library from "./Library";
import Subscriptions from "./Subscriptions";
import Explore from "./Explore";
import More from "./More";
import Settings from "./Settings";
import Copyright from "./Copyright";
const SideNavbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const sidebar = document.querySelector(".side-navbar");
    sidebar.addEventListener("mouseenter", handleMouseEnter);
    sidebar.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      sidebar.removeEventListener("mouseenter", handleMouseEnter);
      sidebar.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`side-navbar ${isHovered ? "show-scrollbar" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Home />
      <Library />
      <Subscriptions />
      <Explore />
      <More />
      <Settings />
      <Copyright />
    </div>
  );
};

export default SideNavbar;
