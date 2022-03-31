import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component, useEffect, useState, useContext } from "react";
import { Navigate } from "react-router";
import App from "./component/App";
import HomePage from "./page/HomePage";
import NotFoundPage from "./page/NotFoundPage";
import Layout from "./component/Layout/Layout";
import Mainpage from "./page/Mainpage";
import Mainpages from "./page/Mainpages";
import Test from "./component/Test/Test";
import Review from "./component/Review/Review";
import { getReviews } from "./reviewapi";

import AuthContext from "./store/auth-context";

const LIMIT = 6;

function Main() {
  const authCtx = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const handledelete = (id) => {
    const nextReviews = reviews.filter((review) => review.id !== id);
    setReviews(nextReviews);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getReviews(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { paging, reviews } = result;
    if (options.offset === 0) {
      setReviews(reviews);
    } else {
      setReviews((prevReviews) => [...prevReviews, ...reviews]);
    }
    setOffset(options.offset + options.limit);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = async () => {
    await handleLoad({ order, offset, limit: LIMIT });
  };
  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/write" element={<Review />} />
        <Route path="/products" element={<Mainpages />} />
        <Route path="/mains" element={<Mainpage />} />
        <Route path="/story" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
