import React from "react";
import Rating from "./Rating";
import "./ReviewList.css";
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}
function WriteListItem({ review, onDelete }) {
  // const handleDeleteClick = () => onDelete(review.id);
  return (
    <div className="layout">
      <div className="writelist">
        <div className="writelist_item">
          <div>
            <div className="writelist_namesection">
              <p className="writelist_name">닉네임 {review.nickname}</p>
            </div>
            <p className="writelist_date">{formatDate(review.createdAt)}</p>

            <p className="writelist_content"> {review.content}</p>
          </div>
          {/* <button onClick={handleDeleteClick}>삭제</button> */}
        </div>
      </div>
    </div>
  );
}
function WriteList({ reviews, onDelete }) {
  console.log(reviews);
  return (
    <div>
      <div>
        <ul className="writelist_map">
          {" "}
          {reviews.map((review) => {
            return (
              <div className="writelist">
                <ul>
                  <li key={review.id}>
                    {<WriteListItem review={review} onDelete={onDelete} />}
                  </li>
                </ul>
              </div>
            );
          })}{" "}
        </ul>
      </div>
    </div>
  );
}

export default WriteList;
