import "./App.css";
import { SideBar } from "./component/Nav/SideBar";
import Mainpage from "./page/Mainpage";
import { MenuItems } from "./component/Nav/MenuItem";
import { Link } from "react-router-dom";
import Navmain from "./component/Nav/Navmain";
function App() {
  return (
    <div>
      <Mainpage />

      <Navmain />
    </div>
  );
}

export default App;
