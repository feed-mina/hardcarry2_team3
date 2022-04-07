import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import dino from "../images/main_dino.png";
const MDTI = (props) => {
  const { setIsMDTI } = props;
  const handleCloseBtn = (e) => {
    setIsMDTI(false);
  };

  return (
    <>
      <div className="modal" onClick={handleCloseBtn}>
        <div
          id="modalMDTI"
          className="modalPost"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modalHead">
            <div className="modalHeadFont">MDTI 테스트</div>
            <CloseOutlined className="closeBtn" onClick={handleCloseBtn} />
          </div>
          <p className="mdtiPar">
            <div className="mdtiTitle">
              <b>MDTI 테스트</b>란
            </div>
            <p className="mdtiDetail">
              <b>My-Dream-Type-Indicator</b> 의 약자로 간단한 질문들에 답을
              함으로써 현재 나의 진로 설정 단계를 파악하고 해당 단계를 바탕으로{" "}
              <b>청년이룸</b>에서 진행하고 있는
              <b>다양한 진로 및 취업 관련 프로그램 등을 안내</b>해주는 <br />
              간단한 진로 탐색 테스트 입니다.
            </p>
            <img
              src={dino}
              width="180px"
              height="150px"
              alt="img"
              style={{ marginBottom: "-10px" }}
            />
            <p className="mdtiInfo">
              * 해당 MDTI 테스트는 정밀한 테스트가 아닙니다.
              <br /> 전문가를 통해 진행되는 정확한 진로 및 취업 상담은&nbsp;
              <br /> <a href="http://www.youtheroom.kr/">청년이룸 사이트</a>
              에서 가능합니다.
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default MDTI;
