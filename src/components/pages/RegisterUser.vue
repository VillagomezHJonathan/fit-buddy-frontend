<template>
  <div class="RegisterUser">
    <form>
      <label for="name">Name</label>
      <input
      @input="onChange"
      :value="name"
      type="text"
      id="name"
      name="name"
      placeholder="Name"/>

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

      <label for="confirmPassword">Confirm Password</label>
      <input
      @input="onChange"
      :value="confirmPassword"
      type="password"
      id="confirmPassword"
      name="confirmPassword"
      placeholder="Confirm Password"/>

      <button>Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterUser',
  methods: {
    onChange(evt) {
      const target = evt.target
      this[target.id] = target.value
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