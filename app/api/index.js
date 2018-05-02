import axios from "axios";
export class ApiConnect {
  constructor({ commit, key_action }) {
    this.commit = commit ? commit : null;
    this.key_action = key_action ? key_action : null;
  }
  async get(url) {
    console.time(url);
    await axios
      .get(url)
      .then(response => {
        if (response.data.status != 200) {
          throw "404";
        }
        this.commit(this.key_action, { data: response.data.data });
        console.timeEnd(url);
      })
      .catch(error => {
        console.log("api error:" + error);
        throw error;
      });
  }
  setConfigApi() {
    return {
      timeout: 30000,
      responseType: "json",
      Authorization: "Basic Y2xpZW50OnNlY3JldA=="
    };
  }
}
