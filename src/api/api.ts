import axios from "axios";

// 데이터 불러오기
export const getData = async () => {
  try {
    const response = await axios.get("https://api-jobtest.json2bot.chat/test");
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

// 데이터 보내기
export const postData = async (info: {
  info2: string;
  info4: string;
  date: string | undefined;
  info5: string;
  info6: string[];
}) => {
  try {
    const response = await axios.post(
      "https://api-jobtest.json2bot.chat/test",
      info
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
