import axios from "axios";

const WEATHER_API_URL = "https://api.weatherbit.io/v2.0/forecast/daily?"

export const weatherApi = axios.create({
  baseURL: `${WEATHER_API_URL}`,
})