import React from "react";
import './ItemListContainer.scss';


export default function ItemListContainer ({greeting}) {
    return (
        <>  
            <div id="ItemListContainer">
                <div className="container">
                    <div className="product">
                        <span className="product__title"> {greeting} </span>
                    </div>
                </div>
            </div>
        </>
    );
}