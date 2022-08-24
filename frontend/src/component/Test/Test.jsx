import React from "react";
import styles from "./Test.module.css";
import dinotest from "../../assets/dinotest.png";
import testbutton from "../../assets/testbutton.png";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div className={styles.test_layout}>
      <div className={styles.testheader}>
        <div className={styles.testline}>
          <p className={styles.header1}>백수 삶의 현장</p>
          <p className={styles.header2_1}>영화속 백수 캐릭터로 살펴 본 </p>
          <p className={styles.header2_2}>나의 백수 성향은?</p>
        </div>
        <div>
          <div className={styles.testdino}>
            <img src={dinotest} alt="dino1" className={styles.testdinoimg} />{" "}
          </div>
          <div className={styles.test_start}>
            <Link to="/ontest">
              {" "}
              <img id="test_start"
                src={testbutton}
                alt="testbutton"
                className={styles.testbuttonimg}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
