import CONFIG from "./config";

const API_ENDPOINT = {
  //auth
  REGISTER: `${CONFIG.BASEURL}/register`,
  LOGIN: `${CONFIG.BASEURL}/login`,

  //dasboard
  LOGOUT: (id) => `${CONFIG.BASEURL}/dasboard/${id}`,
  GET_ALL_DATA_DASBOARD: (id) => `${CONFIG.BASEURL}/dasboard/${id}`,
  UPDATE_DATA_DASBOARD: (id) => `${CONFIG.BASEURL}/dasboard/${id}`,

  //result
  GET_RESULT_PROFILE: (username) => `${CONFIG.BASEURL}/${username}`,
};

export default API_ENDPOINT;
