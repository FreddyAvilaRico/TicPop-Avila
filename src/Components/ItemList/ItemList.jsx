import React, {useState, useEffect} from "react";
import Item from "../Item/Item";
import loading from "./loading.gif";

export default function ItemList() {
  const [PromiseArrive, setPromiseArrive] = useState(false);
  const [ProductLinsting, setProductLinsting] = useState([ ]);

  

  const ProductPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 'PDP001',
            name: "Funko Pop Spiderman",
            price: 15,
            stock: 5,
            description: 'Lorem ipsum dolor sit amet, ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            imagePDP: require("./spide.jpg"),
            category: 'marvel'
          },
          {
            id: 'PDP002',
            name: "Funko Pop Goku",
            price: 18,
            stock: 2,
            description: 'Lorem ipsum dolor sit amet, ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            imagePDP:  require("./goku.jpg"),
            category: 'dbz'
          },
          {
            id: 'PDP003',
            name: "Funko Pop Thanos",
            price: 15,
            stock: 5,
            description: 'Lorem ipsum dolor sit amet, ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            imagePDP: require("./thanos.jpg"),
            category: 'marvel'
          },
          {
            id: 'PDP004',
            name: "Funko Pop Iroman",
            price: 15,
            stock: 3,
            description: 'Lorem ipsum dolor sit amet, ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            imagePDP: require("./iroman.jpg"),
            category: 'marvel'
          }
        ]);
      }, 1000);
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
        {ProductLinsting.map((item, i) => {
          return <Item item={item} key={i} />
        })}
      </>
        :
        <div className="loading"> <img src={loading} alt="" />  </div>
      }
    </>
  );
}