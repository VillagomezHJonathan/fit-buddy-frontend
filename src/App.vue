<template>
  <RouterView />
</template>

<script>
import { useExercisesStore } from './stores/exercises';

export default {
  name: 'App',
  setup() {
    const exercisesStore = useExercisesStore()

    return {
      exercisesStore
    }
  },
  components: {
    
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
  margin-top: 60px;
}
</style>
