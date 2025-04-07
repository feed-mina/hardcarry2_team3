import React, { useState, useEffect, useRef } from "react";
import { Cookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import styles from "./GameResult.module.css";

import SharegameSNS from "../Share/SharegameSNS";
import GameModal from "../../elements/Modal/Modalgame";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
import GameCommentList from "./GameList";
import clipboard from "../../assets/clipboard.png";
import footer from "../../assets/footer.png";

const Total = styled.div`
  font-family: CookieRun-Regular;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  background: linear-gradient(135deg, #ff5aa4 0%, #ffc958 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const ChoiceContainer = styled.div`
  width: 100%;
  display: flex;
  width: 314px;
  height: 32px;
  border: 1px solid #868e96;
  box-sizing: border-box;
  border-radius: 24px;
  margin-bottom: 8px;
`;

const ChoiceA = styled.div`
    all: unset;
    background: #868e96;
    border-radius: 24px;
    width: 75%;
    height: 100%;
    width: {rateA}%
    margin-bottom: 8px;
    box-sizing: border-box;
  `;
const ChoiceAON = styled.div`
 all: unset;
    border-radius: 24px;
    width: 75%;
    height: 100%;
    width: {rateA}%
    margin-bottom: 8px;
    box-sizing: border-box;
    background: linear-gradient(135deg, #ff5aa4 0%, #ffc958 100%);
    transition: all 0.3s ease-in-out;
    
`;
const ChoiceB = styled.div`
    all: unset;
    background: #868e96;
    border-radius: 24px;
    width: 80%;
    width: {rateB}%;
    height: 100%;
    margin-bottom: 8px;
    box-sizing: border-box;
  
  `;

const ChoiceBON = styled.div`
    all: unset;
 
    border-radius: 24px;
    width: 80%;
    width: {rateB}%;
    height: 100%;
    margin-bottom: 8px;
    box-sizing: border-box;
     background: linear-gradient(135deg, #ff5aa4 0%, #ffc958 100%);
    transition: all 0.3s ease-in-out;
  `;

const GameResult = (back_balance, props) => {
  const [GamemodalOpen, setGameModalOpen] = useState(false);

  const navigate = useNavigate();
  const cookies = new Cookies();
  const INITIAL_VALIES = {
    nickname: null,
    content: null,
  };

  useEffect(async () => {
    await fetch("http://3.35.152.195/api/balance/balanceResult", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResults(data.data);
      });
  });
  const { state } = useLocation();
  const [values, setValues] = useState(INITIAL_VALIES);
  const [result, setResults] = useState([]);
  const [counter, setCounter] = React.useState(props.balance_type);

  const cntA = state.select === 0;
  const cntB = state.select === 1;
  const total = cntA + cntB;

  const openGameModal = async (pages) => {
    if (values.nickname == null || values.content == null) {
      alert("닉네임과 내용을 모두 채워주세요!");
      return;
    }
    const response = await fetch(
      "http://3.35.152.195/api/balance/createReply",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          balance_name: values.nickname,
          balance_content: values.content,
          balance_type: cookies.get("balance_type"),
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setGameModalOpen(true);
        //방금 쓴 거 보이게 해야함
      });
  };

  const closeModal = () => {
    setGameModalOpen(false);
  };
  //       .then(
  //         (response) => console.log(response)
  // );
  //modal창 오픈이라던가 기능 주고
  // 방금 쓴 글 포함하게 리렌더링하기

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  async function handleInputChange(e) {
    const { name, value } = e.target;
    handleChange(name, value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", values.content);
    formData.append("nickname", values.nickname);
    openGameModal();
  };
  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector(".card")).then((blob) => {
      saveAs(blob, "gameresult.png");
    });
  };

  return (
    <div className={styles.gameresult_layout}>
      {props.counter}
      <div className="card">
        <div className={styles.game_title}>백런스게임</div>
        <div className={styles.game_subtitle}>
          백수라면 참을 수 없는 게임
          <br />단 한번의 최선의 선택, 차악의 선택 골라보자
        </div>
        <div className={styles.gameresult_line}>
          <div className={styles.bar_layout}>
            <ChoiceContainer>
              {state.select === 0 ? (
                <ChoiceAON>
                  <span className={styles.barA}></span>{" "}
                </ChoiceAON>
              ) : (
                <ChoiceA>
                  <span className={styles.barA}></span>{" "}
                </ChoiceA>
              )}

              {result.rateA}
            </ChoiceContainer>
            {state.select === 0 ? (
              <Total>
                <div>A : 나를 죽도록 싫어하는 원수와 면접 스터디</div>- 당신과{" "}
                {result.total}명이 같은 선택을 했습니다.
              </Total>
            ) : null}
            <ChoiceContainer>
              {state.select === 1 ? (
                <ChoiceBON>
                  <span className={styles.barB}></span>{" "}
                </ChoiceBON>
              ) : (
                <ChoiceB>
                  <span className={styles.barB}></span>{" "}
                </ChoiceB>
              )}
              {/* <ChoiceB>
                <span className={styles.barB}></span>
              </ChoiceB>
              {result.rateB} */}
            </ChoiceContainer>{" "}
            B : 세상에서 제일 친한 친구와 함께 최종 면접
            {state.select === 1 ? (
              <Total>- 당신과 {result.total}명이 같은 선택을 했습니다. </Total>
            ) : null}
          </div>
        </div>{" "}
        <div className={styles.shareSNS}>
          <span className={styles.SNS_header}>친구에게 공유하기</span>
          <div className={styles.snsbutton}>
            <SharegameSNS />{" "}
            {/* <button className="downBtn" onClick={onDownloadBtn}> </button> */}
            <img
              src={clipboard}
              className={styles.game_save}
              onClick={onDownloadBtn}
              id="game_save"
            />
          </div>
        </div>
      </div>
      <div className={styles.gameresult_gamecommentlayout}>
        <form className="Form" onSubmit={handleSubmit}>
          <div className={styles.submitgamescope}>
            <div className={styles.gamecommentnickname}>
              닉네임
              <input
                className={styles.gamecomment_nickname}
                name="nickname"
                value={values.nickname}
                onChange={handleInputChange}
                placeholder="닉네임을 입력해 주세요. (최대 8글자)"
              />{" "}
            </div>
            <div className={styles.gamecomment_text}>
              <textarea
                className={styles.gamecomment_textarea}
                name="content"
                value={values.content}
                onChange={handleInputChange}
                placeholder="&#13;&#10; 덧글 쓰기"
              />
            </div>
            <button
              className={styles.gamecommentsubmitbutton}
              onClick={handleSubmit}
              id="game_write"
            >
              입력
            </button>
            <GameModal
              open={GamemodalOpen}
              close={closeModal}
              header="백수의 일기장"
              className={styles.modallayout}
            >
              <div className={styles.modalline}>
                <h1 className={styles.modaltitle}>참 잘했어요!</h1>
                <main> {props.children} </main>
                <img src={footer} className={styles.footer} />
                <p className={props.finisheddiary}>
                  일기장 작성이 완료 되었습니다.
                </p>
              </div>
            </GameModal>
          </div>{" "}
        </form>
      </div>
      <GameCommentList />
    </div>
  );
};

export default GameResult;
