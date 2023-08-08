import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/_Datepicker.scss";
import { getMonth, getYear } from "date-fns";
import { ko } from "date-fns/esm/locale";
import { range } from "lodash";

import backDefaultBtn from "../static/calender_back_default.png";
import nextDefaultBtn from "../static/calender_next_default.png";

// 부모 컴포넌트에서 받아온 getData의 date
interface DatepickerProps {
  data: string | undefined;
}

function Datepicker({ data }: DatepickerProps) {
  // getData에서 받아온 값을 표준시로 변경
  const getDate = data ? new Date(data) : null;

  const [startDate, setStartDate] = useState<Date | null>(getDate);

  // data가 변경될 때마다 startDate 업데이트
  useEffect(() => {
    if (data) {
      setStartDate(new Date(data));
    }
  }, [data]);

  const currentYear = new Date().getFullYear();
  const years = range(1990, currentYear + 1, 1).map((year) => `${year}년`);

  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  return (
    <main id="datepicker">
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="calHeader">
            <div className="calHeaderBox">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <img src={backDefaultBtn} alt="backDefaultBtn" />
              </button>

              <div>
                <select
                  className="yearSelect"
                  value={getYear(date)}
                  onChange={({ target: { value } }) =>
                    changeYear(parseInt(value))
                  }
                >
                  {years.map((option) => (
                    <option
                      className="option"
                      key={option}
                      value={parseInt(option)}
                    >
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  className="monthSelect"
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <img src={nextDefaultBtn} alt="nextDefaultBtn" />
              </button>
            </div>
          </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy.MM.dd"
        locale={ko}
        className="datepickerInput"
      />
    </main>
  );
}

export default Datepicker;
