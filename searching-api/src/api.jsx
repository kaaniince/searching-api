import axios from "axios";
import { API_Key } from "./api_key";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${API_Key}`,
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default searchImages;
