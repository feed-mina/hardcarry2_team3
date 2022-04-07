import React, { useEffect, useState } from "react";
import waiting from "../../images/waiting.gif";
import { useNavigate } from "react-router-dom";
import "./WaitForm.css";

const WaitForm = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  //   useEffect(() => {
  //     const fetchItems = async () => {
  //       const response = await fetch("API주소").then((res) => {
  //         sessionStorage.setItem("data", JSON.stringify(res.data.data));
  //         setTimeout(() => {
  //           navigate("/result");
  //         }, 4000);
  //       });

  //       if (!response.ok) {
  //         throw new Error("기능에 이상이 있습니다 !");
  //       }
  //       const responseData = await response.json();

  //       const loadedItems = [];
  //       for (const key in responseData) {
  //         loadedItems.push({
  //           id: key,
  //         });
  //       }
  //       setItems(loadedItems);
  //       setIsLoading(false);
  //     };
  //     fetchItems().catch((error) => {
  //       setIsLoading(false);
  //       setHttpError(error.message);
  //     });
  //   }, []);

  //   if (isLoading) {
  //     return (
  //       <section className="ItemsLoading">
  //         <h1> Loading..</h1>
  //       </section>
  //     );
  //   }
  //   if (httpError) {
  //     return (
  //       <section className="ItemsError">
  //         <h1>{httpError}</h1>
  //       </section>
  //     );
  //   }

  return (
    <div className="layout">
      <div className="WaitForm">
        <div className="h3Container">
          <img className="resultimg" src={waiting} alt="img" />
          <h3 className="resultH3">결과를 분석하고 있어요</h3>
        </div>
      </div>
    </div>
  );
};

export default WaitForm;
