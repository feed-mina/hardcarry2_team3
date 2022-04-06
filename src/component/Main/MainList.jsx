import React, { Component, useState, useEffect } from "react";
import graybox from "../../assets/LargeGrayRectangle.png";
import "./Main.css";

function MainListItem({ item, onDelete }) {
  return (
    <div>
      <div className="layout">
        <div className="item-nav">
          <a href={item.Url}>
            <img className="itemimage" src={item.imgUrl} alt={item.title} />
            <div>
              <p className="prod_size"> {item.title}</p>
            </div>
            <p className="prod_size"> {item.price}</p>
            <p className="main_prod_gray"> {item.content}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
const MainList = ({ onDelete }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://mimo-49f6d-default-rtdb.firebaseio.com/itmes.json"
      ).then();

      if (!response.ok) {
        throw new Error("기능에 이상이 있습니다 !");
      }
      const responseData = await response.json();

      const loadedItems = [];
      for (const key in responseData) {
        loadedItems.push({
          id: key,
          title: responseData[key].title,
          price: responseData[key].price,
          content: responseData[key].content,
          imgUrl: responseData[key].imgUrl,
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

  // try {
  //   fetchItems();
  // } catch (error) {
  //   setIsLoading(false);
  //   setHttpError(error.message);
  // }

  // function MainList({ items, onDelete }) {
  //   console.log(items);

  if (isLoading) {
    return (
      <section className="ItemsLoading">
        <h1> Loading..</h1>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className="ItemsError">
        <h1>{httpError}</h1>
      </section>
    );
  }
  return (
    <div>
      <div className="eventimage">
        <img className="main_event1" src={graybox} alt="event1" border="0" />
      </div>
      <div className="bestitem ">굿즈 투표</div>
      <div>
        <ol className="second-nav">
          {items.map((item) => {
            return (
              <li key={item.id}>
                {" "}
                {<MainListItem item={item} onDelete={onDelete} />}
              </li>
            );
          })}{" "}
        </ol>
      </div>
    </div>
  );
};

export default MainList;
