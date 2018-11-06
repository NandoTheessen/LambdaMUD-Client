import React, { useState } from "react";
import Router from "@reach/router";
import Axios from "axios";
import Auth from "./Auth";

let AuthContainer = ({ keyword }) => {
  let submitAuth = async data => {
    let response = await Axios.post(
      `https://muddiest.herokuapp.com/api/{keyword}`,
      data
    ).catch(err => console.log(err));
    localStorage.setItem("token", response.data.token);
  };
  return (
    <>
      <Auth path="login" keyword submit={submitAuth} />
      <Auth path="register" keyword submit={submitAuth} />
    </>
  );
};

export default AuthContainer;
