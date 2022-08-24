import React, { useEffect, useState } from "react";
import gamedino from "../../assets/gamemaindino.png";
import styles from "./Game.module.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

var select = [0, 0];
var noselect = 1;
var yesselect = 0;

const Game = (props, balance_type) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { state } = useLocation(props);
  const [counter, setCounter] = React.useState(0);

  const onClick = async (props, balance_type) => {
    setCounter(counter + 1);
    await fetch(
      "http://3.35.152.195/api/balance/selectBalance?balance_type=" +
        balance_type,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        cookies.set("balance_type", balance_type);
        // navigate("/gameresult", { state: { select: select } });
      });
  };

  const onNumberClick = (balance_type) => {
    setCounter(counter + 1);
      cookies.set("balance_type", balance_type);
    navigate("/gameresult", { state: { select: balance_type } });
  };
  useEffect(() => {
    const selected = cookies.get("balance_type");
    // if (selected != null) {
    //   navigate("/gameresult");
    // }
  });
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
      {/* {items.map((balance, back_balance, balance_type, value) => ( */}
      <div className={styles.gamebutton_layout}>
        <div className={styles.game_butttonA}>
          <button
            className={styles.game_buttonitem}
            onClick={(counter) => {
              onClick("A");
              onNumberClick(yesselect);
            }}
            id="game_a"
          >
            {/* {selectbalance.balance_type} */}
            나를 죽도록 싫어하는 원수와 <br />
            면접 스터디
          </button>
        </div>
        VS
        <div className={styles.game_butttonB} id="game_b">
          <button
            className={styles.game_buttonitem}
            onClick={(counter) => {
              onClick("B");
              onNumberClick(noselect);
            }}
          >
            {" "}
            세상에서 제일 친한 친구와
            <br />
            함께 최종 면접
          </button>
        </div>{" "}
      </div>
      {/* ))} */}
    </div>
  );
};

export default Game;
