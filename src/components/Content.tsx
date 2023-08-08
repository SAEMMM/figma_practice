import React, { useState, useEffect, useCallback } from "react";
import "../styles/_Content.scss";
import Datepicker from "./Datepicker";

import { useQuery, useMutation } from "@tanstack/react-query";
import { getData, postData } from "../api/api";

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

// post 에러 시 타입
interface ErrorMsg {
  message: string;
}

interface ErrorData {
  error: ErrorMsg;
}

interface Response {
  data: ErrorData;
  status: number;
}

interface ErrorResponse {
  message: string;
  response: Response;
}

function Content() {
  // data 불러오기
  const { data } = useQuery<DataInterface>(["getData"], getData);

  // radio 버튼 상태 관리
  const [radioSelected, setRadioSelected] = useState("");

  const radioSelectedHandler = (value: string) => {
    setRadioSelected(value);
  };

  // checkbox 버튼 상태 관리
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>([]);

  const checkboxHandler = (index: number) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  // input text 상태 관리
  const [info2Value, setInfo2Value] = useState(data?.info2 || "");
  const [info4Value, setInfo4Value] = useState(data?.info4 || "");

  // datepicker 날짜 관리
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    undefined
  );

  const handleDateChange = useCallback((date: Date | null): void => {
    if (date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      setSelectedDate(`${year}-${month}-${day}`);
    }
  }, []);

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

    // input text 업데이트
    setInfo2Value(data?.info2 || "");
    setInfo4Value(data?.info4 || "");
  }, [data]);

  // radioSelected 값 변환
  const radioValue = () => {
    if (radioSelected === "radio1") {
      return "선택1";
    } else if (radioSelected === "radio2") {
      return "선택2";
    } else if (radioSelected === "radio3") {
      return "선택3";
    }
    return ""; // 기본값
  };

  // checkboxStates 값 변환
  const checkboxValues = () => {
    return checkboxStates
      .map((checked, index) => (checked ? `선택${index + 1}` : null))
      .filter((value) => value !== null);
  };

  // 저장 mutation
  const postMutation = useMutation(
    (info: {
      info2: string;
      info4: string;
      date: string | undefined;
      info5: string;
      info6: string[];
    }) => postData(info),
    {
      onSuccess: (response) => {
        alert(response.data.message);
      },
      onError: (error: ErrorResponse) => {
        if (error.response.status === 500) {
          alert("서버와의 연결이 끊어졌습니다. 다시 시도해주세요.");
        } else {
          alert(`${error.response.data.error.message} 다시 시도해주세요.`);
        }
      },
    }
  );

  // 저장버튼 클릭 시, data post
  const onSubmitHadler = async () => {
    try {
      const info = {
        info2: info2Value,
        info4: info4Value,
        date: selectedDate,
        info5: radioValue(),
        info6: checkboxValues().filter((value) => value !== null) as string[],
      };

      await postMutation.mutateAsync(info);
    } catch (error) {
      console.log("전송 실패:", error);
    }
  };
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
            <Datepicker data={data?.date} handleDateChange={handleDateChange} />
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
        <button type="button" onClick={onSubmitHadler}>
          저장
        </button>
      </footer>
    </>
  );
}

export default Content;
