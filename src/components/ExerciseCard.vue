<template>
  <div class="ExerciseCard">
    <p class="name">{{exercise.name}}</p>
    <p class="difficulty">{{exercise.difficulty}}</p>
    <p class="type">{{exercise.type}}</p>
    <p class="muscle">{{exercise.muscle}}</p>
    <p class="type">{{exercise.type}}</p>
    <p class="instructions">{{exercise.instructions}}</p>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    exercise: Object
  }
}
</script>

<style lang="scss" scoped>
.ExerciseCard {
  background-color: black;
  color: white;
}
</style>