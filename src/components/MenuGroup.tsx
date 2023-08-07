import React, { useState } from "react";
import "../styles/_Menu.scss";
import { useNavigate, useParams } from "react-router-dom";

import unfoldActive from "../static/gnb_unfold_active.png";
import foldActive from "../static/gnb_fold_active.png";
import unfoldInactive from "../static/gnb_unfold_inactive.png";
import foldInactive from "../static/gnb_fold_inactive.png";

// 부모 컴포넌트에서 받아온 props 타입 설정
interface MenuGroupProps {
  groupIndex: number;
}

function MenuGroup({ groupIndex }: MenuGroupProps) {
  const navigate = useNavigate();

  // 현재 페이지 추출
  const params = useParams();
  const id = params.id;

  // 대메뉴 열림여부 (unfold = true)
  const [unfoldLargeMenu, setFoldLargeMenu] = useState(true);

  // 대메뉴 열기
  const openLargeMenuHandler = () => {
    setFoldLargeMenu(!unfoldLargeMenu);
  };

  console.log("열림여부:", unfoldLargeMenu);

  // 대메뉴 index에 따른 소메뉴 경로
  const smallMenuPath = (menuIndex: number) => {
    const baseIndex = (groupIndex - 1) * 2;
    return `/${baseIndex + menuIndex}`;
  };

  // 현재 소메뉴에 따른 대메뉴 화살표 활성화
  const currentGroup =
    groupIndex === 1 ? id === "1" || id === "2" : id === "3" || id === "4";

  return (
    <section id="menuGroup">
      <div
        className={unfoldLargeMenu ? "largeMenu" : "activeMenu + largeMenu"}
        onClick={openLargeMenuHandler}
      >
        <p>대메뉴</p>
        {unfoldLargeMenu ? (
          <img
            src={currentGroup ? unfoldActive : unfoldInactive}
            alt="unfoldActive"
          />
        ) : (
          <img src={currentGroup ? foldActive : foldInactive} alt="foldActive" />
        )}
      </div>
      {unfoldLargeMenu ? (
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
