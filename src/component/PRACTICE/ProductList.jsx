import React, { Component, useState, useEffect } from "react";
import graybox from "../../assets/LargeGrayRectangle.png";
import "./ProductList.css";

// function checkonlyone(element) {

// const checkboxes = document.getElementsByName("{item.id}");

// checkboxes.forEach((cb)=>
// {cb.checked = false;
// })
// element.checked = true;
// }

function ProductListItem({ item }) {
  return (
    <div>
      <div className="layout">
        <div className="item-nav">
          <a href={item.Url}>
            <div>
              <h3 className="prod_size"> {item.title}</h3>
            </div>
            <img className="itemimage" src={item.imgUrl} alt={item.title} />

            <p className="main_prod_gray"> {item.content}</p>
          </a>
          <hr />
        </div>
      </div>
    </div>
  );
}
const ProductList = ({ onDelete }) => {
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
    <div className="layout">
      {/* <div className="productlist">
        <img className="main_event1" src={graybox} alt="event1" border="0" />
      </div>
      <div className="bestitem ">굿즈 투표</div> */}
      <div>
        <ol className="second-nav">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <ProductListItem item={item} onDelete={onDelete} />
                <div className="product_checkbox">
                  <input
                    type="checkbox"
                    name={item.id}
                    value={item.id}
                    id={item.title}
                    onClick="clickCheck"
                  />
                  <label for={item.title}>
                    {item.title} 굿즈를 갓 템으로 투표하기
                  </label>
                </div>
              </li>
            );
          })}{" "}
        </ol>
      </div>
    </div>
  );
};

export default ProductList;
