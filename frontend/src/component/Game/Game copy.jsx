import React, { useEffect, useState } from "react";
import gamedino from "../../assets/gamemaindino.png";
import styles from "./Game.module.css";
import { Link, useNavigate } from "react-router-dom";
var select = [0, 0];
var noselect = 1;
var yesselect = 0;

const INITIAL_VALIES = {
  buttona: 0,
  buttonb: 0,
  total: 0,
};
const Game = () => {
  const navigate = useNavigate();

  const [Abuttonnum, setAbuttonnum] = useState(0);
  const [Bbuttonnum, setBbuttonnum] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const togglebutton = async (a, balance_type) => {
    const changebuttonnum = total.findIndex(
      (v) => v.balance_type === balance_type
    );
    const changebutton = total.find((v) => v.balance_type === balance_type);
    changebutton.types = !changebutton.types;

    await fetch(
      "3.35.152.195/api/balance/selectBalance?balance_type=," + balance_type,
      {
        method: "GET",
        headers: {
          "Conent-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          navigate("/gameresult", { state: { result: data.data } });
        }, 4000).then((data) => {
          console.log(data.data);
          total[changebuttonnum] = changebutton;
          setTotal([...total]);
        });
      });
  };

  const OnClickGame = (response) => {};

  return (
    <div className={styles.game_layout}>
      <div className={styles.game_title}>백런스게임</div>
      <div className={styles.game_subtitle}>
        백수라면 참을 수 없는 게임
        <br />단 한번의 최선의 선택, 차악의 선택 골라보자
      </div>
      <div>
        <img className={styles.game_image} src={gamedino} alt="디노캐릭터" />{" "}
      </div>

      {total.map((balance, index) => (
        <div className={styles.gamebutton_layout}>
          <div className={styles.game_butttonA}>
            <button
              className={styles.game_buttonitem}
              onClick={() => {
                togglebutton(balance.types, balance.balance_type);
              }}
              id="game_buttonA"
            >
              나를 죽도록 싫어하는 원수와 <br />
              면접 스터디
            </button>
          </div>
          VS
          <div className={styles.game_butttonB} id="question_down">
            <button
              className={styles.game_buttonitem}
              onClick={(balance) => {
                togglebutton(balance.types, balance.balance_type);
              }}
            >
              {" "}
              세상에서 제일 친한 친구와
              <br />
              함께 최종 면접
            </button>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default Game;
