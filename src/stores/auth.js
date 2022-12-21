import { defineStore } from 'pinia'

export const authStore = defineStore('auth', {
  state: {
    user: null,
    authenticated: false
  },
  getters: {
    getUser: (state) => state.user,
    getAuthenticated: (state) => state.authenticated
  },
  setters: {
    setUser(user) {
      this.user = user
    },
    setAuthenticated(bool) {
      this.authenticated = bool
    }
  }
})
