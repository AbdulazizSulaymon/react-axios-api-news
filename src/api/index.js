import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://inshortsapi.vercel.app",
  //   headers: {
  //     common: {
  //       Authorization: "AUTH TOKEN",
  //     },
  //   },
});

instanceAxios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

console.log(instanceAxios.defaults.headers);

export const getNewsByCategory = async (category = "all") => {
  try {
    const res = await instanceAxios.get(`news?category=${category}`);

    console.log(res.data);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
