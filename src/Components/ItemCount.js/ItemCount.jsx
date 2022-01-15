import React, { useState } from "react";
import './ItemCount.scss'

export default function ItemCount({ setQuantity }) {

  const InitialStock = 1;
  const MinStock = 0;
  const MaxStock = 5;

  const [counter, setCounter,] = useState(InitialStock);

  const handleIncrement = () => {
    counter < MaxStock ? setCounter(counter + 1) : console.log("Máximo Stock alcanzado");
  };

  const handleDecrement = () => {
    counter > MinStock ? setCounter(counter - 1) : console.log("Mínimo Stock alcanzado");
  };

  const onAdd = () => {
      console.log(counter);
  };

  return (
    <>
      <div className="QtyContainer">
        <button className="BtnCounter"  onClick={handleDecrement}>-</button>
        <span className="QtyBox">{counter}</span>
        <button className="BtnCounter" onClick={handleIncrement}>+</button>
      </div>
     <button className="AddToCart" value={counter} onClick={onAdd}>add to cart</button>
      
    </>
  );
}
