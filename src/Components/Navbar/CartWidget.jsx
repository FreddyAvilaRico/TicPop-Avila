import React from "react";

export default function CartWidget () {
    return (
      <>
        <button className="link-btn">
          <i className="fal fa-shopping-cart"></i>
          <div id="ItemCounter">1</div>
        </button>
      </>
    );
}