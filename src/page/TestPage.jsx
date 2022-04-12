import React, { useState } from "react";
import testbutton from "../assets/testbutton.png";
import graybox from "../assets/LargeGrayRectangle.png";
import dino1 from "../assets/dino_2.png";

import "../component/Test/TestPage.css";
import { useNavigate } from "react-router-dom";
const TestPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    console.log("성공!");
    navigate("/ontest");
  };
  return (
    <div className="test_layout">
      <div className="test_page">
        <div className="test_title">
          {" "}
          <div className="test_maintitle">
            <p className="test_maintext">백수 삶의 현장 </p>
          </div>
          <div className="test_subtitle">
            <p className="test_subtext1">영화속 백수 캐릭터로 살펴 본</p>
            <p className="test_subtext2">나의 백수 성향은? </p>
          </div>
          <div className="test_explaintitle">
            {/* <p className="test_explaintext"> 가이드 텍스트 들어갈 공간</p>
            <p className="test_explaintext1"> 가이드 텍스트 들어갈 공간</p>
            <p className="test_explaintext1"> 가이드 텍스트 들어갈 공간</p> */}
          </div>
        </div>
        <div className="test_maincontent">
          <div className="test_graybox">
            <img src={dino1} className="test_grayimg" alt="altimg" />
          </div>
          <div className="test_button">
            <button>
              <img
                src={testbutton}
                className="test_buttonimg"
                alt="button"
                onClick={handleNext}
              />
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default TestPage;
