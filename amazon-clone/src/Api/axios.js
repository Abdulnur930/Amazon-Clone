import axios from "axios"
const axiosInstance = axios.create({
  // local instance firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-866b0/us-central1/api",
  // depolyed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-g121.onrender.com/",
  //local
  //baseURL: "http://localhost:1000
});
export { axiosInstance };