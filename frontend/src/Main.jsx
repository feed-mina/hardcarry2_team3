import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component, useEffect, useState, useContext } from "react";
import TagManager from "react-gtm-module";

import NotFoundPage from "./NotFoundPage";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home/Home";
import Test from "./component/Test/Test";
import { OnTest } from "./component/OnTest/OnTest";
import Result from "./component/Result/Result";
import Wait from "./component/Wait/Wait";
import Story from "./component/Story/Story";
import Write from "./component/Write/Write";

import EndingStory from "./component/EndStory/EndingStory";
import Like from "./component/Write/Like";
import Game from "./component/Game/Game";
import GameResult from "./component/Game/GameResult";

const tagManagerArgs = {
  gtmId: "GTM-M2FPFM8",
};

TagManager.initialize(tagManagerArgs);
function Main() {
  return (
    <div className="main">
      {" "}
      <Navbar className="leftsidebar" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/ontest" element={<OnTest />} />
          <Route path="/result" element={<Result />} />
          <Route path="/wait" element={<Wait />} />
          <Route path="/write" element={<Write />} />

          <Route path="/story" element={<Story />} />
          <Route path="/endstory" element={<EndingStory />} />

          <Route path="/like" element={<Like />} />
          <Route path="/game" element={<Game />} />
          <Route path="/gameresult" element={<GameResult />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
