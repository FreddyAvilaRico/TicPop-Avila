import React from "react";
import "./ItemListContainer.scss";
import ItemCount from "../ItemCount.js/ItemCount";

export default function ItemListContainer() {

  return (
    <>
      <div id="ItemListContainer">
        <div className="container">
          <div className="product">
            <span className="product__title"> </span>
            <ItemCount />
          </div>
        </div>
      </div>
    </>
  );
}
