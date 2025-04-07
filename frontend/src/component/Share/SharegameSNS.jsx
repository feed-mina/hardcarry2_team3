import React, { useEffect } from "react";

import "./sharediarySNS.css";
import kakao from "../../assets/kakaoshare.png";

import link from "../../assets/linkshare.png";

const SharediarySNS = () => {
  const url = window.location.href; //현재 url가져오기
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
          "#일당백프로젝트 #백런스게임 #게임 #백수커뮤니티 #청년이룸 #구로청년이룸  #디노 #백수 #일기장 #게임 #스토리 ",
        imageUrl: "https://ifh.cc/g/KXnbbS.jpg",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      // social: {
      //   likeCount: 286,
      //   commentCount: 45,
      //   sharedCount: 845,
      // },
      buttons: [
        {
          title: "백수라면 참을수 없는 게임, GO GO!",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        // {
        //   title: "앱으로 보기",
        //   link: {
        //     mobileWebUrl: url,
        //     webUrl: url,
        //   },
        // },
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
        <div className="diary_kakao">
          <img
            id="game_kakao"
            className="shareIcon"
            src={kakao}
            alt="kakaotalk"
            width="65px"
            height="65px"
            onClick={shareKakao}
          />
        </div>
        <div className="gme_link" id="game_link">
          <img
            id="game_link"
            src={link}
            onClick={() => doCopy("http://www.oneto100.shop/diary/game")}
          />
        </div>
      </div>
    </div>
  );
};

export default SharediarySNS;
