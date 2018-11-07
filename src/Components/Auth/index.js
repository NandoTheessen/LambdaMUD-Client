import React from "react";
import Axios from "axios";
import Auth from "./Auth";

let AuthContainer = ({ keyword, path }) => {
  let submitAuth = async data => {
    let response = await Axios.post(
      `https://muddiest.herokuapp.com/api/{keyword}`,
      data
    ).catch(err => console.log(err));
    localStorage.setItem("token", response.data.token);
  };
  return (
    <>
      <Auth path={path} submit={submitAuth} />
    </>
  );
};

export default AuthContainer;
