import link from "../../assets/share_link.png";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";
import React from "react";

// import Modal from "../elements/Modal";
// import { kakaoShare, twitterShare, facebookShare } from "../elements/share";
import facebook from "../../images/facebook.png";
import kakao from "../../images/kakao.png";
import twitter from "../../images/twitter.png";

import { useHistory } from "react-router-dom";

import title1 from "../../images/result/title1.png";
import title2 from "../../images/result/title2.png";
import title3 from "../../images/result/title3.png";
import title4 from "../../images/result/title4.png";

import subtitle1 from "../../images/result/subtitle1.png";
import subtitle2 from "../../images/result/subtitle2.png";
import subtitle3 from "../../images/result/subtitle3.png";
import subtitle4 from "../../images/result/subtitle4.png";

import shareTitle from "../../images/result/share_title.png";

import dino1 from "../../images/result/dino/dino1.png";
import dino2 from "../../images/result/dino/dino2.png";
import dino3 from "../../images/result/dino/dino3.png";
import dino4 from "../../images/result/dino/dino4.png";

import more from "../../images/result/more.png";
import programs from "../../images/result/programs.png";
import event from "../../images/event.png";
const subTitle = [
  "다양한 경험이 필요한",
  "더 많은 지식과 더 많은 체험이 필요한",
  "구체적이고 명확한 기회가 필요한",
  "면접, 자소서 등의 준비가 필요한",
];

const title = [title1, title2, title3, title4];
const subtitle = [subtitle1, subtitle2, subtitle3, subtitle4];
const dino = [dino1, dino2, dino3, dino4];
const copyToClipboard = (val) => {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
};

const copy = (func) => {
  copyToClipboard("https://bit.ly/캐취업");
  func("complete");
};

const titlesize = [
  [0, 0],
  [180, 43],
  [180, 43],
  [251, 42],
  [144, 44],
];
const subtitlesize = [
  [0, 0],
  [204, 43],
  [200, 43],
  [284, 47],
  [204, 43],
];
const Result = (props) => {
  const navigate = useNavigate();
  const [isShowAll, setIsShowAll] = React.useState(false);
  const [ToastStatus, setToastStatus] = React.useState(false);
  const ToastMsg = "클립보드에 URL이 복사되었습니다.";
  const showData = JSON.parse(sessionStorage.getItem("data"));
  console.log(showData);
  const handleToast = () => {
    if (!ToastStatus) {
      setToastStatus(true);
    }
  };

  React.useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
      }, 1000);
    }
  }, [ToastStatus]);
  const handleRetryBtn = () => {
    navigate("/");
  };

  const handleShowAllBtn = () => {
    setIsShowAll(true);
  };
  return (
    <div>
      <div id="resultTitle">{subTitle[showData.type - 1]}</div>
      <img
        id="resultType"
        src={title[showData.type - 1]}
        alt="img"
        width={titlesize[showData.type][0]}
        height={titlesize[showData.type][1]}
      />
      <img
        src={dino[showData.type - 1]}
        alt="img"
        width="290px"
        height="250px"
      ></img>
      <img
        src={subtitle[showData.type - 1]}
        alt="img"
        width={subtitlesize[showData.type][0]}
        height={subtitlesize[showData.type][1]}
        style={{ marginTop: "25px", marginBottom: "10px" }}
      />
      <div id="resultMain">
        <p>{showData.sub1}</p>
        <p>{showData.sub2}</p>
      </div>

      <div className="titleCon">
        <img
          src={programs}
          alt="img"
          width="250px"
          height="37px"
          style={{}}
        ></img>
        <a href="http://www.youtheroom.kr/product/list.php?ca_id=10">
          <img
            src={more}
            alt="img"
            width="22px"
            height="22px"
            style={{ marginLeft: "2px", marginTop: "1px" }}
          ></img>
        </a>
        {/* <a id="moreA" href="http://www.youtheroom.kr/product/list.php?ca_id=10">
          <div id="more"> More</div>
        </a> */}
      </div>

      <a href={showData.programs[0].url}>
        <div className="resultPrograms">
          <img
            className="resultProgramImg"
            src={showData.programs[0].img}
            alt="img"
          />
          <div className="resultProgramDetail">
            <p id="programName">{showData.programs[0].title}</p>
            <p id="programDetail">{showData.programs[0].desc}</p>
          </div>
        </div>
      </a>
      <a href={showData.programs[1].url}>
        <div className="resultPrograms">
          <img
            className="resultProgramImg"
            src={showData.programs[1].img}
            alt="img"
          />
          <div className="resultProgramDetail">
            <p id="programName">{showData.programs[1].title}</p>
            <p id="programDetail">{showData.programs[1].desc}</p>
          </div>
        </div>
      </a>
      <a href={showData.programs[2].url}>
        <div className="resultPrograms">
          <img
            className="resultProgramImg"
            src={showData.programs[2].img}
            alt="img"
          />
          <div className="resultProgramDetail">
            <p id="programName">{showData.programs[2].title}</p>
            <p id="programDetail">{showData.programs[2].desc}</p>
          </div>
        </div>
      </a>
      <div id="resultBtnContainer">
        <button id="resultRetry" onClick={handleRetryBtn}>
          다시하기
        </button>
        <button id="resultAll" onClick={handleShowAllBtn}>
          전체 유형 보기
        </button>
      </div>
      <div>
        <input type="hidden" id="urlInput" className="url-input" />
        <img
          className="shareIcon"
          src={link}
          alt="link"
          width="65px"
          height="65px"
          onClick={() => {
            copy(handleToast);
          }}
        ></img>
        {ToastStatus && (
          <>
            <Toast msg={ToastMsg} />
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
