import React, { Component, useState, useEffect } from "react";
import graybox from "../../assets/LargeGrayRectangle.png";

import progress from "../Progress/Progress";

import "./ProductList.css";

const ProductListSample = ({}) => {
  return (
    <div className="layout">
      <div className="productlist">
        <div className="product_one">
          <div>
            <h3 className="prod_size"> 굿즈 타이틀</h3> <br />{" "}
            <img src={graybox} alt="product" className="produt_img"></img>
          </div>
          <input
            type="checkbox"
            name="product"
            value="product1"
            id="product1"
          />
          <label for="product1">굿즈1 를갓 템으로 투표하기</label>
        </div>
        <div className="product_two">
          {" "}
          <h3 className="prod_size"> 굿즈 타이틀</h3> <br />
          <img src={graybox} alt="product" className="produt_img"></img>
          <p className="main_prod_gray">
            {" "}
            굿즈 설명글 <br /> 굿즈설명글
          </p>
          <input
            type="checkbox"
            name="product"
            value="product2"
            id="product2"
          />
          <label for="product2">굿즈2 를갓 템으로 투표하기</label>
        </div>
        <div className="product_three">
          {" "}
          <h3 className="prod_size"> 굿즈 타이틀</h3> <br />
          <img src={graybox} alt="product" className="produt_img"></img>{" "}
          <p className="main_prod_gray">
            {" "}
            굿즈 설명글 <br /> 굿즈설명글
          </p>
          <input
            type="checkbox"
            name="product"
            value="product3"
            id="product3"
          />
          <label for="product3">굿즈3 를갓 템으로 투표하기</label>
        </div>
        <div className="product_four">
          {" "}
          <h3 className="prod_size"> 굿즈 타이틀</h3> <br />{" "}
          <img src={graybox} alt="product" className="produt_img"></img>{" "}
          <p className="main_prod_gray">
            {" "}
            굿즈 설명글 <br /> 굿즈설명글
          </p>
          <input
            type="checkbox"
            name="product"
            value="product4"
            id="product4"
          />
          <label for="product4">굿즈4 를갓 템으로 투표하기</label>{" "}
        </div>
        <div className="product_five">
          {" "}
          <h3 className="prod_size"> 굿즈 타이틀</h3> <br />{" "}
          <p className="main_prod_gray">
            {" "}
            굿즈 설명글 <br /> 굿즈설명글
          </p>
          <img src={graybox} alt="product" className="produt_img"></img>
          <input
            type="checkbox"
            name="product"
            value="product5"
            id="product5"
          />
          <label for="product5">굿즈5 를갓 템으로 투표하기</label>
        </div>
        <div className="product_six">
          {" "}
          <h3 className="prod_size"> 굿즈 타이틀</h3> <br />{" "}
          <img src={graybox} alt="product" className="produt_img"></img>{" "}
          <p className="main_prod_gray">
            {" "}
            굿즈 설명글 <br /> 굿즈설명글
          </p>
          <input
            type="checkbox"
            name="product"
            value="product6"
            id="product6"
          />
          <label for="product6">굿즈6 를갓 템으로 투표하기</label>
        </div>
      </div>
    </div>
  );
};

export default ProductListSample;
