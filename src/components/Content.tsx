import React, { useState, useEffect } from "react";
import "../styles/_Content.scss";
import Datepicker from "./Datepicker";

import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/api";

// getData의 타입
interface DataInterface {
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  date: string;
  info5: string;
  info6: string[];
}

function Content() {
  // data 불러오기
  const { data } = useQuery<DataInterface>(["getData"], getData);

  // radio 버튼 상태 관리
  const [radioSelected, setRadioSelected] = useState("");

  const radioSelectedHandler = (value: string) => {
    setRadioSelected(value);
  };

  // useEffect(() => {
  //   if (data?.info5 === "선택1") {
  //     setRadioSelected("radio1");
  //   } else if (data?.info5 === "선택2") {
  //     setRadioSelected("radio2");
  //   } else if (data?.info5 === "선택3") {
  //     setRadioSelected("radio3");
  //   }
  // }, [data?.info5]);

  // checkbox 버튼 상태 관리
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([]);

  // useEffect(() => {
  //   if (data?.info6) {
  //     const newCheckboxStates = [false, false, false];
  //     data.info6.forEach((item) => {
  //       if (item === "선택1") newCheckboxStates[0] = true;
  //       else if (item === "선택2") newCheckboxStates[1] = true;
  //       else if (item === "선택3") newCheckboxStates[2] = true;
  //     });
  //     setCheckboxStates(newCheckboxStates);
  //   }
  // }, [data?.info6]);

  const checkboxHandler = (index: number) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  // input text 상태 관리
  const [info2Value, setInfo2Value] = useState(data?.info2 || "");
  const [info4Value, setInfo4Value] = useState(data?.info4 || "");

  useEffect(() => {
    // radioSelected 업데이트
    if (data?.info5 === "선택1") {
      setRadioSelected("radio1");
    } else if (data?.info5 === "선택2") {
      setRadioSelected("radio2");
    } else if (data?.info5 === "선택3") {
      setRadioSelected("radio3");
    }

    // checkboxStates 업데이트
    if (data?.info6) {
      const newCheckboxStates = [false, false, false];
      data.info6.forEach((item) => {
        if (item === "선택1") newCheckboxStates[0] = true;
        else if (item === "선택2") newCheckboxStates[1] = true;
        else if (item === "선택3") newCheckboxStates[2] = true;
      });
      setCheckboxStates(newCheckboxStates);
    }

    // input text 상태 초기화
    setInfo2Value(data?.info2 || "");
    setInfo4Value(data?.info4 || "");
  }, [data]);

  return (
    <>
      <main id="content">
        <article>
          <div className="infoBox">
            <p id="infoName">정보1</p>
            <span>{data?.info1}</span>
          </div>

          <div className="infoBox">
            <p>정보2</p>
            <input
              type="text"
              value={info2Value}
              onChange={(e) => setInfo2Value(e.target.value)}
            />
          </div>

          <div className="infoBox">
            <p>정보3</p>
            <span>{data?.info3}</span>
          </div>

          <div className="infoBox">
            <p>정보4</p>
            <input
              type="text"
              value={info4Value}
              onChange={(e) => setInfo4Value(e.target.value)}
            />
          </div>

          <div className="infoBox">
            <p>날짜</p>
            <Datepicker data={data?.date} />
          </div>

          <div className="infoBoxRadio">
            <p>정보5</p>
            <div id="radioNmsg">
              <div id="radioSelectGroup">
                <div className="radioBox">
                  <input
                    type="radio"
                    id="radio1"
                    checked={radioSelected === "radio1"}
                    onChange={() => radioSelectedHandler("radio1")}
                  />
                  <div className="radioDefault" />
                  <label htmlFor="radio1">선택1</label>
                </div>
                <div className="radioBox">
                  <input
                    type="radio"
                    id="radio2"
                    checked={radioSelected === "radio2"}
                    onChange={() => radioSelectedHandler("radio2")}
                  />
                  <div className="radioDefault" />
                  <label htmlFor="radio2">선택2</label>
                </div>
                <div className="radioBox">
                  <input
                    type="radio"
                    id="radio3"
                    checked={radioSelected === "radio3"}
                    onChange={() => radioSelectedHandler("radio3")}
                  />
                  <div className="radioDefault" />
                  <label htmlFor="radio3">선택3</label>
                </div>
              </div>

              {radioSelected === "radio3" ? (
                <div id="radio3SelectMsg">
                  <span>* 선택시 텍스트가 표시됩니다.</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="infoBox">
            <p>정보6</p>
            <div className="checkBox">
              <input
                type="checkbox"
                id="check1"
                checked={checkboxStates[0]}
                onChange={() => checkboxHandler(0)}
              />
              <div className="checkDefault" />
              <label htmlFor="check1">선택1</label>
            </div>
            <div className="checkBox">
              <input
                type="checkbox"
                id="check2"
                checked={checkboxStates[1]}
                onChange={() => checkboxHandler(1)}
              />
              <div className="checkDefault" />
              <label htmlFor="check2">선택2</label>
            </div>
            <div className="checkBox">
              <input
                type="checkbox"
                id="check3"
                checked={checkboxStates[2]}
                onChange={() => checkboxHandler(2)}
              />
              <div className="checkDefault" />
              <label htmlFor="check3">선택3</label>
            </div>
          </div>
        </article>
      </main>

      <footer id="submitBox">
        <button>저장</button>
      </footer>
    </>
  );
}

export default Content;
