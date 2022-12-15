<template>
  <header>
    <NavBar :setUser="setUser" :authenticated="authenticated" />
  </header>

  <main>
    <RouterView :setUser="setUser" :user="user" :authenticated="authenticated" />
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue';
import { CheckSession } from './services/auth';

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    user: null,
    authenticated: false
  }),
  methods: {
    setUser(user) {
      if (user === null) {
        this.user = null
        this.authenticated = false
        localStorage.clear()
      } else {
        this.user = user
        this.authenticated = true
      }
    },
    async sessionCheck() {
      const token = localStorage.getItem('token')
      if (token) {
       const payload = await CheckSession()
       this.setUser(payload)
      }
    }
  },
  mounted() {
    this.sessionCheck()
    // this.loginPrompt()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  overflow-x: hidden;

  .show {
    overflow-y: hidden;
  }
}

form {
  max-width: 300px;
  display: flex;
  flex-direction: column;

  label {
    position: absolute;
    left: -9999999px;
  }
}
</style>
