import { SideBar } from "./SideBar";

import { MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";
import navline from "../../assets/navline.png";

import "./Navmain.css";
const Navmain = () => {
  return (
    <div className="layout">
      <SideBar width={250}>
        {MenuItems.map((item, index) => {
          return (
            <ul key={index}>
              <li>
                <a
                  className={item.cName}
                  href={item.url}
                  element={item.element}
                >
                  <h3>🤸‍♂️ {item.title}</h3>{" "}
                </a>
              </li>
              <img className="navlineimg" src={navline} alt="line" />
            </ul>
          );
        })}
      </SideBar>
    </div>
  );
};

export default Navmain;
