import React, { Component, useEffect, useState } from "react";
import votebutton from "../../assets/votebutton.png";
import ProductList from "./ProductList";

import "./ProductVoteForm.css";
const ProductVoteForm = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="layout">
      <div className="ProductVoteForm">
        <div className="product_title">
          <p className="product_titletext">백수도 템빨</p>
          <div className="product_subtitletext">
            <p className="product_subtitletext1">나만의 백수템을 투표해보자</p>
            <p className="product_subtitletext12"> 백수의 아이템 모음zip</p>
          </div>
        </div>
        <div className="product_map">
          <ProductList items={items} />
        </div>
        <div className="product_button">
          <img src={votebutton} alt="votebutton" />{" "}
        </div>
        <div className="product_share">
          <p>나만의 꿀템 친구들에게 공유하기</p>
          <div className="SNS_shareicon"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductVoteForm;
