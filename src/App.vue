<template>
  <header>
    <NavBar />
  </header>

  <main>
    <WeekFull />    
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue';
import WeekFull from './components/WeekFull.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    WeekFull
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
