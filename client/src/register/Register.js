import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(data);

    axios.post("api/users", user).then((res) => {
      console.log(data);
    });
  };

  return (
    <div className="form-container container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="wrapper">
          <div className="main-content">
            <div className="header">
              <h1>Simplicity Sign up</h1>
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
                className="input-1"
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
                <a href="#">Forgot?</a>
              </div>
              <input type="submit" value="Log in" className="btn" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
