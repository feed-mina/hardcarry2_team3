import React from "react";
import { useNavigate } from "react-router-dom";

import Q1 from "../../images/questionNum/Q1.png";
import Q2 from "../../images/questionNum/Q2.png";
import Q3 from "../../images/questionNum/Q3.png";
import Q4 from "../../images/questionNum/Q4.png";
import Q5 from "../../images/questionNum/Q5.png";
import Q6 from "../../images/questionNum/Q6.png";

import q1 from "../../images/question/qw1.png";
import q2 from "../../images/question/qw2.png";
import q3 from "../../images/question/qw3.png";
import q4 from "../../images/question/qw4.png";
import q5 from "../../images/question/qw5.png";
import q6 from "../../images/question/qw6.png";

import ProgressBar from "../Progress/Progress";

import "./OnTest.css";

var select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const OnTestForm = (props) => {
  const navigate = useNavigate();

  //   const history = useHistory();
  const [step, setStep] = React.useState(0);
  const [time, setTime] = React.useState(false);

  const questionNum = [Q1, Q2, Q3, Q4, Q5, Q6];
  const question = [q1, q2, q3, q4, q5, q6];
  const wid = [185, 240, 275, 267, 229, 260];
  const hei = [45, 20, 45, 70, 45, 70];

  const answerYes = [
    "나에 대해 아직은 잘 모르겠어요.",
    "하고 싶은 일이 있어요.",
    "참여해본 경험이 있어요.",
    "어떤 직업이 나에게 맞는지는 잘 모르겠어요.",
    "잘 모르겠어요.",
    "제가 하고 싶은 분야에 대해 잘 모르겠어요.",
  ];
  const answerNo = [
    "나에 대해서 잘 알고있어요.",
    "잘 모르겠어요.",
    "아직은 경험이 없어요.",
    "나에게 맞는 직업이 무엇인지 잘 알고있어요.",
    "알고있어요.",
    "어떤 분야가 나에게 적합한지 알고있어요.",
  ];

  React.useEffect(() => {
    setTime(true);
  }, [time]);
  const onClick = (num) => {
    setTime(false);
    if (step < 5) setStep(step + 1);
    else if (step === 5) {
      navigate("/wait", { state: { select: select } });
      // history.push({
      //         pathname: "/wait",
      //         state: { select: select },
      //       });
    }
    select[step] = num;
  };

  return (
    <div className="layout">
      <div className="OnTest">
        <div className="progressbar">
          <ProgressBar width={300} percent={step / 11} />
        </div>
        {time && (
          <div id="test">
            <img
              className="testQusetionNum"
              src={questionNum[step]}
              alt="img"
              width="85px"
              height="45px"
            ></img>

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
        <div className="footermargin"></div>
      </div>{" "}
    </div>
  );
};
export default OnTestForm;
