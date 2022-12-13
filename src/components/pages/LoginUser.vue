<template>
  <div class="LoginUser">
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
      
      <button>Log In</button>
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
    password: ''
  })
}
</script>

<style lang="scss" scoped></style>