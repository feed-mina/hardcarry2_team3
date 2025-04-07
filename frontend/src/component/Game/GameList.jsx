import React, { useState, useEffect } from "react";
import styles from "./GameList.module.css";
import fulllove from "../../assets/fulllove.png";
import emptylove from "../../assets/emptylove.png";
import more from "../../assets/more.png";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const HeartButton = ({ onClick }) => {
  const fillHeart = () => {
    return <img src={fulllove} />;
  };
  const emptyHeart = () => {
    return <img src={emptylove} />;
  };
  let [likenum, setLikenum] = useState(0);

  const [like, setLike] = useState(false);
  const toggleHeart = ({ like }) => {
    setLike((like) => !like);
    fillHeart();
    setLikenum(likenum + 1);
  };

  const untoggleHeart = ({ like }) => {
    setLike((like) => like);
    emptyHeart();
    setLikenum(likenum - 1);
  };
  return (
    <div>
      <img
        src={like ? fulllove : emptylove}
        onClick={like ? toggleHeart : untoggleHeart}
      />
      {likenum}{" "}
      <img
        src={like ? fulllove : emptylove}
        like={like}
        onClick={() => {
          setLikenum(likenum + 1);
          setLike(!like);
        }}
      />{" "}
    </div>
  );
};

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function GameCommentList(data, { onClick }) {
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
    const changenum = pages.findIndex((v) => v.balance_id === id);
    const changeLike = pages.find((v) => v.balance_id === id);
    changeLike.likes = !changeLike.likes;

    await fetch("http://3.35.152.195/api/balance/replyLike?balance_id=" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        if (data.data.blike_use == "X") {
          changeLike.balance_like -= 1;
          cookies.set(changeLike.balance_id, "X");
        } else {
          changeLike.balance_like += 1;
          cookies.set(changeLike.balance_id, "O");
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
    await fetch(
      "http://3.35.152.195/api/balance/getReply?page= " +
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
        for (let i = 0; i < data.diaryList.length; i++) {
          const cookie = cookies.get(data.diaryList[i].balance_id);
          if (cookie == "O") data.diaryList[i].likes = true;
          else data.diaryList[i].likes = false;
        }
        setPages([...pages, ...data.diaryList]);
        setMaxCount(data.totalPages);
        console.log(data.diaryList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(0);
  }, []);

  function moreBalance() {
    if (pageCount == maxCount - 1) {
      alert("댓글을 적어주세요");
    } else {
      setPageCount(pageCount + 1);
      getData(pageCount + 1);
    }
  }

  return (
    <div>
      <div className={styles.gamelayout}>
        {pages.map((createReply, index) => (
          <div className={styles.writelist_item} key={createReply.balance_id}>
            <div>
              {" "}
              <div className={styles.writenickname}>
                <span className={styles.writenickname}>
                  닉네임 <strong>{createReply.balance_name}</strong>
                </span>
              </div>{" "}
              <span className={styles.gamechoicetype}>
                나의 선택은? <strong>{createReply.balance_type}</strong>
              </span>
              <br />
              <span className={styles.diarycontent}>
                {createReply.balance_content}
              </span>
              <div className={styles.heart_layout}>
                <div id="game_heart" className={styles.heart}>
                  <img
                    id="game_heart"
                    src={createReply.likes ? fulllove : emptylove}
                    like={createReply.balance_like}
                    onClick={() => {
                      toggleHeart(
                        createReply.balance_like,
                        createReply.balance_id
                      );
                    }}
                  />
                  +{createReply.balance_like}
                </div>
              </div>
            </div>{" "}
          </div>
        ))}
        <div className={styles.morelayout}>
          {" "}
          <button className={styles.diary_more} onClick={moreBalance}>
            <p> 댓글 더보기</p>
            <img src={more} className={styles.moreimg} id="game_more" />
          </button>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default GameCommentList;
