import MainList from "../component/Main/MainList";
import React, { Component, useEffect, useState } from "react";
import Navmain from "../component/Nav/Navmain";
import "./Mainpages.css";
import StartingPageContent from "../component/StartingPage/StartingPageContent";
import ProductVote from "../component/ProductVote/ProductVote";

const LIMIT = 6;
const Mainpages = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="layout">
      <div className="map">
        <MainList items={items} />
        <ProductVote />
      </div>
    </div>
  );
};

export default Mainpages;
