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
import { GetExercises } from './services/api';

export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted: function() {
    GetExercises()
      .then((data) => {
        this.exercises = data
      })
      .catch((err) => console.log(err))
  },
  data: () => ({
    exercises: []
  })
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
