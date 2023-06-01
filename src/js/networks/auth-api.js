import API_ENDPOINT from "../globals/api-endpoints";
import CONFIG from "../globals/config";

class AuthApi {
  static async register({ email, username, password }) {
    const response = await fetch(API_ENDPOINT.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, password}),
    });

    const responseJson = await response.json();

    return responseJson;
  }

  static async login({ email, password }){
    const response = await fetch(API_ENDPOINT.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });

    const responseJson = await response.json();

    // AuthApi.setUserToken(CONFIG.USER_TOKEN, responseJson.data.auth);
    return responseJson;

  }

  // static setUserToken(key, value){
  //   return sessionStorage.setItem(key, value);
  // }
}

export default AuthApi;