<template>
  <header>
    <NavBar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
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

form {
  max-width: 500px;
  display: flex;
  flex-direction: column;

  label {
    position: absolute;
    left: -9999999px;
  }
}
</style>
