import axios from "axios";

export default async term => {
  const response = await axios.get(
    `https://www.omdbapi.com/?s="${term.trim()}"&apikey=c6f9646d`
  );
  return response.data;
};
