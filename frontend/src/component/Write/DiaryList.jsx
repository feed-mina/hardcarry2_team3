import React, { useState, useEffect } from "react";
import styles from "./DiaryList.module.css";
import fulllove from "../../assets/fulllove.png";
import emptylove from "../../assets/emptylove.png";
import more from "../../assets/more.png";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function DiaryList(data) {
  const fillHeart = () => {
    return <img src={fulllove} />;
  };
  const emptyHeart = () => {
    return <img src={emptylove} />;
  };
  let [likenum, setLikenum] = useState(0);
  const [unlikenum, setUnLikenum] = useState(1);
  const [like, setLike] = useState([]);

  const [pageCount, setPageCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [pages, setPages] = useState([]);
  const toggleHeart = async (like, id) => {
    const changenum = pages.findIndex((v) => v.diary_id === id);
    const changeLike = pages.find((v) => v.diary_id === id);
    changeLike.likes = !changeLike.likes;

    await fetch("http://3.35.152.195/api/diary/diaryLike?diary_id=" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        if (data.data.dlike_use == "X") {
          changeLike.diary_like -= 1;
          cookies.set(changeLike.diary_id, "X");
        } else {
          changeLike.diary_like += 1;
          cookies.set(changeLike.diary_id, "O");
        }
        pages[changenum] = changeLike;
        setPages([...pages]);
      });
  };

  const untoggleHeart = ({ like }) => {
    setLike((like) => like);
    emptyHeart();
    setLikenum(likenum - 1);
  };

  const getData = async (pageCnt) => {
    const keyword = "";
    const sort = "latest";
    const res = await fetch(
      "http://3.35.152.195/api/diary/getDiary?page=" +
        pageCnt +
        "&size=4" +
        "&sort=" +
        sort +
        "&keyword=" +
        keyword,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.diaryList.length; i++) {
          const cookie = cookies.get(data.diaryList[i].diary_id);
          if (cookie == "O") data.diaryList[i].likes = true;
          else data.diaryList[i].likes = false;
        }

        setPages([...pages, ...data.diaryList]);
        //setPages(pages=>[...pages,data.diaryList]);
        setMaxCount(data.totalPages);
      });
  };

  useEffect(() => {
    getData(0);
  }, []);

  function moreDiary() {
    if (pageCount == maxCount - 1) {
      alert("더 이상 훔쳐볼 일기가 없어요");
    } else {
      setPageCount(pageCount + 1);
      getData(pageCount + 1);
    }
  }

  return (
    <div>
      <div className={styles.diarylayout}>
        {pages.map((diary, index) => (
          <div className={styles.writelist_item} key={diary.diary_id}>
            <div>
              {" "}
              <div className={styles.writenickname}>
                <span className={styles.writenickname}>
                  닉네임 : <strong>{diary.diary_writter}</strong>
                </span>
              </div>{" "}
              <br />
              <span className={styles.diarycontent}>{diary.diary_content}</span>
              <div className={styles.heart_layout}>
                <div className={styles.heart}>
                  <img
                    id={diary.diary_id}
                    src={diary.likes ? fulllove : emptylove}
                    like={diary.likes}
                    onClick={() => {
                      toggleHeart(diary.likes, diary.diary_id);
                    }}
                  />
                  +{diary.diary_like}
                </div>
              </div>
            </div>{" "}
          </div>
        ))}
        <div className={styles.morelayout}>
          {" "}
          <button className={styles.diary_more} onClick={moreDiary}>
            <p>일기 내용 더보기</p>
            <img src={more} className={styles.moreimg} />
          </button>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default DiaryList;
