<template>
  <div class="RegisterUser">
    <form @submit="onSubmit">
      <label for="name">Name</label>
      <input
      @input="onChange"
      :value="name"
      type="text"
      id="name"
      name="name"
      placeholder="Name"
      required />

      <label for="email">Email</label>
      <input
      @input="onChange"
      :value="email"
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      required />

      <label for="password">Password</label>
      <input
      @input="onChange"
      :value="password"
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      required />

      <label for="confirmPassword">Confirm Password</label>
      <input
      @input="onChange"
      :value="confirmPassword"
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Confirm Password"
      required />

      <button>Register</button>
    </form>

    <p>Already have an account? <RouterLink to="/login">Log In</RouterLink></p>
  </div>
</template>

<script>
import { Register } from '@/services/auth'

export default {
  name: 'RegisterUser',
  methods: {
    onChange(evt) {
      const target = evt.target
      this[target.id] = target.value
    },
    async onSubmit(evt) {
      evt.preventDefault()
      if (this.password === this.confirmPassword) {
        const data = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        await Register(data)
        this.$router.push('/login')
      }

      this.name = ''
      this.email = ''
      this.password = ''
      this.confirmPassword = ''
    }
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
}
</script>

<style lang="scss" scoped></style>