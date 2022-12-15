<template>
  <div class="ExerciseCard">
    <p class="name">{{exercise.name}}</p>

    <form @submit="onSubmit">
      <label for="sets">Sets</label>
      <input
      @input="onChange"
      :value="sets"
      type="number"
      id="sets"
      name="sets"
      placeholder="Sets"
      required />
      
      <label for="reps">Reps</label>
      <input
      @input="onChange"
      :value="reps"
      type="number"
      id="reps"
      name="reps"
      placeholder="Reps"
      required />

      <button >Add</button>
    </form>

    <p class="difficulty">Difficulty: {{exercise.difficulty}}</p>
    <p class="type">Type: {{exercise.type}}</p>
    <p class="muscle">Muscle: {{exercise.muscle}}</p>
    <p ref="instructions" class="instructions">{{exercise.instructions}}</p>

    <button @click="toggleInstructions">Toggle Instructions</button>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: ['exercise', 'findMode', 'addExercise'],
  methods: {
    toggleInstructions() {
      this.$refs.instructions.classList.toggle('show')
    },
    onChange(evt) {
      const target = evt.target
      this[target.id] = target.value
    },
    onSubmit(evt) {
      evt.preventDefault()

      const newExercise = {
			name: this.exercise.name,
			type: this.exercise.type,
			muscle: this.exercise.muscle,
			equipment: this.exercise.equipment,
			instructions: this.exercise.instructions,
			sets: parseInt(this.sets),
			reps: parseInt(this.reps),
			duration: 0
      }

      this.addExercise(newExercise)

      this.reps = ''
      this.sets = ''
    }
  }, 
  data: () => ({
    reps: '',
    sets: ''
  })
}
</script>

<style lang="scss" scoped>
.ExerciseCard {
  width: 500px;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem auto;
  background-color: #23222a;
  color: white;

  form {
    flex-direction: row;
    margin: 0 auto;

    input {
      width: 100px;
    }
  }

  .instructions {
    display: none;

    &.show {
      display: block;
    }
  }
}
</style>