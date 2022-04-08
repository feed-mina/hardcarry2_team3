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
import Review from "./component/Review/Review";
function Main() {
  return (
    <div>
      <BrowserRouter>
        <HeaderNav />

        <Routes>
          <Route path="/" element={<Mainpage />} />

          <Route path="/mains" element={<Mainpage />} />
          <Route path="/story" element={<HomePage />} />
          <Route path="/write" element={<Review />} />

          <Route path="/test" element={<TestPage />} />
          <Route path="/ontest" element={<OnTestPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/wait" element={<WaitPage />} />
          <Route path="/products" element={<ProductVotePage />} />
          <Route path="/productsample" element={<ProductListSample />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Navmain />
      </BrowserRouter>
    </div>
  );
}

export default Main;
