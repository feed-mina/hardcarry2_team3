import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component, useEffect, useState, useContext } from "react";
import HomePage from "./page/HomePage";
import NotFoundPage from "./page/NotFoundPage";
import Mainpage from "./page/Mainpage";
import Navmain from "./component/Nav/Navmain";
import HeaderNav from "./component/Layout/HeaderNav";
import TestPage from "./page/TestPage";
import OnTestPage from "./page/OnTestPage";
import ResultPage from "./page/ResultPage";
import WaitPage from "./page/WaitPage";
import ProductVotePage from "./page/ProductVotePage";
import IssueList from "./component/PRACTICE/IssueList";
import Issue from "./component/PRACTICE/Issue";
import ProductListSample from "./component/ProductVote/ProductListSample";
import Write from "./component/Review/Write";
import Share_SNS from "./component/Share/Share_SNS";
import Result from "./component/Share/Result";
import "./App.css";

function Main() {
  return (
    <div className="center_app">
      <BrowserRouter>
        <div className="App_header">
          <div className="App_text">
            <p className="App_titletext">일당백 프로젝트</p>
          </div>
          {/* <HeaderNav /> */}
        </div>
        <Routes>
          <Route path="/" element={<Mainpage />} />

          <Route path="/mains" element={<Mainpage />} />
          <Route path="/story" element={<HomePage />} />
          <Route path="/write" element={<Write />} />

          <Route path="/test" element={<TestPage />} />
          <Route path="/ontest" element={<OnTestPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/wait" element={<WaitPage />} />
          <Route path="/products" element={<ProductVotePage />} />
          <Route path="/productsample" element={<ProductListSample />} />
          <Route path="/share" element={<Share_SNS />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Navmain />
      </BrowserRouter>
    </div>
  );
}

export default Main;
