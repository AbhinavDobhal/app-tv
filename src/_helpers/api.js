import axios from "axios";
export default {
  user: {
    login: credentials =>
      axios
        .post("https://ehp.app/api/v5/login", credentials)
        .then(res => res.data)
  },
  epass: {
    //  fetchAll: () => axios.get("https://www.e-hallpass.app/api/v4/epass").then(res => res.data)
    fetchAll: () =>
      axios
        .get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json")
        .then(res => res.data.posts)
  }
};
