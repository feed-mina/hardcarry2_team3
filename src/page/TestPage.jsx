import React from "react";
import button from "../assets/button1.png";
import graybox from "../assets/LargeGrayRectangle.png";
import "../component/Test/TestPage.css";

const TestPage = () => {
  return (
    <div className="layout">
      <div className="test">
        <div className="title">
          {" "}
          <div className="maintitle">
            <p className="maintext">백수 삶의 현장 </p>
          </div>
          <div className="subtitle">
            <p className="subtext1">영화속 백수 캐릭터로 살펴 본</p>
            <p className="subtext2">나의 백수 성향은? </p>
          </div>
          <div className="explaintitle">
            <p className="explaintext"> 가이드 텍스트 들어갈 공간</p>
            <p className="explaintext1"> 가이드 텍스트 들어갈 공간</p>
            <p className="explaintext1"> 가이드 텍스트 들어갈 공간</p>
          </div>
        </div>
        <div className="maincontent">
          <div className="graybox">
            <img src={graybox} className="grayimg" alt="altimg" />
          </div>
          <div className="button">
            <img src={button} className="buttonimg" alt="button" />{" "}
          </div>
        </div>{" "}
        {/* <div className="alt">
        <h1 className="alttxt">백수능력고사 설문조사 커스텀하기</h1>
      </div> */}
      </div>{" "}
      <div className="footermargin"></div>
    </div>
  );
};

export default TestPage;
