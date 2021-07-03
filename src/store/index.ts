import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    count: 0,
    apiData: [],
    alreadyFetchedData: false,
  },

  mutations: {
    increment: (state) => state.count++,
    setAPIData: (state, payload) => (state.apiData = payload.value),
    stopFetching: (state) => (state.alreadyFetchedData = true),
  },

  actions: {},

  modules: {},

  getters: {
    fetchAPIDATA: function (state) {
      return state.apiData;
    },
  },
});
