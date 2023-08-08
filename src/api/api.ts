import axios from "axios";

// 데이터 불러오기
export const getData = async () => {
  try {
    const response = await axios.get("https://api-jobtest.json2bot.chat/test");
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getData;
