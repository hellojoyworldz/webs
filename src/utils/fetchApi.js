import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "48",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  // async,
  // await(기본 주소에서 불러와야 하는데, 불러오기 전에 로딩이 되면 다 깨져버린다. 데이트가 다운받을 때 까지 기다려주는 것. 동기 될 때 까지)
  // 써봤냐고 물어봄 :
  const { data } = await axios.get(`${BASE_URL}/${url}`, options); //변수 {}:객체분해구조할당
  return data; // 실행
};
