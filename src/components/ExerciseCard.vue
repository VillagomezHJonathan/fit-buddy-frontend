<template>
  <div class="ExerciseCard">
    <p class="name">{{exercise.name}}</p>
    <p class="difficulty">{{exercise.difficulty}}</p>
    <p class="type">{{exercise.type}}</p>
    <p class="muscle">{{exercise.muscle}}</p>
    <p class="type">{{exercise.type}}</p>
    <p ref="instructions" class="instructions">{{exercise.instructions}}</p>
    
    <button @click="toggleInstructions">Toggle Instructions</button>
    <button v-if="this.findMode">Add</button>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: ['exercise', 'findMode'],
  methods: {
    toggleInstructions() {
      this.$refs.instructions.classList.toggle('show')
    }
  }
}
</script>

<style lang="scss" scoped>
.ExerciseCard {
  background-color: black;
  color: white;

  .instructions {
    display: none;

    &.show {
      display: block;
    }
  }
}
</style>