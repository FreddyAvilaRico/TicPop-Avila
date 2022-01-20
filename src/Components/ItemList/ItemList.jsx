import React, {useState, useEffect} from "react";
import Item from "../Item/Item";
import loading from "./loading.gif";

export default function ItemList() {
  const [PromiseArrive, setPromiseArrive] = useState(false);
  const [ProductLinsting, setProductLinsting] = useState([ ]);

  

  const ProductPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "Funko Pop Spiderman", price: 15, stock: 5 },
          { name: "Funko Pop Goku", price: 18, stock: 2 },
          { name: "Funko Pop Thanos", price: 15, stock: 5 },
          { name: "Funko Pop Iroman", price: 15, stock: 3 }
        ])
      }, 2000);
  })

  useEffect(() => {
    ProductPromise
    .then(res => {
       setPromiseArrive(true);
       setProductLinsting(res);
    })
    .catch(err => {
      console.log(err)
    })
  })
 

  return (
    <> 
      {(PromiseArrive) ?
      <>
        {ProductLinsting.map(item=> {
          return <Item item={item} />
        })}
      </>
        :
        <div className="loading"> <img src={loading} alt="" />  </div>
      }
    </>
  );
}