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
import { GetUserRoutine } from '@/services'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    user: null,
    authenticated: false,
    refresh: false
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
    async getRoutine() {
      if (this.user) {
        const data = await GetUserRoutine(this.user)
        this.routine = data
      }
    },
    async sessionCheck() {
      const token = localStorage.getItem('token')
      if (token) {
       const user = await CheckSession()
       const routine = await GetUserRoutine(user)

       let payload = null
       if (routine) {
         payload = {
          ...user,
          routine: routine
        }
       } else {
        payload = {
          ...user
        }
       }
       
       
       this.setUser(payload)
      }
    }
  },
  mounted() {
    this.sessionCheck()
  }
}
</script>

<style lang="scss">

* {
  transition: all 0.3s ease;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

body {
  background-color: #23222a;
}

button {
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  background-color: #76f9c2;
  border: none;
  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }
}

.link {
  background-color: transparent;
  border: none;
  font-size: 1em;
  color: white;
  text-decoration: underline;

  &:hover {
    color: #76f9c2;
  }
}

body {
  overflow-x: hidden;

  .show {
    overflow-y: hidden;
  }
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2.5em;
}

h3 {
  font-size: 2em;
}

p {
  font-size: 1.25em;
}

.name {
  text-transform: uppercase;
  font-weight: bold;
}

form {
  max-width: 300px;
  display: flex;
  flex-direction: column;

  input {
    padding: 1rem;
    border-radius: 1rem;
  }

  label {
    position: absolute;
    left: -9999999px;
  }
}
</style>
