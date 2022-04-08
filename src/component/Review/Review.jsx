import React, { Component, useEffect, useState } from "react";

import mockReviews from "./mockReview.json";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import Navmain from "../Nav/Navmain";
import large_graybox from "../../assets/LargeGrayRectangle.png";

import graybox from "../../assets/GrayRectangle.png";
import small_graybox from "../../assets/Rectangle_gray.png";
import facebook from "../../assets/share_facebook.png";
import kakao from "../../assets/share_kakao.png";
import twitter from "../../assets/share_twitter.png";
import link from "../../assets/share_link.png";

import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState(mockReviews);

  const handledelete = (id) => {
    const nextReviews = reviews.filter((review) => review.id !== id);
    setReviews(nextReviews);
  };
  return (
    <>
      <div className="layout">
        <div className="write">
          <div className="write_title">
            <div className="write_maintitle">
              <h1 className="write_maintitle">백수의 일기장</h1>
            </div>
            <div className="img">
              <img src={large_graybox} alt="graybox" />
            </div>
            <div className="write_subtitle">
              <p>여러분도 디노처럼 일기를 써보세요! </p>
              <p>디노가 ‘참 잘했어요’ 도장을 찍어줍니다!</p>
            </div>
          </div>
          <ReviewForm />
        </div>{" "}
        <div className="present">
          <div className="present_text">
            <p>디노가 주는 선물 </p>
          </div>
          <img
            src={small_graybox}
            alt="small_graybox"
            className="small_graybox"
          />
          <p>OO명 </p>{" "}
          <div className="SNS_share">
            <div className="SNS_title">
              <h3>친구들에게 공유하면</h3>
              <h1> 당첨확률 UP</h1>
            </div>
            <div className="SNS">
              <img src={kakao} alt="kakao" className="kakao" />
              <img src={facebook} alt="facebook" className="facebook" />
              <img src={twitter} alt="twitter" className="twitter" />
              <img src={link} alt="link" className="link" />
            </div>
          </div>
        </div>
        <div className="list">
          <div className="writelist_title">
            <h3>백수들의 일기장 훔쳐보기</h3>
          </div>
          <div className="writelist_item">
            <ReviewList reviews={reviews} onDelete={handledelete} />
          </div>
        </div>
      </div>
      <Navmain />
    </>
  );
};

export default Review;
