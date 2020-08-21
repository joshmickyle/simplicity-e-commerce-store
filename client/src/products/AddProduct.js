import React from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/addProduct">
          <i
            className="large material-icons tooltipped"
            data-position="top"
            data-tooltip="add product"
          >
            add
          </i>
        </Link>
      </div>
    </div>
  );
};

export default AddProduct;
