import CONFIG from "./config";

const API_ENDPOINT = {
  //auth
  REGISTER: `${CONFIG.ENDPOINT}/register`,
  LOGIN: `${CONFIG.ENDPOINT}/login`,

  //dasboard
  LOGOUT: (id) => `${CONFIG.ENDPOINT}/dasboard/${id}`,
  GET_ALL_DATA_DASBOARD: (id) => `${CONFIG.ENDPOINT}/dasboard/${id}`,
  UPDATE_DATA_DASBOARD: (id) => `${CONFIG.ENDPOINT}/dasboard/${id}`,

  //result
  GET_RESULT_PROFILE: (username) => `${CONFIG.ENDPOINT}/${username}`
}

export default API_ENDPOINT;