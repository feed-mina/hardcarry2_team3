import React from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const Capture = () => {
  // 컴포넌트 다운로드 함수
  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector(".card")).then((blob) => {
      saveAs(blob, "card.png");
    });
  };

  return (
    <li className="card">
      <h1>카드 컴포넌트</h1>
      <button className="downBtn" onClick={onDownloadBtn}>
        다운로드 버튼
      </button>
    </li>
  );
};

export default Capture;
