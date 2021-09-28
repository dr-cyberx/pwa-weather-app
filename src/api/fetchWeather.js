import axios from "axios";
const apiKey = "7c8e6b6d71bb77564aba3b30dc321bb1";
const URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: apiKey,
    },
  });
  return data;
};
