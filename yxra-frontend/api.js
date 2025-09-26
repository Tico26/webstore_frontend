import axios from "axios";
const webstoreApis = axios.create({
  baseURL: "https://webstore-ryo9.onrender.com/api/",
});

export const getStores = () => {
  return webstoreApis.get(`/`).then((response) => {
    return response.data.allShops;
  });
};
