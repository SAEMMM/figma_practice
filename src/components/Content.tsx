import React from "react";
import "../styles/_Content.scss";

function Content() {
  return (
    <>
      <main id="content">
        <article>
          <div>
            <p id="infoName">정보1</p>
            <span>정보 내용</span>
          </div>

          <div>
            <p>정보2</p>
            <input type="text" />
          </div>

          <div>
            <p>정보3</p>
            <span>정보 내용</span>
          </div>

          <div>
            <p>정보4</p>
            <input type="text" />
          </div>

          <div>
            <p>날짜</p>
            <input type="date" />
          </div>

          <div>
            <p>정보5</p>
            <input type="radio" />
            <label>선택1</label>
            <input type="radio" />
            <label>선택2</label>
            <input type="radio" />
            <label>선택3</label>
          </div>

          <div>
            <p>정보6</p>
            <input type="checkbox" />
            <label>선택1</label>
            <input type="checkbox" />
            <label>선택2</label>
            <input type="checkbox" />
            <label>선택3</label>
          </div>
        </article>
      </main>
    </>
  );
}

export default Content;
