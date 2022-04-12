import link from "../../assets/share_link.png";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";
import React from "react";
const copyToClipboard = (val) => {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
};

const copy = (func) => {
  copyToClipboard("https://bit.ly/캐취업");
  func("complete");
};
const Result = (props) => {
  const navigate = useNavigate();
  const [isShowAll, setIsShowAll] = React.useState(false);
  const [ToastStatus, setToastStatus] = React.useState(false);
  const ToastMsg = "클립보드에 URL이 복사되었습니다.";
  const showData = JSON.parse(sessionStorage.getItem("data"));
  console.log(showData);
  const handleToast = () => {
    if (!ToastStatus) {
      setToastStatus(true);
    }
  };

  React.useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => {
        setToastStatus(false);
      }, 1000);
    }
  }, [ToastStatus]);
  return (
    <div>
      <div>
        <input type="hidden" id="urlInput" className="url-input" />
        <img
          className="shareIcon"
          src={link}
          alt="link"
          width="65px"
          height="65px"
          onClick={() => {
            copy(handleToast);
          }}
        ></img>
        {ToastStatus && (
          <>
            <Toast msg={ToastMsg} />
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
