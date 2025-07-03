import { createStore } from 'vuex'

export default createStore({
  state: {
    user: "",
  },
  getters: {
  },
  mutations: {
    login(state, user) {
      state.user = user;
      localStorage.setItem('user', user);
      alert("Login successful");
    },
    logout(state) {
      state.user = "";
      localStorage.removeItem('user');
      alert("Logged out");
    },
    initializer(state) {
      const user = localStorage.getItem('user');
      if (user) state.user = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
