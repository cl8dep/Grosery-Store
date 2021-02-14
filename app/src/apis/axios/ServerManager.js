import axios from 'axios';
import { getBearerToken } from '../redux/store';

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
  }

  async signUp(args) {
    return await this.axios.post("account/sign-up", args)
  }

  async signIn(args) {
    return await this.axios.post("account/sign-in", args)
  }
}

export default ServerManager;

