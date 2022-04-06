import React from "react";
import Rating from "./Rating";
import "./ReviewList.css";
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}
function ReviewListItem({ review, onDelete }) {
  const handleDeleteClick = () => onDelete(review.id);
  return (
    <div>
      <div className="item-nav">
        <div>
          <div>
            <p>{review.createdAt}</p>
            <p className="prod_size"> {review.nickname}</p>
            <p> {review.content}</p>
          </div>

          <Rating value={review.rating} />
          <p className="main_prod_gray">{formatDate(review.createdAt)}</p>

          <button onClick={handleDeleteClick}>삭제</button>
        </div>
      </div>
    </div>
  );
}
function ReviewList({ reviews, onDelete }) {
  console.log(reviews);
  return (
    <div>
      <div>
        <ul className="second-nav">
          {" "}
          {reviews.map((review) => {
            return (
              <div className="item-nav">
                <li key={review.id}>
                  {" "}
                  {<ReviewListItem review={review} onDelete={onDelete} />}
                </li>
              </div>
            );
          })}{" "}
        </ul>
      </div>
    </div>
  );
}

export default ReviewList;
