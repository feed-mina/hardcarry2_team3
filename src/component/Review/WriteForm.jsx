import React, { useState } from "react";
import FileInput from "./FileInput";
import "./ReviewForm.css";
import RatingInput from "./RatingInput";
import createReviews from "./api";
import button from "../../assets/button3.png";

const INITIAL_VALIES = {
  nickname: "",
  rating: 0,
  content: "",
  imgUrl: null,
};
function WriteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(INITIAL_VALIES);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  async function handleInputChange(e) {
    const { name, value } = e.target;
    handleChange(name, value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", values.content);
    formData.append("imgUrl", values.imgUrl);
    formData.append("nickname", values.nickname);
    formData.append("rating", values.rating);
    formData.append("choice", values.choice);
    await createReviews(formData);
    setValues(INITIAL_VALIES);
  };

  return (
    <div className="layout">
      <div className="writeform">
        <form className="Form" onSubmit={handleSubmit}>
          닉네임
          <input
            className="write_name"
            name="nickname"
            value={values.nickname}
            onChange={handleInputChange}
            placeholder="닉네임을 입력해 주세요. (최대 8글자)"
          />
          <textarea
            className="write_textarea"
            name="content"
            value={values.content}
            onChange={handleInputChange}
            placeholder="&#13;&#10;해당 작성 내용은 삭제나 수정이 불가하오니 &#13;&#10;신중하게 작성 부탁드립니다."
          />
          <input
            className="write_choiceradio"
            name="choice"
            value={values.choice}
            type="radio"
            onChange={handleInputChange}
            placeholder="(선택) 연락처 적고 경품 받기"
          />
          (선택) 연락처 적고 경품 받기
          <input
            className="write_name"
            name="nickname"
            value={values.nickname}
            onChange={handleInputChange}
            placeholder="연락처를 입력해 주세요."
          />
          <button type="submit" disabled={isSubmitting}>
            <img
              src={button}
              className="submit_button"
              alt="submit_button"
              onClick={handleSubmit}
            />
          </button>
          {submittingError?.message && <div>{submittingError.message}</div>}
        </form>
      </div>
    </div>
  );
}

export default WriteForm;
