import React from "react";
import mapimg from "../assets/20220330_120315_2.png";
// import { Swiper, SwiperSlide } from 'swiper/react';

// import Navigation from "../component/Nav/Navigation";
import Navmain from "../component/Nav/Navmain";
import "./Mainpage.css";

function MainPage() {
  return (
    <div>
      <p>mainpage</p>
      {/* <Navigation /> */}
      <div>
        <img src={mapimg} className="mainimg" usemap="#image-map" />

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
        </map>
      </div>{" "}
      <Navmain />
    </div>
  );
}

export default MainPage;
