import React, { Component, useState, useEffect } from "react";
import graybox from "../../assets/LargeGrayRectangle.png";

import progress from "../Progress/Progress";

import "./ProductList.css";

function ProductListItem({ item }) {
  return (
    <div>
      <div className="layout">
        <div className="item-nav">
          <a href={item.Url}>
            <div>
              <h3 className="prod_size"> {item.title}</h3>
            </div>
            <img className="itemimage" src={item.imgUrl} alt={item.title} />

            <p className="main_prod_gray"> {item.content}</p>
          </a>
          <hr />
        </div>
      </div>
    </div>
  );
}

const ProductList = ({ onDelete }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://mimo-49f6d-default-rtdb.firebaseio.com/itmes.json"
      ).then();

      if (!response.ok) {
        throw new Error("기능에 이상이 있습니다 !");
      }
      const responseData = await response.json();

      const loadedItems = [];
      for (const key in responseData) {
        loadedItems.push({
          id: key,
          title: responseData[key].title,
          price: responseData[key].price,
          content: responseData[key].content,
          imgUrl: responseData[key].imgUrl,
        });
      }
      setItems(loadedItems);
    };
  }, []);

  return (
    <div className="layout">
      <ol className="second-nav">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <ProductListItem item={item} />

              <div className="product_checkbox">
                <input
                  type="checkbox"
                  name={item.id}
                  value={item.id}
                  id={item.title}
                />
                <label for={item.title} id={item.id}>
                  {item.title} 굿즈를 갓 템으로 투표하기
                </label>
              </div>
            </li>
          );
        })}{" "}
      </ol>
    </div>
  );
};

import React from "react";

const Vote = () => {
  const getCheckboxValue = () => {
    const query = 'input[name="item.id"]:checked';
    const selectedEls = document.querySelectorAll(query);
    let result = "";
    selectedEls.forEach((el) => {
      result += el.value + " ";
    });
    document.getElementById("result").innerText = result;
  };
  return (
    <div className="layout">
      <input
        type="checkbox"
        name={item.id}
        value={item.id}
        onClick={getCheckboxValue}
      />
      {item.title}
      <button onClick={getCheckboxValue}>투표하기</button>
      <div id="result"></div>
    </div>
  );
};

export default Vote;
