import { SideBar } from "./Nav/SideBar";
import Mainpage from "../page/Mainpage";
import { MenuItems } from "./Nav/MenuItem";
import { Link } from "react-router-dom";
import Review from "./Review/Review";
import StartingPageContent from "../component/StartingPage/StartingPageContent";

import Navmain from "./Nav/Navmain";
import Mainpages from "../page/Mainpages";
function App() {
  return (
    <>
      <div className="map">
        <Mainpage />
      </div>{" "}
      <Navmain />{" "}
    </>
  );
}

export default App;
