import React from "react";
import "../styles/_Main.scss";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Content from "../components/Content";

function Main() {
  return (
    <div className="container">
      <Menu />
      <Header />
      <Content />
    </div>
  );
}

export default Main;
