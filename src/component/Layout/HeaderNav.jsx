import React from "react";
import side from "../../assets/side_nav.png";
import "./HeaderNav.css";

const HeaderNav = () => {
  return (
    <div className="layout">
      <header className="header">
        <div className="side_effect">
          <button className="sidebutton">
            <img src={side} className="side" />{" "}
          </button>{" "}
        </div>{" "}
        <div className="title">
          <p className="titletext">일당백 프로젝트</p>
        </div>
      </header>{" "}
    </div>
  );
};

export default HeaderNav;
