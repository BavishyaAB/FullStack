import axios from "axios";
const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const getWeather = (city) => {
    console.log("Fetching weather data for:", city);
    console.log("Using API key:", import.meta.env.VITE_WEATHER_API_KEY);
  return axios.get(
    `${baseURL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
  ).then((response) => {
    console.log("Weather data fetched:", response.data);
    return response.data;
  }).catch((error) => {
    console.error("Error fetching weather data:", error);
  });
}
export default { getWeather };
