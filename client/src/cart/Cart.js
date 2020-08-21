import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div>
      <h1>cart</h1>
      <div className="items">
        <div className="card">
          <div class="card-image">
            <img src="" style={{ width: "300px" }} />
          </div>
          <div class="card-content">
            <p class="card-title">{}</p>
            <p></p>
          </div>
          <div class="card-action">
            <button className="btn">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
