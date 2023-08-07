import React from "react";
import "../styles/_Menu.scss";
import MenuGroup from "./MenuGroup";

function Menu() {
  return (
    <>
      <main id="menu">
        <MenuGroup groupIndex={1} />
        <section id="paragraphDivision" />
        <MenuGroup groupIndex={2} />
      </main>
    </>
  );
}

export default Menu;
