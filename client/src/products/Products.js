import React, { useEffect, useState } from "react";
import "./Products.css";
import { v4 as uuidv4 } from "uuid";
import img1 from "../images/flask_black_cold.PNG";
import img2 from "../images/jumper_black.PNG";
import img3 from "../images/jumper_white_back.PNG";
import axios from "axios";
import AddProduct from "./AddProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const get = () => {
    // axios
    //   .get("/api/product")
    //   .then((resp) => resp.json())
    //   .then((data) => console.log(data));
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log(products);
  };

  React.useEffect(() => {
    get();
  }, []);

  const addCart = (item) => {
    let divCard = document.createElement("div");
    let divImg = document.createElement("div");
    let divCont = document.createElement("div");
    let image = document.createElement("img");
    let p = document.createElement("p");
    let buttonAdd = document.createElement("button");
    let buttonMinus = document.createElement("button");
    let buttonRemove = document.createElement("button");

    let thatDiv = document.getElementById("getThem");

    // give them classes
    divCard.className = "card";
    divImg.className = "card-image";
    divCont.className = "card-content";
    image.className = "image";
    buttonAdd.className = "btn";
    buttonMinus.className = "btn";
    buttonRemove.className = "btn";

    // giving the values
    image.src = item.imageURL;
    buttonAdd.innerHTML = "+";
    buttonMinus.innerHTML = "-";
    buttonRemove.innerHTML = "Remove";
    p.innerHTML = item.price;

    //appending them
    divImg.appendChild(image);
    divCont.appendChild(buttonAdd);
    divCont.appendChild(buttonMinus);
    divCont.appendChild(buttonRemove);
    divCont.appendChild(p);
    divCard.appendChild(divImg);
    divCard.appendChild(divCont);
    thatDiv.appendChild(divCard);
  };

  // to get the register user from the db

  // const user = () => {
  //   axios.get("/api/users").then((resp) => {
  //     console.log(resp.data);
  //   });
  // };

  const allprodudts = products.map((data) => (
    <div key={data._id} className="card">
      <div className="card-image">
        <img src={data.imageURL} style={{ width: "300px" }} />
      </div>
      <div className="card-content">
        <p className="card-title">{data.name}</p>
        <p>{data.price}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addCart(data)}>
          add to cart
        </button>
      </div>
    </div>
  ));
  return (
    <div>
      <h1>Products</h1>
      <div className="products container">{allprodudts}</div>
      <h3>Cart</h3>
      <div id="getThem"></div>
      <button className="btn" onClick={get}>
        get products
      </button>
      <AddProduct />
    </div>
  );
};

export default Products;
