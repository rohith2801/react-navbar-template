import axios from "axios";

export const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const authApiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
