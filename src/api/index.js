import axios from "axios";

export const api = axios.create({
  baseURL: "https://afz08anorl.execute-api.ap-northeast-2.amazonaws.com/dev1",
});

export const getApiWithUser = (endpoint, header) => {
  const config = {
    header: {
      ...header,
    },
  };
  console.log(header);
  return api.get(endpoint, config).then((response) => response.data);
};

export const uploadWithS3 = async (url, file) => {
  await axios.put(url, file, {
    onUploadProgress: (e) => {
      //  Show progress
      console.log(e);
    },
  });
  return "done";
};

export const search = async (name, toke) => {
  return axios.get(`http://localhost:3000/dev/search-face?name=${name}`, {
    header: {
      token: toke,
    },
  });
};
