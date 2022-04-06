import { SideBar } from "./SideBar";

import { MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";

const Navmain = () => {
  return (
    <div>
      <SideBar width={300} height={"100vh"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url} element={item.element}>
                {item.title}
              </a>
            </li>
          );
        })}
      </SideBar>
    </div>
  );
};

export default Navmain;
