import React, { useState } from "react";
import './ItemCount.scss'

export default function ItemCount({tope}) {

  const InitialStock = 1;
  const MinStock = 1;
  const MaxStock = tope;

  const [Counter, setCounter,] = useState(InitialStock);

  const handleIncrement = () => {
    Counter < MaxStock ? setCounter(Counter + 1) : console.log("Máximo Stock alcanzado");
  };

  const handleDecrement = () => {
    Counter > MinStock ? setCounter(Counter - 1) : console.log("Mínimo Stock alcanzado");
  };

  const onAdd = () => {
      console.log('Agregaste ' + Counter + ' Funko al Carrito');
  };
    
  
    return (
      <>
        <div className="QtyContainer">
          <button className="BtnCounter" onClick={handleDecrement}>-</button>
          <span className="QtyBox">{Counter}</span>
          <button className="BtnCounter" onClick={handleIncrement}>+</button>
        </div>
  
       <button className="AddToCart" value={Counter} onClick={onAdd} >add to cart</button>
        
      </>
    );
  }
  

 