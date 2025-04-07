import React from "react";
import styles from "./OnTest.module.css";
import preview from "../../assets/preview.png";
import { Link, useNavigate } from "react-router-dom";
import euiroomlogo from "../../assets/euiroomlogo.png";
import gurologo from "../../assets/gurologo.png";

var select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var noselect = 1;
var yesselect = 0;

export const OnTest = () => {
  const navigate = useNavigate();

  //   const history = useHistory();
  const [step, setStep] = React.useState(0);
  const [time, setTime] = React.useState(false);
  const questionmum = [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
  ];
  const questionlist = [
    "나는 나에 대해 얼마나 알고 있나요?",
    "아침에 일어나면 무엇을 하나요?",
    "같이 취업 준비를 하던 친구가 취업했다고 \n 인스타그램에 자랑 글을 올렸다. 나의 반응은?",
    " 계획대로 공부를 해야 하는 날이지만, \n 날씨가 너무 좋다. 나의 선택은?",
    "2곳의 회사에서 합격 연락을 받았다. \n 나는 어떤 회사를 선택하게 될까?",
    "만약 100만원이 주어진다면, \n 내가 할 행동은?",
    "나는 리더형? 팔로우형?",
    "어떤 유형의 동료와 더 일하기 싫은가요?",
    "내가 더 자신있는 알바는?",
    "코로나 시대를 살아가면서 더 많이 느낀 \n 나의감정은?",
  ];
  const answerYes = [
    "내가 나를 모르면 누가 알아?   \n무엇을 좋아하고, 잘하는지 알고 있다. ",
    "천천히! 침대에 누워서 핸드폰을 하거나 \n음악을 들으며 서서히 잠에서 깬다.",
    "친구가 얼마나 고생했는지 알기에 \n기쁜 맘에 좋아요를 누르고 축하해준다. ",
    "공부는 내일 해도 되지만,\n 이렇게 좋은 날씨는 오늘 뿐. 놀러가자!",
    "좋아하고 재밌게 할 수 있는 일이지만, \n돈을 적게 주어서 고민이 되는 회사 ",
    "사고 싶었던 것들을 장바구니에 한가득 담고,\n 흐뭇하게 미소 짓는다. ",
    "알뜰살뜰하게 모든 팀원들을 살펴주는 \n든든한 리더형",
    "성격이 좋아 같이 있으면 즐겁지만, \n업무를 잘 못해서  답답한 동료",
    "한번 해보면 무슨 알바든 끄떡없을\n 음식점 서빙 알바 ",
    "친구들이랑 코인 노래방도 못 가고\n 맛있는 것도 자주 먹지 못해 슬프다. ",
  ];
  const answerNo = [
    "무엇을 좋아하고, 잘하는지 모르겠고.. \n ‘나’라는 사람을 공부해가는 중이다. ",
    "빨리빨리! 알람에 눈을 뜨자마자 \n 씻거나 밥을 먹으며 잠에서 깬다.",
    "축하해주고 싶지만 내 상황을 생각하면 \n 마냥 기쁘진 않아, 못 본 척 피드를 내린다.",
    "그래도 할 것을 끝내고 놀아야 마음이 편하지. \n 일단 공부 먼저! ",
    "싫어하고 재미없는 일이지만 \n 돈을 많이 주어서 마음이 흔들리는 회사",
    "더 풍족한 미래를 위해 저축을 하고, \n 나 자신을 칭찬한다. ",
    "주어진 역할을 충실히 해내며 \n 팀의 성장을 돕는 팔로우형 ",
    "성격이 좋지도 않고, 친하지도 않지만 \n 업무 실력은 끝장인 동료",
    "듣기만 해도 마음이 차분해지는 \n 독서실 총무 알바",
    "집에 있을 시간이 늘고, 약속을 \n 취소할 수 있는 핑계가 생겨 기쁘다.",
  ];
  React.useEffect(() => {
    setTime(true);
  }, [time]);
  const onClick = (num) => {
    setTime(false);
    if (step < 9) setStep(step + 1);
    else if (step === 9) {
      navigate("/wait", { state: { select: select } });
    }
    select[step] = num;
  };
  const previewOnClick = (num) => {
    setTime(false);
    if (step < 9) {
      setStep(step - 1);
    }
    select[step] = num;
  };

  return (
    <div className={styles.Ontest_layout}>
      {time && (
        <div className={styles.questionandanswer}>
          <div className={styles.question}>
            <div className={styles.question_scope}>
              <p className={styles.question_num}>{questionmum[step]}</p>
              <p className={styles.question_list}>{questionlist[step]} </p>
            </div>

            <div className={styles.chociebutton_scope}>
              {" "}
              <div className={styles.button1}>
                <button
                  className={styles.choicebutton1}
                  onClick={() => {
                    onClick(yesselect);
                  }}
                  id="question_up"
                >
                  {answerYes[step]}
                </button>{" "}
              </div>
              <div className={styles.betweenbutton}></div>
              <div className={styles.button2} id="question_down">
                {" "}
                <button
                  className={styles.choicebutton2}
                  onClick={() => {
                    onClick(noselect);
                  }}
                >
                  {answerNo[step]}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.preview_scope}>
            {step !== 0 && (
              <button
                className={styles.previewbutton}
                onClick={() => {
                  previewOnClick();
                }}
                id="question_down"
              >
                <img src={preview} alt="preview" className={styles.preview} />
              </button>
            )}
          </div>
          <div className={styles.logo_scope}>
            <div className={styles.euiroomlogo}>
              <a href="http://www.youtheroom.kr/" target="_blank">
                {" "}
                <img
                  src={euiroomlogo}
                  alt="euiroomlogo"
                  className={styles.euiroomlogoimg}
                />
              </a>
            </div>
            <div className={styles.gurologo}>
              <a href="https://www.guro.go.kr/www/index.do" target="_blank">
                {" "}
                <img
                  src={gurologo}
                  alt="gurologo"
                  className={styles.gurologoimg}
                />
              </a>
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
};
