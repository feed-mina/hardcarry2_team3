import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component, useEffect, useState, useContext } from "react";
import HomePage from "./page/HomePage";
import NotFoundPage from "./page/NotFoundPage";
import Mainpage from "./page/Mainpage";
import Mainpages from "./page/Mainpages";
import Test from "./page/TestPage";
import Navmain from "./component/Nav/Navmain";
import HeaderNav from "./component/Layout/HeaderNav";
import TestPage from "./page/TestPage";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <HeaderNav />

        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/products" element={<Mainpages />} />
          <Route path="/mains" element={<Mainpage />} />
          <Route path="/story" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
        <Navmain />
      </BrowserRouter>
    </div>
  );
}

export default Main;
