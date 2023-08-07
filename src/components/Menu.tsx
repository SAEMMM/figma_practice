import React from "react";
import "../styles/_Menu.scss";
import MenuGroup from "./MenuGroup";

function Menu() {
  return (
    <>
      <main id="menu">
        <MenuGroup />

        <section id="paragraphDivision" />

        <MenuGroup />
      </main>
    </>
  );
}

export default Menu;
