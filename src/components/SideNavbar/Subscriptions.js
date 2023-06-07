import React from "react";
import "./Subscriptions.scss";
import trav from "../SideText/photos/traversy.png";
import pabs from "../SideText/photos/pabs.png";
import pedro from "../SideText/photos/pedro.png";
import web from "../SideText/photos/web dev.png";
import ania from "../SideText/photos/ania.png";
import { AiOutlinePlusCircle } from "react-icons/ai";
import mag from "../SideText/photos/magti.png";

const Subscriptions = () => {
  return (
    <div className="subscriptions">
      <p className="titulo">Subscriptions</p>
      <div className="contain">
        <li className="rows">
          <div className="pic-container">
            <img src={pabs} alt="" className="pic" />
          </div>
          <a href="" className="texts">
            Pabs Monestel
          </a>
        </li>
        <li className="rows">
          <div className="pic-container">
            <img src={trav} alt="" className="pic" />
          </div>
          <a href="" className="texts">
            Traversy Media
          </a>
        </li>
        <li className="rows">
          <div className="pic-container">
            <img src={pedro} alt="" className="pic" />
          </div>
          <a href="" className="texts">
            PedroTech
          </a>
        </li>
        <li className="rows">
          <div className="pic-container">
            <img src={web} alt="" className="pic" />
          </div>
          <a href="" className="texts">
            Web Dev Simplified
          </a>
        </li>
        <li className="rows">
          <div className="pic-container">
            <img src={ania} alt="" className="pic" />
          </div>
          <a href="" className="texts">
            Code with Ania Kub..
          </a>
        </li>
        <li className="rows">
          <div className="pic-container">
            <img src={mag} alt="" className="pic" />
          </div>
          <a href="" className="texts">
            Magtimus Pro
          </a>
        </li>
        <li className="rows">
          <AiOutlinePlusCircle className="icon-plus" />
          <a href="" className="texts">
            Browse channels
          </a>
        </li>
      </div>
    </div>
  );
};

export default Subscriptions;
