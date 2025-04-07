import ReactDOM from "react-dom";
import Main from "./Main";
import TagManager from "react-gtm-module";
const tagManagerArgs = {
    gtmId: "GTM-MSKFTKM",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<Main />, document.getElementById("root"));
