import React from "react";
import "../styles/_Content.scss";
import Datepicker from "./Datepicker";

function Content() {
  return (
    <>
      <main id="content">
        <article>
          <div className="infoBox">
            <p id="infoName">정보1</p>
            <span>정보 내용</span>
          </div>

          <div className="infoBox">
            <p>정보2</p>
            <input type="text" />
          </div>

          <div className="infoBox">
            <p>정보3</p>
            <span>정보 내용</span>
          </div>

          <div className="infoBox">
            <p>정보4</p>
            <input type="text" />
          </div>

          <div className="infoBox">
            <p>날짜</p>
            <Datepicker />
          </div>

          <div className="infoBoxRadio">
            <p>정보5</p>
            <div className="radioBox">
              <input type="radio" id="radio1" />
              <div className="radioDefault" />
              <label htmlFor="radio1">선택1</label>
            </div>
            <div className="radioBox">
              <input type="radio" id="radio2" />
              <div className="radioDefault" />
              <label htmlFor="radio2">선택2</label>
            </div>
            <div className="radioBox">
              <input type="radio" id="radio3" />
              <div className="radioDefault" />
              <label htmlFor="radio3">선택3</label>
            </div>
          </div>

          <div className="infoBox">
            <p>정보6</p>
            <div className="checkBox">
              <input type="checkbox" id="check1" />
              <div className="checkDefault" />
              <label htmlFor="check1">선택1</label>
            </div>
            <div className="checkBox">
              <input type="checkbox" id="check2" />
              <div className="checkDefault" />
              <label htmlFor="check2">선택2</label>
            </div>
            <div className="checkBox">
              <input type="checkbox" id="check3" />
              <div className="checkDefault" />
              <label htmlFor="check3">선택3</label>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default Content;
