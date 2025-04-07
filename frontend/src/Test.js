import React from "react";
import { useHistory } from "react-router-dom";
import ProgressBar from "../elements/Progress";

import Q1 from "../images/questionNum/Q1.png";
import Q2 from "../images/questionNum/Q2.png";
import Q3 from "../images/questionNum/Q3.png";
import Q4 from "../images/questionNum/Q4.png";
import Q5 from "../images/questionNum/Q5.png";
import Q6 from "../images/questionNum/Q6.png";
import Q7 from "../images/questionNum/Q7.png";
import Q8 from "../images/questionNum/Q8.png";
import Q9 from "../images/questionNum/Q9.png";
import Q10 from "../images/questionNum/Q10.png";
import Q11 from "../images/questionNum/Q11.png";
import Q12 from "../images/questionNum/Q12.png";

import q1 from "../images/question/qw1.png";
import q2 from "../images/question/qw2.png";
import q3 from "../images/question/qw3.png";
import q4 from "../images/question/qw4.png";
import q5 from "../images/question/qw5.png";
import q6 from "../images/question/qw6.png";
import q7 from "../images/question/qw7.png";
import q8 from "../images/question/qw8.png";
import q9 from "../images/question/qw9.png";
import q10 from "../images/question/qw10.png";
import q11 from "../images/question/qw11.png";
import q12 from "../images/question/qw12.png";

import Header from "../elements/Header";

var select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const Test = (props) => {
  const history = useHistory();
  const [step, setStep] = React.useState(0);
  const [time, setTime] = React.useState(false);
  const questionNum = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12];
  const question = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];
  const wid = [185, 240, 275, 267, 229, 260, 298, 307, 276, 210, 210, 254];
  const hei = [45, 20, 45, 70, 45, 70, 45, 70, 70, 45, 45, 70];
  const answerYes = [
    "나에 대해 아직은 잘 모르겠어요.",
    "하고 싶은 일이 있어요.",
    "참여해본 경험이 있어요.",
    "어떤 직업이 나에게 맞는지는 잘 모르겠어요.",
    "잘 모르겠어요.",
    "제가 하고 싶은 분야에 대해 잘 모르겠어요.",
    "희망 직업에서 어떤 일을 하는지 잘 모르겠어요.\u00A0 (아직 희망 직업 분야가 없어요.)",
    "\u00A0\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 하고 싶은 일을 위해 직접적으로 \u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 \u00A0시도해본 적이 있어요.",
    "\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0아직 실무 경험은 없어요.  \u00A0 \u00A0 \u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 (아직 희망 직업 분야가 없어요.)",
    "잘 모르겠어요.",
    "취업 관련 트렌드에 대해서는 잘 모르겠어요.",
    "당장 취업을 위한 스킬이 필요해요.",
  ];
  const answerNo = [
    "나에 대해서 잘 알고있어요.",
    "잘 모르겠어요.",
    "아직은 경험이 없어요.",
    "나에게 맞는 직업이 무엇인지 잘 알고있어요.",
    "알고있어요.",
    "어떤 분야가 나에게 적합한지 알고있어요.",
    "희망 직업이 어떤 일을 하는지 잘 알고있어요.",
    "\u00A0 \u00A0 \u00A0 \u00A0아직 직접적인 시도를 해본적은 없어요.   \u00A0 \u00A0 \u00A0 \u00A0  (아직 희망 직업 분야가 없어요.)",
    "희망 직무에 대한 실무 경험이 있어요.",
    "알고있어요.",
    "취업 관련 트렌드에 대해 잘 알고있어요.",
    "아직 진로에 대해 준비하고 알아가는 중이에요.",
  ];
  React.useEffect(() => {
    setTime(true);
  }, [time]);
  const onClick = (num) => {
    setTime(false);
    if (step < 11) setStep(step + 1);
    else if (step === 11) {
      history.push({
        pathname: "/wait",
        state: { select: select },
      });
    }
    select[step] = num;
  };

  return (
    <>
      {/* <Menu /> */}
      <Header isBack={true} step={step} setStep={setStep} />
      <ProgressBar width={300} percent={step / 11} />
      {time && (
        <div id="test">
          {step < 9 ? (
            <img
              className="testQusetionNum"
              src={questionNum[step]}
              alt="img"
              width="85px"
              height="45px"
            ></img>
          ) : (
            <img
              className="testQusetionNum"
              src={questionNum[step]}
              alt="img"
              width="105px"
              height="45px"
            ></img>
          )}
          <div className="testQuestionContainer">
            <img
              className="testQusetion"
              src={question[step]}
              alt="img"
              width={wid[step]}
              height={hei[step]}
            ></img>
          </div>
          <button
            className="testAnswer"
            onClick={() => {
              onClick(1);
            }}
          >
            {answerYes[step]}
          </button>
          <button
            className="testAnswer"
            onClick={() => {
              onClick(0);
            }}
          >
            {answerNo[step]}
          </button>
        </div>
      )}
    </>
  );
};
export default Test;
