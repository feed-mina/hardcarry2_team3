import React from "react";
import { useNavigate } from "react-router-dom";
import title from "../../images/title.png";

import mainDino from "../../images/main_dino.png";
import MDTI from "./MDTI";
import Header from "./Header";
const TestHome = (props) => {
  const navigate = useNavigate();
  //   const history = useHistory();
  const [isMDTI, setIsMDTI] = React.useState(false);
  const onClick = () => {
    navigate("/test");
  };

  return (
    <>
      <Header isBack={false} />
      <div className="home">
        <b>My Dream</b> Type Indicator
      </div>
      {/* <img
        id="homeTitle"
        src={title}
        alt="img"
        width="226x"
        height="122px"
      ></img> */}

      {/* <img
        id="homeImg"
        src={mainDino}
        alt="img"
        width="280px"
        height="240px"
      ></img> */}
      <button id="homeStartBtn" onClick={onClick}>
        시작하기
      </button>
      <p
        id="homeCountApply"
        onClick={() => {
          setIsMDTI(true);
        }}
      >
        <b>MDTI 테스트</b>란 무엇일까?
      </p>
      {isMDTI && <MDTI setIsMDTI={setIsMDTI} />}
    </>
  );
};

export default TestHome;
