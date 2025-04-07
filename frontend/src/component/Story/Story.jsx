import React from "react";
import styles from "./Story.module.css";
import story1 from "../../assets/story1.png";
import story2 from "../../assets/story2.png";
import story3 from "../../assets/story3.png";
import story4 from "../../assets/story4.png";
import gotestbutton from "../../assets/gotestbutton.png";
import { Link } from "react-router-dom";
const Story = () => {
  return (
    <div className={styles.story_layout}>
      <div className={styles.story_line}>
        <img src={story1} alt="story1" className={styles.story1} />
        <img src={story2} alt="story1" className={styles.story2} />
        <img src={story3} alt="story1" className={styles.story3} />
        <img src={story4} alt="story1" className={styles.story4} />
        <div className={styles.sotry_textline}>
          <p>과연 디노는 무사히 백수탈출을</p>
          <p>할 수 있을까?</p>
        </div>
        <Link to="/test">
          {" "}
          <img
            src={gotestbutton}
            alt="teststart"
            className={styles.teststart}
          />
        </Link>
      </div>
    </div>
  );
};

export default Story;
