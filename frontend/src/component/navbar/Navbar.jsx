import styles from "./navbar.module.css";
import { useState } from "react";
import sidelogo from "../../assets/sidebarlogo.png";
import dinoinstagram from "../../assets/dinoinstagram.png";
import euiruminstagram from "../../assets/euiruminstagram.png";
import menu from "../../assets/menu.png";
import header from "../../assets/headertext.png";
import navline from "../../assets/navline.png";
const Navbar = () => {
  const [isSideMenuActive, setSideMenuActive] = useState(false);
  return (
    <div className={styles.navbar}>
      {" "}
      <div className={styles.headerflex}>
        <button
          className={styles.view_detail}
          onClick={() => setSideMenuActive(!isSideMenuActive)}
          id="view"
        >
          <img src={menu} className={styles.sidemenuimg} alt="menuimg" />
        </button>{" "}
      </div>{" "}
      <a href="/">
        <div className={styles.headeflex2}>
          <img src={header} className={styles.headerimg} alt="menuimg" />
        </div>
      </a>
      <div
        className={
          styles.sidemenu + (isSideMenuActive ? styles.sidemenu.active : "")
        }
      >
        <div className={styles.sidemenuline}>
          {" "}
          <a href="/" className={styles.activea}>
            {" "}
            <div className={styles.titleimgfleximg}>
              <img src={sidelogo} alt="sidelogo" className={styles.sidelogo} />
            </div>
          </a>
          <div className={styles.sideflextextscope}>
            <a href="/story" className={styles.activea} type="s">
              <div className={styles.story_detail}>
                <p id="story_detail">디노스토리</p>
                {/* <img src={dinostory} alt="디노스토리" className="dinostory" /> */}
              </div>
            </a>{" "}
            <a href="/test" className={styles.activea} type="s">
              <div className={styles.test_detail}>
                <img src={navline} className={styles.headline} />
                <p id="test_detail">백수 삶의 현장</p>{" "}
                {/* <img src={title2} alt="백수삶의현장" className="twonav" /> */}
              </div>
            </a>
            <a href="/write" className={styles.activea} type="s">
              <div className={styles.diary_detail}>
                {" "}
                <img src={navline} className={styles.headline} />{" "}
                <p id="diary_detail">백수의 일기장</p>
                {/* <img src={treenav} alt="백수의일기장" className="treenav" /> */}
              </div>
            </a>{" "}
            <a href="/game" className={styles.activea} type="s">
              <div className={styles.diary_detail}>
                {" "}
                <img src={navline} className={styles.headline} />{" "}
                <p id="diary_game">백런스 게임</p>
                {/* <img src={treenav} alt="백수의일기장" className="treenav" /> */}
              </div>
            </a>{" "}
            <a href="/endstory" className={styles.activea} type="s">
              <div className={styles.endstory_detail}>
                {" "}
                <img src={navline} className={styles.headline} />{" "}
                <p id={"mascot_dino"}>마스코트 디노</p>
                {/* <img src={treenav} alt="백수의일기장" className="treenav" /> */}
              </div>
            </a>
          </div>{" "}
          <div className={styles.instagram_layout}>
            <div className={styles.sideinstagramscope} id="dino_insta">
              {" "}
              <a
                href="https://www.instagram.com/1dang100_dino"
                className={styles.activea}
                type="s"
                target="_blank"
              >
                <img
                  src={dinoinstagram}
                  alt="dinoinstagram"
                  className={styles.dino_insta}
                />
              </a>
            </div>
            <div className={styles.sideinstagramscope} id="youthroom_insta">
              <a
                href={"https://instagram.com/youtheroom?igshid=YmMyMTA2M2Y="}
                className={styles.activea}
                type="s"
                target="_blank"
              >
                <img
                  src={euiruminstagram}
                  className={styles.youtheroom_insta}
                  alt="dinoinstagram"
                />
              </a>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
