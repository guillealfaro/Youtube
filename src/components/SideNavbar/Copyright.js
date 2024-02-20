import React from "react";
import "./Copyright.scss";

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="top-copy">
        <div className="top-contain">
          <div className="sec">
            <a href="#">About</a>
            <a href="#">Press</a>
            <a href="#">Copyright</a>
          </div>
          <div className="sec">
            <a href="#">Contact us</a>
            <a href="#">Creators</a>
          </div>
          <div className="sec">
            <a href="#">Advertise</a>
            <a href="#">Developers</a>
          </div>
        </div>
      </div>
      <div className="middle-copy">
        <div className="top-contain">
          <div className="sec">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Policy & Safety</a>
          </div>
          <div className="sec">
            <a href="#">How YouTube works</a>
          </div>
          <div className="sec">
            <a href="#">Test new features</a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>© 2023 Google LLC</p>
      </div>
    </div>
  );
};

export default Copyright;
