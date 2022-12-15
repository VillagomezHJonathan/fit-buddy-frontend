<template>
  <nav>
    <p class="logo">LOGO</p>

    <div v-if="authenticated">
      <p>Link 1</p>
      <p>Link 2</p>
      <p>Link 3</p>
      <button class="link" @click="signOut">Sign Out</button>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  props: ['setUser', 'authenticated'],
  methods: {
    signOut() {
      this.setUser(null)
    }
  }
}

</script>

<style>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: black;
}

nav div {
  display: flex;
}
</style>