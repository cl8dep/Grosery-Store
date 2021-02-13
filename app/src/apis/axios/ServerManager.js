import axios from 'axios';

class ServerManager {
  axios;
  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:4000",

    });
  }

  async signUp(args) {
    return await this.axios.post("account/sign-up", args)
  }
}

export default ServerManager;

