import React from "react";

import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import waiting from "../../images/waiting.gif";

const BeforeResult = (props) => {
  // const history = useHistory();
  const navigate = useNavigate();

  const { select } = props.location.state;

  // React.useEffect(() => {
  //   axios
  //     .get("http://api.catchup.shop/result", {
  //       params: {
  //         result_array: select.join("_"),
  //       },
  //     })
  //     .then((res) => {
  //       sessionStorage.setItem("data", JSON.stringify(res.data.data));
  //       setTimeout(() => {
  //         navigate("/result");
  //       }, 4000);
  //     })
  //     .catch((error) => {
  //       console.dir(error);
  //     });
  // }, []);

  return (
    <>
      {/* <Header isBack={false} /> */}
      <div className="h3Container">
        <img src={waiting} width="290px" height="250px" alt="img" />
        <h3 className="resultH3">결과를 분석하고 있어요</h3>
      </div>
    </>
  );
};

export default BeforeResult;
