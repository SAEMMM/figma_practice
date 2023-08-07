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

          <div className="infoBox">
            <p>정보5</p>
            <div className="radioNcheckBox">
              <input type="radio" />
              <label>선택1</label>
            </div>
            <div className="radioNcheckBox">
              <input type="radio" />
              <label>선택2</label>
            </div>
            <div className="radioNcheckBox">
              <input type="radio" />
              <label>선택3</label>
            </div>
          </div>

          <div className="infoBox">
            <p>정보6</p>
            <div className="radioNcheckBox">
              <input type="checkbox" />
              <label>선택1</label>
            </div>
            <div className="radioNcheckBox">
              <input type="checkbox" />
              <label>선택2</label>
            </div>
            <div className="radioNcheckBox">
              <input type="checkbox" />
              <label>선택3</label>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default Content;
