import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getApiWithUser = (endpoint, header) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
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
