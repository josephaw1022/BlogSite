import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    count: 0,
    apiData: "",
    alreadyFetchedData: false,
  },

  mutations: {
    increment: (state) => state.count++,
    setAPIData: (state, payload) =>
      (state.apiData = payload.payload.value),
    stopFetching: (state) => (state.alreadyFetchedData = true),
  },

  actions: {
    async consumeAPI() {
      if (!this.state.alreadyFetchedData) {
        const tempVal = await axios
          .get("http://localhost:4000/")
          .then((request) => request.data);
        this.commit({
          type: "setAPIData",
          payload: { value: tempVal },
        });
      }
      this.commit({
        type: "stopFetching",
      });
    },
  },

  modules: {},
});
