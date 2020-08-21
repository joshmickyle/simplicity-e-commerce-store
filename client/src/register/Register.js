import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const user = () => {
    axios.get("/api/users").then((resp) => {
      console.log(resp);
    });
  };

  const onSubmit = (data) => {
    const userr = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(data);
    // send the user to databse
    axios.post("/api/users", userr).then((res) => {
      console.log(data);
    });
    //get the user
  };

  return (
    <div className="form-container container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="wrapper">
          <div className="main-content">
            <div className="header">
              <div className="header img">
                <p>Simplicity Sign up</p>
              </div>
            </div>
            <div className="l-part">
              <input
                type="text"
                placeholder="Name"
                ref={register}
                // required
                name="name"
                className="input-1"
              />
              <input
                type="email"
                placeholder="Username"
                name="email"
                ref={register}
                // required
                className="input1"
              />
              <div className="overlap-text">
                <input
                  type="password"
                  placeholder="Password"
                  ref={register}
                  // required
                  name="password"
                  className="input-2"
                />
              </div>
              {/* <input
                type="submit"
                value="Sing Up"
                className="btn"
               
              /> */}
              <button className="btn red" type="submit">
                sign up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
