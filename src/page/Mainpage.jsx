import React from "react";
import mapimg from "../assets/20220330_120315_2.png";
// import { Swiper, SwiperSlide } from 'swiper/react';

// import Navigation from "../component/Nav/Navigation";
import side from "../assets/side_nav.png";
import graybox from "../assets/GrayRectangle.png";

import "./Mainpage.css";

function MainPage() {
  return (
    <div className="layout">
      {/* <header className="header">
        <div className="side_effect">
          <button className="sidebutton">
            <img src={side} className="side" />{" "}
          </button>{" "}
        </div>{" "}
        <div className="title">
          <p className="titletext">일당백 프로젝트</p>
        </div>
      </header>{" "} */}
      {/* <Navigation /> */}
      <div className="grayarray">
        <div className="graybox1">
          <img src={graybox} className="graybox" />
        </div>
        <div className="graybox2">
          <img src={graybox} className="graybox" />
        </div>
        <div className="graybox3">
          <img src={graybox} className="graybox" />
        </div>
        <div className="graybox4">
          <img src={graybox} className="graybox" />
        </div>

        <div className="footer">
          <p className="footertext">디노 캐릭터를 클릭 해보세요.</p>
          <div className="footermargin"></div>
        </div>
        {/* <img src={mapimg} className="mainimg" usemap="#image-map" />

        <map name="image-map">
          <area
            target=""
            alt=""
            title=""
            href="http://www.youtheroom.kr/sub01/sub01.php"
            coords="169,452,7"
            shape="circle"
          />
          <area
            target=""
            alt=""
            title=""
            href="http://www.youtheroom.kr/product/list.php?ca_id=10"
            coords="546,373,27"
            shape="circle"
          />
          <area
            target=""
            alt=""
            title=""
            href="http://www.youtheroom.kr/bbs/board.php?tbl=bbs41"
            coords="880,473,33"
            shape="circle"
          />
          <area
            target=""
            alt=""
            title=""
            href="http://www.youtheroom.kr/product/list.php?ca_id=20"
            coords="249,147,38"
            shape="circle"
          />
          <area
            target=""
            alt=""
            title=""
            href="http://www.youtheroom.kr/sub01/sub04.php"
            coords="532,98,25"
            shape="circle"
          />
        </map> */}
      </div>{" "}
      {/* <Navmain /> */}
    </div>
  );
}

export default MainPage;
