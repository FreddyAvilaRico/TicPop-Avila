import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Item from "../Item/Item";
import loading from "./loading.gif";
import "./CategoryListContainer.scss";

    
export default function Category({item}) {

    const { categoriaId } = useParams();
    const [PromiseArriveCat, setPromiseArriveCat] = useState(false);
    const [ProductLinstingCat, setProductLinstingCat] = useState([]);

    const ProductPromiseCat = new Promise((resolve) => {
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
        ProductPromiseCat
        .then(res => {
           setPromiseArriveCat(true);
           setProductLinstingCat(res.filter(item=> item.category === categoriaId));
        })
        .catch(err => {
          console.log(err)
        })
      }, [categoriaId])


  return (
    <> 
    {(PromiseArriveCat) ?
    <><div id="CategoryListContainer">
    {ProductLinstingCat.map((item, i) => {
        return <Item item={item} key={i} />
      })}
    </div>
    </>
      :
      <div className="loading"> <img src={loading} alt="" />  </div>
    }
  </>
  );
}