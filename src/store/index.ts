import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    count: 0,
    apiData: [],
    alreadyFetchedData: false,
    showBody: true,
    mobileMenuIconRotated: false,
  },

  mutations: {
    increment: (state) => state.count++,
    setAPIData: (state, payload) => (state.apiData = payload.value),
    stopFetching: (state) => (state.alreadyFetchedData = true),
    toggleBodyContent: (state) => (state.showBody = !state.showBody),
    toggleMobileMenuIconRotated: (state) =>
      (state.mobileMenuIconRotated = !state.mobileMenuIconRotated),
  },

  actions: {
    mobileMenuChange(context) {
      context.commit({ type: "toggleBodyContent" });
      context.commit({ type: "toggleMobileMenuIconRotated" });
    },
  },

  modules: {},

  getters: {
    fetchAPIDATA: function (state) {
      return state.apiData;
    },

    showBodyValue: function (state): boolean {
      return state.showBody;
    },

    showMobileChange: function (state): boolean {
      return state.mobileMenuIconRotated;
    },
  },
});
