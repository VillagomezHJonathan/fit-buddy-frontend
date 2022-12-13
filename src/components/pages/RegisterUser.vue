<template>
  <div class="RegisterUser">
    <form>
      <label for="name">Name</label>
      <input
      type="text"
      id="name"
      name="name"/>

      <label for="email">Email</label>
      <input
      type="email"
      id="email"
      name="email"/>

      <label for="password">Password</label>
      <input
      type="password"
      id="password"
      name="password"/>

      <label for="confirmPassword">Confirm Password</label>
      <input
      type="password"
      id="confirmPassword"
      name="confirmPassword"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterUser'
}
</script>

<style lang="scss" scoped></style>