import React, { useState } from "react";
import "../styles/_Menu.scss";

import unfoldActive from "../static/gnb_unfold_active.png";
import foldActive from "../static/gnb_fold_active.png";
import { useNavigate, useParams } from "react-router-dom";

// 부모 컴포넌트에서 받아온 props 타입 설정
interface MenuGroupProps {
  groupIndex: number;
}

function MenuGroup({ groupIndex }: MenuGroupProps) {
  const navigate = useNavigate();

  // 현재 페이지 추출
  const params = useParams();
  const id = params.id;
  console.log("현재 페이지:", id);

  // 대메뉴 열림여부 (fold = true)
  const [foldLargeMenu, setFoldLargeMenu] = useState(true);

  // 대메뉴 열기
  const openLargeMenuHandler = () => {
    setFoldLargeMenu(!foldLargeMenu);
  };

  console.log("열림여부:", foldLargeMenu);

  // 대메뉴 index에 따른 소메뉴 경로
  const smallMenuPath = (menuIndex: number) => {
    const baseIndex = (groupIndex - 1) * 2;
    return `/${baseIndex + menuIndex}`;
  };

  return (
    <section id="menuGroup">
      <div
        className={foldLargeMenu ? "largeMenu" : "activeMenu + largeMenu"}
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
          <div
            className={
              id === smallMenuPath(1).replace("/", "")
                ? "activeMenu + smallMenu"
                : "smallMenu"
            }
            onClick={() => navigate(smallMenuPath(1))}
          >
            <p>소메뉴</p>
          </div>
          <div
            className={
              id === smallMenuPath(2).replace("/", "")
                ? "activeMenu + smallMenu"
                : "smallMenu"
            }
            onClick={() => navigate(smallMenuPath(2))}
          >
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
