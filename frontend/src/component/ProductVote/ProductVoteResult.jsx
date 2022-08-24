import React from "react";
import graybox from "../../assets/GrayRectangle.png";
import ShareSNS from "../Share/ShareSNS";
import "./ProductVoteResult.css";
const ProductVoteResult = () => {
  return (
    <div className="voteresult_layout">
      <div className="voteresult">
        <div className="voteresult_title">
          <p className="product_titletext">백수도 템빨</p>
          <div className="product_subtitletext">
            <p>나만의 백수템을 투표해보자</p>
            <p className="vote_subtitletext1">투표를 통해 1등을 한 굿즈는</p>
            <p className="vote_subtitletext2">제작 될 예정입니다.</p>
          </div>
          <h1>1등</h1>
        </div>
        <div className="votebox">
          <img src={graybox} alt="graybox" className="votebox" />
        </div>
        <div className="SNS">
          <ShareSNS />
        </div>
      </div>
    </div>
  );
};

export default ProductVoteResult;
