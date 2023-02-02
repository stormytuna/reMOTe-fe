import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false,
    isLoggedIn: false,
    username: ''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    setUser: () => {
      this.store.state.authenticated = true
      this.store.state.isLoggedIn = true
    },
    logOut: () => {
      this.store.state.authenticated = false
      this.store.state.isLoggedIn = false
      this.store.state.username = ''
    }
  },
  modules: {
  }
})
