import React from "react";
import ItemCount from "../ItemCount/ItemCount";

    
export default function Item({item}) {

  return (
    <>
        <div className="container Product">
            <p className="Product__Name">{item.name}</p>
            <p className="Product__Stock">Quedan: {item.stock} Items</p>
            <p className="Product__Price">${item.price}</p> 
            <ItemCount tope={item.stock}/>    
        </div>
    </>
  );
}