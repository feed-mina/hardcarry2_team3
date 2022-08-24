import React, { Component, useEffect, useState } from "react";
import votebutton from "../../assets/votebutton.png";
import ProductList from "./ProductList";

import createReviews from "../Review/api";
import "./ProductVoteForm.css";
import { Link } from "react-router-dom";
const INITIAL_PRODUCT = {
  content: "",
  choice: true,
};
const ProductVoteForm = () => {
  const [items, setItems] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(INITIAL_PRODUCT);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  async function handleInputChange(e) {
    const { name, value } = e.target;
    handleChange(name, value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", values.content);

    formData.append("choice", values.choice);

    await createReviews(formData);
    setValues(INITIAL_PRODUCT);
  };
  return (
    <div className="Product_vote_layout">
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
          <Link to="voteresult">
            <button
              className="btton_Modalgame"
              alt="submit_button"
              onClick={handleSubmit}
              type="submit"
              disabled={isSubmitting}
            >
              입 력
            </button>
          </Link>
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
