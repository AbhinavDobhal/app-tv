import axios from "axios";

export default (token = null) => {
  if (token) {
    // axios.defaults.headers.common.authorization = `Bearer ${token}`;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
