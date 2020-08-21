import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const product = {
      name: data.name,
      imageURL: data.imageURL,
      price: data.price,
    };

    console.log(data);
    // send the user to databse
    axios.post("/api/product", product).then((res) => {
      console.log(data);
    });
  };

  return (
    <div className="form-container container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="wrapper">
          <div className="main-content">
            <div className="l-part">
              <input
                type="text"
                ref={register}
                required
                name="name"
                className="input-1"
              />
              <input
                type="text"
                name="imageURL"
                ref={register}
                required
                className="input1"
              />
              <div className="overlap-text">
                <input
                  type="text"
                  ref={register}
                  required
                  name="price"
                  className="input-2"
                />
              </div>
              <input type="submit" value="add to store" className="btn" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
