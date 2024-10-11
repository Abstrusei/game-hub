import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "755dbe246e074ccaae5f86696b4079ce",
  },
});
