<template>
  <div class="LoginUser">
    <form>
      <label for="name">Name</label>
      <input
      type="text"
      id="name"
      name="name"
      placeholder="Name"/>

      <label for="email">Email</label>
      <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"/>

      <label for="password">Password</label>
      <input
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
  name: 'RegisterUser'
}
</script>

<style lang="scss" scoped></style>