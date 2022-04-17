import axios from "axios";

const CROSS_DOMAIN = "https://mycorsproxy-crossdomainyz.herokuapp.com/"
const API_URL = "https://www.metaweather.com/api/location/"

export const api = axios.create({
  baseURL: `${CROSS_DOMAIN}${API_URL}`,
})