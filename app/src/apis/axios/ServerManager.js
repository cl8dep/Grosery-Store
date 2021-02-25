import axios from 'axios';
import { getBearerToken } from '../redux/store';
import { clearAuthState } from '../cookies/authStoreFromCookies';

class ServerManager {
  axios;
  constructor() {
    this.refreshInstance();
  }

  refreshInstance() {
    this.axios = axios.create({
      baseURL: "http://localhost:4000",
      headers: {
        Authorization: getBearerToken()
      },
    });

    this.axios.interceptors.response.use(response => {
      return response;
    }, error => {
      if (error.response.status === 401) {
        window.clearAuthData();
      }
      return error;
    })
  }

  async signUp(args) {
    return await this.axios.post("account/sign-up", args)
  }

  async signIn(args) {
    return await this.axios.post("account/sign-in", args)
  }

  async getAllProducts(args) {
    return await this.axios.get("products", args)
  }

  async addProductToCart(id, quantity) {
    return await this.axios.post("/cart/add-product", {
      id,
      quantity
    })
  }

  async getCartProducts() {
    return await this.axios.get("/cart")
  }
}

export default ServerManager;

