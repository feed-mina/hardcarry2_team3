import React from "react";
import styles from "./EndingStory.module.css";
import story1 from "../../assets/Endstory1.png";
import story2 from "../../assets/Endstory2.png";
import story3 from "../../assets/Endstory3.png";
import story4 from "../../assets/Endstory4.png";

import Endstorybutton from "../../assets/Endstorybutton.png";
import { Link } from "react-router-dom";
const EndingStory = () => {
  return (
    <div className={styles.story_layout}>
      <div className={styles.story_line}>
        <img src={story1} alt="story1" className={styles.story1} />
        <img src={story2} alt="story1" className={styles.story2} />
        <img src={story3} alt="story1" className={styles.story3} />
        <img src={story4} alt="story1" className={styles.story4} />
        <div className={styles.sotry_textline}>
          <p>우당탕탕 디노의</p>
          <p>마스코트 생활이 궁금하다면?</p>
        </div>

        <a href="http://www.youtheroom.kr/ ">
          {" "}
          <img
            src={Endstorybutton}
            alt="teststart"
            className={styles.story_room}
          />
        </a>
      </div>
    </div>
  );
};

export default EndingStory;
