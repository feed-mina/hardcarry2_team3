import React, { Component, useEffect, useState } from "react";

import mockReviews from "../../data/mockReview.json";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import Navmain from "../Nav/Navmain";
import "./Review.css";
import title1 from "../../assets/막내클럽_13.png";
import title2 from "../../assets/막내클럽_18.png";
import product from "../../assets/막내클럽_17.png";

function Review() {
  const [reviews, setReviews] = useState(mockReviews);

  const handledelete = (id) => {
    const nextReviews = reviews.filter((review) => review.id !== id);
    setReviews(nextReviews);
  };
  return (
    <>
      <div className="map">
        {" "}
        <div className="img">
          <img src={title1} className="title1" />
          <img src={title2} className="title2" />
          <img src={product} className="product" />
        </div>
        <ReviewForm />
        <div className="item-nav">
          <ReviewList reviews={reviews} onDelete={handledelete} />
        </div>
      </div>
      <Navmain />
    </>
  );
}

export default Review;
