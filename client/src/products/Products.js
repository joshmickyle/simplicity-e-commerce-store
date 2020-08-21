import React from "react";
import "./Products.css";
import { v4 as uuidv4 } from "uuid";

const Products = () => {
  const products = [
    {
      name: "jacket",
      image: url("./images/flask_black_cold.PNG"),
      price: 500,
      id: uuidv4(),
    },
    {
      name: "jacket",
      image: url("./images/jumper_black.PNG"),
      price: 500,
      id: uuidv4(),
    },
    {
      name: "jacket",
      image: (url = "jumper_white.PNG"),
      price: 500,
      id: uuidv4(),
    },
    {
      name: "jacket",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxMhSyTML4VirmXUS7-1u9Q7Xa9UQ_zOSU2WdDCidU8KMe9yQc9OwS-rhRdB-noRN7VgfRcH9B&usqp=CAc",
      price: 500,
      id: uuidv4(),
    },
    {
      name: "jacket",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxMhSyTML4VirmXUS7-1u9Q7Xa9UQ_zOSU2WdDCidU8KMe9yQc9OwS-rhRdB-noRN7VgfRcH9B&usqp=CAc",
      price: 500,
      id: uuidv4(),
    },
    {
      name: "jacket",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxMhSyTML4VirmXUS7-1u9Q7Xa9UQ_zOSU2WdDCidU8KMe9yQc9OwS-rhRdB-noRN7VgfRcH9B&usqp=CAc",
      price: 500,
      id: uuidv4(),
    },
    {
      name: "jacket",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxMhSyTML4VirmXUS7-1u9Q7Xa9UQ_zOSU2WdDCidU8KMe9yQc9OwS-rhRdB-noRN7VgfRcH9B&usqp=CAc",
      price: 500,
      id: uuidv4(),
    },
    {
      name: "jacket",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxMhSyTML4VirmXUS7-1u9Q7Xa9UQ_zOSU2WdDCidU8KMe9yQc9OwS-rhRdB-noRN7VgfRcH9B&usqp=CAc",
      price: 500,
      id: uuidv4(),
    },
    {
      name: "jacket",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxMhSyTML4VirmXUS7-1u9Q7Xa9UQ_zOSU2WdDCidU8KMe9yQc9OwS-rhRdB-noRN7VgfRcH9B&usqp=CAc",
      price: 500,
      id: uuidv4(),
    },
  ];

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
    image.src = item.image;
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

  const allprodudts = products.map((item) => (
    <div key={item.id} className="card">
      <div className="card-image">
        <img src={item.image} style={{ width: "300px" }} />
      </div>
      <div className="card-content">
        <p className="card-title">{item.name}</p>
        <p>{item.price}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addCart(item)}>
          add to cart
        </button>
      </div>
    </div>
  ));
  return (
    <div>
      <h1>product</h1>
      <div className="products container">{allprodudts}</div>
      <h3>Cart</h3>
      <div id="getThem"></div>
    </div>
  );
};

export default Products;
