import React, { useEffect, useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

import styles from "./Result.module.css";
import mate1 from "../../assets/mate1.png";
import mate2 from "../../assets/mate2.png";
import mate3 from "../../assets/mate3.png";
import mate4 from "../../assets/mate4.png";
import mate5 from "../../assets/mate5.png";
import mate6 from "../../assets/mate6.png";
import Slider1 from "../../elements/Slide/Slider1";
import shareevent from "../../assets/shareevent.png";
import resultdino1 from "../../assets/resultdino1.png";
import resultdino2 from "../../assets/resultdino2.png";
import resultdino3 from "../../assets/resultdino3.png";
import resultdino4 from "../../assets/resultdino4.png";
import resultdino5 from "../../assets/resultdino5.png";
import resultdino6 from "../../assets/resultdino6.png";
import clipboard from "../../assets/clipboard.png";
import kakao from "../../assets/kakaoshare.png";
import link from "../../assets/linkshare.png";
import { useLocation } from "react-router-dom";

var select = [0, 0, 0, 0, 0, 0];
const Result = (props) => {
  const [resultstep, setResultStep] = React.useState(0);
  const [resulttime, setResultTime] = React.useState(false);
  const { state } = useLocation();
  const result = state.result.testResult;
  const like = state.result.resultLike;
  const dislike = state.result.resultDislike;
  const url = state.result.type_space_link;
  const goodmate = [mate1, mate2, mate4, mate5, mate6, mate3];
  const badmate = [mate2, mate3, mate5, mate3, mate2, mate4];

  const movieName = [
    " 은밀하게 위대하게",
    "오징어게임",
    "엑시트",
    "거침없이 하이킥",
    "지붕 뚫고 하이킥",
    "별에서 온 그대",
  ];
  const resultName = [
    "‘류환’",
    "‘기훈’",
    "‘용남’",
    "‘준하'",
    "‘광수’",
    "‘철수’",
  ];

  const result_main = [
    resultdino1,
    resultdino2,
    resultdino3,
    resultdino4,
    resultdino5,
    resultdino6,
  ];

  const resultcontent = [
    "‘류환’은 북한 최고 엘리트 요원이지만, 정체를 숨기고 동네 바보이자 백수로 살아가고 있죠. 북한에서 전달되는 명령 없어도, 원대한 사명을 안고 임무를 충실히 수행하고 있는데요. 당신 또한 꿈을 이루기 위해 꾸준히 잠재력을 갈고닦고 있군요. 곧 당신의 잠재력을 세상이 알아봐줄거에요.",
    "‘기훈’은 실직 후 456억 원이 걸린 게임에서 우승하는 캐릭터죠. 말도 안 되는 게임에서 그가 우승할 수 있었던 이유는 사람에 대한 믿음이었는데요. 타인이 의심되는 상황에서도 믿음을 보여 프런트맨조차 “당신이 살아남을 줄 몰랐습니다.”라고 말하기도 하죠. 자신과 사람에 대한 믿음으로 똘똘 뭉친 당신! 이런 믿음과 함께라면 웃을 수 있는 날은 멀지 않았으니, 현재에 대해 너무 걱정하지 마세요.",
    "자신을 보며 창피해하는 조카, 산악 동아리가 취업에 무슨 소용이냐며 구박하는 누나. 영화 엑시트에서는 ‘용남’의 자존감을 끌어내리는 사람들이 등장합니다. 하지만 자신만이 할 수 있고, 해야 하는 행동을 취해 사람들에게 큰 신뢰를 얻게 되죠. 위험에 처한 상황에서 자신의 능력을 발휘하는 진정한 능력자. 사람들에게 능력을 보여줄 날이 얼마 남지 않아 보여요!",
    "둥글둥글 순한 성격으로 모두와 살갑게 지내는 거침없이 하이킥의 ‘준하’. 일찍 명예퇴직을 당해 의사인 아내에게 주눅이 들기는 커녕 아내를 자랑스럽게 여기죠. 시끄러운 집 안에서 최소한의 평화를 추구하는 인물인데요. 소소한 행복을 누릴 줄 알고, 매사를 긍정적으로 바라보는 당신과 닮은 것 같습니다. 이런 태도라면 원하는 걸 금방 손에 쥘 수 있을 거예요.",
    "가수를 꿈꾸지만, 오디션을 보거나 기획사 대표님을 찾아가는 적극적인 모습을 보이지 않는 지붕 뚫고 하이킥 ‘광수’. 하지만 오락가락하는 주식판에서 386% 수익률을 챙긴 존버충으로 3개월치 밀린 방세도 내기도 하죠. 당신도 어쩌면 모르고 있는 재능이 숨겨져 있을 것 같은 느낌이 드네요. 한 번 곰곰이 생각해 보세요!",
    "만화방에서 거의 살다시피하는 백수 ‘철수’. 만화책에 과몰입하는 모습들이 한심해 보일 수도 있지만, 사람들의 고민을 진지하게 듣고 조언을 해주는 따뜻한 캐릭터입니다. 어쩌면 당신도 현실을 도피하지만, 사실은 현실에 대한 문제를 가장 관심이 많은 사람일 수도 있습니다. 서로 문제를 같이 해결해 줄 든든한 조력자가 되어주실래요?.",
  ];

  const goodmate_text = [
    "남한 최고..는 아니지만 전사 ",
    "인간미 넘치는 사람을 좋아하는",
    "북한 최고의 전사",
    "누구든 믿어줄 준비가 되어 있는",
    "사람들의 고민을 해결해주는",
    "자신을 주목해줄 때 가장 행복한",
  ];
  const goodmate_subtitle = [
    "엑시트 ‘용남’",
    "거침없이 하이킥 ‘준하’",
    "은밀하게 위대하게 ‘류환’",
    "오징어게임 ‘기훈’",
    "별에서 온 그대 ‘철수’",
    "지붕 뚫고 하이킥 \n ‘광수’",
  ];
  const badmate_text = [
    "호락호락하지 않은 (진짜) 바보",
    "꿈에 대한 노력이 조금 더 필요한",
    "소리 치는 걸 좋아하는",
    "파이팅이 부담스러운",
    "호락호락하지 않은 (진짜) 바보",
    "자신만의 계획이 정해져 있는",
  ];
  const badmate_subtitle = [
    "거침없이 하이킥\n  ‘준하’",
    "지붕 뚫고 하이킥 ‘광수’",
    "오징어게임 ‘기훈’",
    "지붕 뚫고 하이킥 ‘광수’",
    "거침없이 하이킥 ‘준하’",
    "은밀하게 위대하게 ‘류환’",
  ];

  const program_subtitle = [
    "능력 만땅인 너와 잘 어울리는 프로그램 \n 모두가 하드캐리",
    "믿음 만땅인 너와 잘 어울리는 프로그램 \n 미니인턴",
    "주도력 만땅인 너와 잘 어울리는 프로그램 \n D시리즈",
    "긍정 만땅인 너와 잘 어울리는 프로그램 \n 제로베이스",
    "꿈 만땅인 너와 잘 어울리는 프로그램 \n 아무튼, 기대",
    "공감 만땅인 너와 잘 어울리는 프로그램 \n 이루디 스터디",
  ];

  const golink = [
    "https://www.spacecloud.kr/space/25781",
    "https://booking.naver.com/booking/6/bizes/481843/items/3792500",
    "http://www.youtheroom.kr/sub01/sub01.php#none",
    "http://www.youtheroom.kr/sub01/sub01.php#none",
    "https://www.spacecloud.kr/space/25781",
    "http://www.youtheroom.kr/sub01/sub01.php#none",
  ];

  //////////////////////////////////////////////////////////
  const kakaourl = state.result.type_id;
  useEffect(() => {
    initKakao(); //
  }, []);

  //자바스크립트키로 카카오 init
  const initKakao = (state) => {
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
          mobileWebUrl: kakaourl,
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
  /////////////////////////////////////////////////////////
  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector(".test")).then((blob) => {
      saveAs(blob, "result.png");
    });
  };

  return (
    <div className={styles.testresult_layout}>
      <div className="test">
        <div className={styles.testreuslt_background}>
          <div className={styles.testresultheader}>
            <div className={styles.testresult_title}>
              {" "}
              <span> {result.type_from}</span>{" "}
            </div>
            <div className={styles.testresult_subtitle}>
              <span>{result.type_name}</span>
            </div>

            <div className={styles.testresult_scope}>
              <div className={styles.resultdino}>
                <img
                  src={result_main[resultstep]}
                  alt="testmainbox"
                  className={styles.result_testmainbox}
                />
                {/* <img
                  src={result.type_img}
                  alt="testmainbox"
                  className={styles.result_testmainbox}
                /> */}
              </div>
              <div className={styles.testresult_maincontent}>
                {/* {result.type_desc} */}
                {resultcontent[resultstep]}
              </div>
              <div className={styles.testresult_mate}>
                <div className={styles.testreult_goodmate}>
                  <h2 className={styles.goodmateline}> 최고 궁합</h2>
                  <div className={styles.goodmate_scope}>
                    <img
                      src={goodmate[resultstep]}
                      alt="matebox"
                      className="result_matebox"
                    />
                    <div className={styles.goodmate_scopetext}>
                      <p className={styles.goodmatetext}>
                        {/* {result.type_like_sub}{" "} */}
                        {goodmate_text[resultstep]}
                      </p>
                      <p className={styles.goodmatesubtitle}>
                        {/* {like.type_name} */}
                        {goodmate_subtitle[resultstep]}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.testreult_badmate}>
                  <h2 className={styles.badmateline}> 최악 궁합</h2>
                  <div className={styles.badmate_scope}>
                    <img
                      src={badmate[resultstep]}
                      alt="matebox"
                      className="result_matebox"
                    />
                    <div className={styles.badmate_scopetext}>
                      <p className={styles.badmatetext}>
                        {badmate_text[resultstep]}

                        {/* {result.type_dislike_sub}{" "} */}
                      </p>{" "}
                      <p className={styles.badmatesubtitle}>
                        {/* {dislike.type_name} */}
                        {badmate_subtitle[resultstep]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.testreult_share}>
                <div className={styles.testreult_share_scope}>
                  <h3 className={styles.testresult_share_maintitle}>
                    친구들에게 <br /> 결과 공유하기
                  </h3>
                  <div className={styles.snsbutton}>
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
                            onClick={() =>
                              doCopy("http://www.oneto100.shop/test")
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <img
                      src={clipboard}
                      className={styles.downBtn}
                      onClick={onDownloadBtn}
                    />
                  </div>
                  <img
                    src={shareevent}
                    alt="sharebox"
                    className={styles.result_sharebox}
                  />{" "}
                  <div className={styles.testreult_share_title}>
                    <p>#청년이룸 #일당백프로젝트</p>
                    <p> 해시태그로 인스타에 공유하신 분들께 한하여</p>
                    <p>추첨을 통해서 선물을 드립니다.</p>
                  </div>
                </div>
                <div className={styles.yourprogram}>
                  <h3 className={styles.programtitle}>
                    나에게 딱 맞는 청년이룸 속 공간은?
                  </h3>
                  <div className={styles.programline}>
                    <div className={styles.resultinslider}></div>
                    <Slider1 />
                  </div>
                  <p className={styles.programsubtitle}></p>
                </div>{" "}
              </div>
              <div className={styles.submitline}>
                <a
                  href={golink[resultstep]}
                  className={styles.activea}
                  target="_blank"
                >
                  <button alt="submitbutton" className={styles.ontestsubmit}>
                    버튼
                  </button>
                </a>{" "}
                {/* <a href={url} className={styles.activea} target="_blank">
                  <button alt="submitbutton" className={styles.ontestsubmit}>
                    {result.type_button}
                  </button>
                </a>{" "} */}
              </div>{" "}
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Result;
