<template>
  <div class="LoginUser">
    <form @submit="onSubmit">
      <label for="email">Email</label>
      <input
      @input="onChange"
      :value="email"
      type="email"
      id="email"
      name="email"
      placeholder="Email"/>

      <label for="password">Password</label>
      <input
      @input="onChange"
      :value="password"
      type="password"
      id="password"
      name="password"
      placeholder="Password"/>
      
      <button>Log In</button>
    </form>

    <p>Don't have an account? <RouterLink to="/register">Register</RouterLink></p>
  </div>
</template>

<script>
import { LoginUser } from '@/services/auth'

export default {
  name: 'RegisterUser',
  props: ['setUser'],
  methods: {
    onChange(evt) {
      const target = evt.target
      this[target.id] = target.value
    },
    async onSubmit(evt) {
      evt.preventDefault()

      const credentials = {
        email: this.email,
        password: this.password
      } 

      const payload = await LoginUser(credentials)

      if (payload) {
        this.setUser(payload)
        this.$router.push('/')
      }

      
      this.email = ''
      this.password = ''
    }
  },
  data: () => ({
    email: '',
    password: ''
  })
}
</script>

<style lang="scss" scoped>
form {
  margin: 0 auto;
}
</style>