import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./shareSNS.css";
import kakao from "../../assets/kakaoshare.png";

import link from "../../assets/linkshare.png";

const ShareSNS = (state) => {
  const kakaourl = window.location.state.result.result.type_id;
  useEffect(() => {
    window.localStorage.setItem(JSON.stringify(state.result.result.type_id));
  }, [state.result.result.type_id]);

  // const url = window.location.href; //현재 url가져오기
  useEffect(() => {
    initKakao(); //
  }, []);

  //자바스크립트키로 카카오 init
  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("13ce2c4185e1fe0707553109dcf25bb2");
        // kakao.init("process.env.REACT_APP_KAKAO_TOKEN");
      }
    }
  };

  //버튼을 누르면 실행되는 함수
  const shareKakao = () => {
    //이부분이 매우 헷갈림 여러 사이트를 참고했는데 이 sendDefault부분을 잘 봐야한다.
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "일당백프로젝트",
        description:
          "#일당백프로젝트 #청년이룸 #구로청년이룸  #디노 #백수 #일기장 #게임 #스토리 ",
        imageUrl: "https://ifh.cc/g/KXnbbS.jpg",
        link: {
          mobileWebUrl: "http://3.35.152.195/api/test/getResult?id=gihun",
          webUrl: kakaourl,
        },
      },

      buttons: [
        {
          title: "디노와함께 백수탈출",
          link: {
            mobileWebUrl: kakaourl,
            webUrl: kakaourl,
          },
        },
      ],
    });
  };

  const doCopy = (text) => {
    // 흐름 1.
    if (!document.queryCommandSupported("copy")) {
      return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }
    // 흐름 2.
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.position = "fixed";
    // 흐름 3.
    document.body.appendChild(textarea);
    // focus() -> 사파리 브라우저 서포팅
    textarea.focus();
    // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
    textarea.select();
    // 흐름 4.
    document.execCommand("copy");
    // 흐름 5.
    document.body.removeChild(textarea);
    alert("클립보드에 복사되었습니다.");
  };
  return (
    <div className="sharesnscomponent">
      <div className="kakaoandclipboard">
        <div className="kakao">
          <img
            id="test_kakao"
            className="shareIcon"
            src={kakao}
            alt="kakaotalk"
            width="65px"
            height="65px"
            onClick={shareKakao}
          />
        </div>
        <div className="clipboard">
          <img
            id="test_link"
            src={link}
            onClick={(state) => doCopy(state.result.result.type_id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ShareSNS;
