import React, { useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import styles from "./Write.module.css";
import SharediarySNS from "../Share/SharediarySNS";
import Slider from "../../elements/Slide/Slider";
import submitbutton from "../../assets/diarybutton.png";
import footer from "../../assets/footer.png";
import DiaryList from "./DiaryList";
import Modal from "../../elements/Modal/Modal";
import shareevent from "../../assets/shareevent.png";
import clipboard from "../../assets/clipboard.png";
import border from "../../assets/border.png";

const INITIAL_VALIES = {
  nickname: null,
  rating: 0,
  content: null,
  name: null,
  phone: null,
  choice: false,
  private: false,
};

// useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)

function WriteForm(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(INITIAL_VALIES);
  const [modalOpen, setModalOpen] = useState(false);
  const [checkedButtons, setCheckedButtons] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedButtons([...checkedButtons, id]);
      if (id == "choice") values.choice = true;
      else values.private = true;
    } else {
      setCheckedButtons(checkedButtons.filter((button) => button !== id));
      if (id == "choice") values.choice = false;
      else values.private = false;
    }
  };
  const openModal = async () => {
    // console.log(values);
    if (values.choice == true) {
      //이름 연락처 미 입력시
      if (values.name == null || values.phone == null) {
        alert("연락 받으실 정보를 정확히 입력해주세요!");
        return;
      }
      if (
        values.name != null &&
        values.phone != null &&
        values.private == false
      ) {
        alert("개인정보 활용 동의하지 않을시에는 이벤트 참여가 불가능합니다");
        return;
      }
    }

    await fetch("http://3.35.152.195/api/diary/createDiary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        diary_writter: values.nickname,
        diary_content: values.content,
        diary_checked: values.choice == true ? "O" : "X",
        diary_name: values.name,
        diary_phone: values.phone,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setModalOpen(true);
        //방금 쓴 거 보이게 해야함
      });
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
    formData.append("nickname", values.nickname);
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("private", values.private);
    formData.append("rating", values.rating);
    formData.append("choice", values.choice);
  };
  const onDownloadBtn = () => {
    domtoimage.toBlob(document.querySelector(".card")).then((blob) => {
      saveAs(blob, "diary.png");
    });
  };

  return (
    <div className={styles.write_layout}>
      <div className={styles.writeheader_layout}>백수의 일기장</div>
      <div className={styles.writeinslider}>
        {" "}
        <Slider /> <div className={styles.writelinenoslider}> </div>{" "}
        <div className={styles.writecontent_layout}>
          여러분도 디노처럼 일기를 써보세요!
          <br />
          디노가 ‘참 잘했어요’ 도장을 찍어줍니다!
        </div>
        <div className={styles.writeline}>
          <div className="card">
            {" "}
            <div className={styles.diaryscope}>
              <form className="Form" onSubmit={handleSubmit}>
                <div className={styles.submitdiaryscope}>
                  <div className={styles.writenickname}>
                    닉네임
                    <input
                      className={styles.write_nickname}
                      name="nickname"
                      value={values.nickname}
                      onChange={handleInputChange}
                      placeholder="닉네임을 입력해 주세요. (최대 8글자)"
                    />
                  </div>
                  <div className={styles.write_text}>
                    <textarea
                      className={styles.write_textarea}
                      name="content"
                      value={values.content}
                      onChange={handleInputChange}
                      placeholder="&#13;&#10;해당 작성 내용은 삭제나 수정이 불가하오니 &#13;&#10;신중하게 작성 부탁드립니다."
                    />
                  </div>{" "}
                  <div className={styles.write_choice}>
                    <input
                      className={styles.write_choiceradio}
                      name="choice"
                      value={values.choice}
                      type="checkbox"
                      onChange={(e) => {
                        changeHandler(e.currentTarget.checked, "choice");
                      }}
                      checked={checkedButtons.includes("choice") ? true : false}
                      placeholder="(선택) 연락처 적고 경품 받기"
                    />
                    (선택) 연락처 적고 경품 받기
                  </div>
                  <div className={styles.writename}>
                    성함
                    <input
                      className={styles.write_name}
                      name="name"
                      value={values.name}
                      onChange={handleInputChange}
                      placeholder="성함을 입력해 주세요."
                    />
                  </div>{" "}
                  <div className={styles.writephone}>
                    연락처
                    <input
                      className={styles.write_phone}
                      name="phone"
                      value={values.phone}
                      onChange={handleInputChange}
                      placeholder="연락처를 입력해 주세요."
                    />
                  </div>{" "}
                  <div className={styles.write_private}>
                    <div className={styles.write_inform}>
                      *연락처 미 입력 시, 게시글 작성은 가능하나 경품 수령은
                      어려워요!{" "}
                    </div>{" "}
                    <div className={styles.write_private}>
                      {" "}
                      <div className={styles.submit_kkk}>
                        <input
                          className={styles.write_privateeradio}
                          name="private"
                          value={values.private}
                          type="checkbox"
                          onChange={(e) => {
                            changeHandler(e.currentTarget.checked, "private");
                          }}
                          checked={
                            checkedButtons.includes("private") ? true : false
                          }
                          placeholder="(선택) 연락처 적고 경품 받기"
                        />
                        개인정보 활용동의
                      </div>{" "}
                    </div>{" "}
                  </div>
                  <div className={styles.writesubmitbutton}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.diary_write}
                      onClick={openModal}
                    >
                      <img
                        src={submitbutton}
                        className="submit_button"
                        alt="submit_button"
                        onClick={handleSubmit}
                      />
                    </button>

                    <Modal
                      open={modalOpen}
                      close={closeModal}
                      header="백수의 일기장"
                      className={styles.modallayout}
                    >
                      <div className={styles.modalline}>
                        <h1 className={styles.modaltitle}>참 잘했어요!</h1>
                        <main> {props.children} </main>
                        <img src={footer} className={styles.footer} />
                        <p className={props.finisheddiary}>
                          일기장 작성이 완료 되었습니다.
                        </p>
                      </div>
                    </Modal>
                  </div>
                </div>
              </form>
              <div className={styles.present_layout}>
                <span className={styles.present_header}>디노가 주는 선물</span>
                <span className={styles.present_inform}>
                  연락처를 적고 일기를 작성해주신 분들께 <br />
                  추첨을 통해서 디노 선물 패키지를 드립니다.
                </span>
              </div>{" "}
              <img
                src={shareevent}
                alt="sharebox"
                className={styles.result_sharebox}
              />{" "}
              <div className={styles.presentline}>
                {" "}
                <span className={styles.presentimg_header}>
                  디노 선물 패키지
                  <br />
                </span>{" "}
                <div className={styles.present_informimg}>5명</div>
              </div>
              <div className={styles.SNS_layout}>
                <span className={styles.SNS_header}>
                  {" "}
                  친구들에게 공유하면 당첨확률 UP{" "}
                </span>
                <div className={styles.snsbutton}>
                  <SharediarySNS />{" "}
                  {/* <button className="downBtn" onClick={onDownloadBtn}> </button> */}
                  <img
                    src={clipboard}
                    className={styles.diary_save}
                    onClick={onDownloadBtn}
                  />
                </div>
              </div>
              {submittingError?.message && <div>{submittingError.message}</div>}
              <img src={border} className={styles.writeliststart} />
            </div>
          </div>
        </div>
        {/* diaryscope 끝 */}
      </div>{" "}
      <div className={styles.diarylistline}>
        <span className={styles.diarylistheader}>
          {" "}
          백수들의 일기장 훔쳐보기{" "}
        </span>
        <div className={styles.search}>
          <div className={styles.searchfuckline}>
            <div className={styles.searchlayout}>
              <form action="" method="GET" className={styles.serarch_inputline}>
                <div className={styles.searchoptipn}>
                  <div className={styles.searchfit}>
                    <input
                      name="query"
                      className={styles.searchinput}
                      type="text"
                      id="search"
                      placeholder="내용검색"
                    />{" "}
                    <input type="button" className={styles.fuckbutton} />
                  </div>
                  <select name="search" className={styles.searchoptionstyle}>
                    <option
                      value="최신순"
                      className={styles.diary_new}
                      id="diary_recent"
                    >
                      최신순
                    </option>
                    <option
                      value="공감순"
                      className={styles.diary_heart}
                      id="diary_heart"
                    >
                      공감순
                    </option>
                  </select>{" "}
                </div>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.writelist}></div> <DiaryList />
    </div>
  );
}

export default WriteForm;
