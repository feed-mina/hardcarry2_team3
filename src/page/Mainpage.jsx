import React from "react";
import mapimg from "../assets/20220330_120315_2.png";

import graybox from "../assets/GrayRectangle.png";

import "./Mainpage.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="Main_layout">
      <div className="Main_background">
        <div className="Main_grayboxarray">
          {" "}
          <div className="graybox1">
            <Link to="/mains">
              <img src={graybox} className="graybox" />
            </Link>
          </div>
          <div className="graybox2">
            <Link to="/story">
              <img src={graybox} className="graybox" />
            </Link>
          </div>
          <div className="graybox3">
            <Link to="/write">
              <img src={graybox} className="graybox" />
            </Link>
          </div>
          <div className="graybox4">
            <Link to="/test">
              <img src={graybox} className="graybox" />
            </Link>
          </div>{" "}
          <div className="graybox5">
            <Link to="/product">
              <img src={graybox} className="graybox" />
            </Link>
          </div>
          <div className="graybox6">
            <a href={"http://www.youtheroom.kr/"}>
              <img src={graybox} className="graybox" />
            </a>
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
        </div>
      </div>

      {/* <Navmain /> */}
    </div>
  );
}

export default MainPage;
