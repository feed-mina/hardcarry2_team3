import React from "react";
import Toast from "../elements/Toast";
import { kakaoShare, twitterShare, facebookShare } from "../elements/share";
import facebook from "../images/facebook.png";
import kakao from "../images/kakao.png";
import twitter from "../images/twitter.png";
import link from "../images/link.png";
import { useHistory } from "react-router-dom";
import Modal from "../elements/Modal";
import title1 from "../images/result/title1.png";
import title2 from "../images/result/title2.png";
import title3 from "../images/result/title3.png";
import title4 from "../images/result/title4.png";

import subtitle1 from "../images/result/subtitle1.png";
import subtitle2 from "../images/result/subtitle2.png";
import subtitle3 from "../images/result/subtitle3.png";
import subtitle4 from "../images/result/subtitle4.png";

import shareTitle from "../images/result/share_title.png";
import Header from "../elements/Header";

import dino1 from "../images/result/dino/dino1.png";
import dino2 from "../images/result/dino/dino2.png";
import dino3 from "../images/result/dino/dino3.png";
import dino4 from "../images/result/dino/dino4.png";

import more from "../images/result/more.png";
import programs from "../images/result/programs.png";
import event from "../images/event.png";

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
  const history = useHistory();
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
    history.push("/");
  };

  const handleShowAllBtn = () => {
    setIsShowAll(true);
  };

  return (
    <>
      <Header isBack={false} />
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
      <img
        id="resultShare"
        src={shareTitle}
        alt="img"
        width="165px"
        height="37px"
      ></img>
      <div id="shareContainer">
        <img
          className="shareIcon"
          src={kakao}
          alt="kakaotalk"
          width="65px"
          height="65px"
          onClick={kakaoShare}
        />

        <img
          className="shareIcon"
          src={facebook}
          alt="facebook"
          width="65px"
          height="65px"
          onClick={facebookShare}
        ></img>

        <img
          className="shareIcon"
          src={twitter}
          alt="twitter"
          width="65px"
          height="65px"
          onClick={twitterShare}
        ></img>
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
      <img
        id="resultShare"
        src={event}
        alt="img"
        width="187px"
        height="37px"
        style={{ marginBottom: "25px" }}
      ></img>
      <div className="eventContainer">
        <div id="resultTitle">
          MDTI 테스트 결과 페이지를 캡처하여 <br />
          아래 버튼의 구글폼에 첨부하여 보내주시면 <br />
          추첨을 통해 경품을 드립니다!
        </div>
        <h1 id="eventDate">이벤트 기간</h1>
        <h3 id="eventDate" style={{ fontSize: "16px", marginTop: "5px" }}>
          11월 20일 ~ 11월 27일
        </h3>
        <a href="https://forms.gle/15RKzVnUJkJxL64Z8">
          <button id="resultAll" style={{ width: "160px", margin: "20px" }}>
            이벤트 참여하기
          </button>
        </a>
        <p id="info">
          * 본 이벤트는 상품의 수량에 따라 조기 마감될 수 있습니다.
        </p>
      </div>

      {/* <div className="infoContainer">
        <img
          id="resultShare"
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bbd07df1-c507-4d91-8f83-b598f9f68b38/%EC%9D%B4%EB%A3%A8%EB%AF%B8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211119T033720Z&X-Amz-Expires=86400&X-Amz-Signature=71d0337d2edc07353c29367c998526fd88802a6d7faa9e7da285a3bc4d5f3d85&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EC%259D%25B4%25EB%25A3%25A8%25EB%25AF%25B8.png%22&x-id=GetObject"
          alt="img"
          width="197px"
          height="40px"
          style={{ marginBottom: "25px" }}
        ></img>
        <div id="resultTitle">
          이루미 가입하고 <br />
          나만 알고 싶은 취업 프로그램 무료로 참여하자!
        </div>
        <p>
          구로청년이룸은 청년이라면 누구나 대환영! <br />
        </p>
        <p>
          청년이룸의 다양한 프로그램 알림 신청하고
          <br /> 나만의 스펙 쌓기!{" "}
        </p>
        <button id="resultAll" style={{ width: "160px", margin: "20px" }}>
          이루미 알림 신청
        </button>
      </div> */}
      {isShowAll && <Modal setIsShowAll={setIsShowAll} />}
    </>
  );
};

export default Result;
