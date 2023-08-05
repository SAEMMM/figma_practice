import React from "react";
import "../styles/_Menu.scss";

import unfoldActive from "../static/gnb_unfold_active.png";

function Menu() {
  return (
    <>
      <main id="menu">
        {/* 첫번째 대메뉴 */}
        <article>
          <div className="largeMenu">
            <p>대메뉴</p>
            <img src={unfoldActive} alt="unfoldActive" />
          </div>
          <div className="smallMenu">
            <p>소메뉴</p>
          </div>
          <div className="smallMenu">
            <p>소메뉴</p>
          </div>
        </article>

        <section />
        
        {/* 두번째 대메뉴 */}
        <article>
          <div className="largeMenu">
            <p>대메뉴</p>
            <img src={unfoldActive} alt="unfoldActive" />
          </div>
          <div className="smallMenu">
            <p>소메뉴</p>
          </div>
          <div className="smallMenu">
            <p>소메뉴</p>
          </div>
        </article>
      </main>
    </>
  );
}

export default Menu;
