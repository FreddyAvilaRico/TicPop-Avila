import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

    
export default function Item({item}) {

  return (
    <>
        <div className="container Product">
            <img src={item.imagePDP} alt={item.name} />
            <p className="Product__Name">{item.name}</p>
            <p className="Product__Stock">Quedan: {item.stock} Items</p>
            <p className="Product__Price">${item.price}</p> 
            <Link to="/item/:itemId" className="link-nav">Detalles del Product</Link>
            <ItemCount tope={item.stock}/>    
        </div>
    </>
  );
}