import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Wait.module.css";
import loading from "../../assets/loading.png";

const Wait = (props) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const { state } = useLocation(props);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "http://3.35.152.195/api/test/postTestArray",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            result: {
              1: state.select[0],
              2: state.select[1],
              3: state.select[2],
              4: state.select[3],
              5: state.select[4],
              6: state.select[5],
              7: state.select[6],
              8: state.select[7],
              9: state.select[8],
              10: state.select[9],
            },
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            navigate("/result", { state: { result: data.data } });
          }, 4000);
        });

      if (!response.ok) {
        throw new Error("기능에 이상이 있습니다 !");
      }
      const responseData = await response.json();

      const loadedItems = [];
      for (const key in responseData) {
        loadedItems.push({
          id: key,
        });
      }
      setItems(loadedItems);
      setIsLoading(false);
    };
    fetchItems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <div className={styles.wait_layout}>
        {" "}
        <div className={styles.waitline}>
          {" "}
          <div className={styles.waitheader}>
            <p className={styles.waitheader1}>백수 삶의 현장</p>
            <p className={styles.waitheader2_1}>나와 찰떡인</p>
            <p className={styles.waitheader2_2}>영화 속 백수 케릭터는? </p>
          </div>
          <div className={styles.loadingline}>
            <img src={loading} className={styles.loadingimg} alt="lodingdino" />
          </div>
          <div className={styles.textline}>
            <p className={styles.loadingtext}> 로딩중..</p>
          </div>
        </div>
      </div>
    );
  }
  // if (httpError) {
  //   return (
  //     <section className="ItemsError">
  //       <h1>{httpError}</h1>
  //     </section>
  //   );
  // }

  return (
    <div className={styles.wait_layout}>
      {" "}
      <div className={styles.waitline}>
        {" "}
        <div className={styles.waitheader}>
          <p className={styles.waitheader1}>백수 삶의 현장</p>
          <p className={styles.waitheader2_1}>나와 찰떡인</p>
          <p className={styles.waitheader2_2}>영화 속 백수 케릭터는? </p>
        </div>
        <div className={styles.loadingline}>
          <img src={loading} className={styles.loadingimg} alt="lodingdino" />
        </div>
        <p className={styles.loadingtext}> 로딩중..</p>
      </div>
    </div>
  );
};

export default Wait;
