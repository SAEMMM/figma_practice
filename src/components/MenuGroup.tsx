import React, { useState } from "react";
import "../styles/_Menu.scss";

import unfoldActive from "../static/gnb_unfold_active.png";
import foldActive from "../static/gnb_fold_active.png";

function MenuGroup() {
  // 대메뉴 열림여부 (fold = true)
  const [foldLargeMenu, setFoldLargeMenu] = useState(true);

  // 대메뉴 열기
  const openLargeMenuHandler = () => {
    setFoldLargeMenu(!foldLargeMenu);
  };

  console.log("열림여부:", foldLargeMenu);
  return (
    <section id="menuGroup">
      <div
        className={foldLargeMenu ? "largeMenu" : "foldLargeMenu + largeMenu"}
        onClick={openLargeMenuHandler}
      >
        <p>대메뉴</p>
        {foldLargeMenu ? (
          <img src={unfoldActive} alt="unfoldActive" />
        ) : (
          <img src={foldActive} alt="foldActive" />
        )}
      </div>
      {foldLargeMenu ? (
        <>
          <div className="smallMenu">
            <p>소메뉴</p>
          </div>
          <div className="smallMenu">
            <p>소메뉴</p>
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
}

export default MenuGroup;
