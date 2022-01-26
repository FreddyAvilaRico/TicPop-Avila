import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer() {

  const { itemId } = useParams();

  const [producto, setProducto] = useState({});

  useEffect(()=>{
      setTimeout(()=>{

          let ProductsDT = [ {
            id: 'PDP001',
            name: "Funko Pop Spiderman",
            price: 15,
            stock: 5,
            description: 'Lorem ipsum dolor sit amet, ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            imagePDP: "./spide.jpg",
            category: 'marvel'
          },
          {
            id: 'PDP002',
            name: "Funko Pop Goku",
            price: 18,
            stock: 2,
            description: 'Lorem ipsum dolor sit amet, ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            imagePDP:  "./goku.jpg",
            category: 'dbz'
          },
          {
            id: 'PDP003',
            name: "Funko Pop Thanos",
            price: 15,
            stock: 5,
            description: 'Lorem ipsum dolor sit amet, ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            imagePDP: "./thanos.jpg",
            category: 'marvel'
          },
          {
            id: 'PDP004',
            name: "Funko Pop Iroman",
            price: 15,
            stock: 3,
            description: 'Lorem ipsum dolor sit amet, ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            imagePDP: "./iroman.jpg",
            category: 'marvel'
          }  
        ];

          ProductsDT = ProductsDT.filter(item => item.id === itemId);

          let myProducto = ProductsDT[0];

          setProducto(myProducto);

      }, 2000)
  }, [itemId])

  return (
    <>
      <ItemDetail producto={producto}/>
    </>
  );
}