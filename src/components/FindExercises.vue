<template>
  <div class="FindExercises">
    <form @submit="onSubmit">
      <input 
      type="text" 
      id="search" 
      :value="searchQuery" 
      @input="onChange" />

      <button>Search</button>
    </form>

    <div class="muscles-container">
      <div class="muscle" :key="muscle" v-for="muscle in muscles">
        <p>{{muscle}}</p>
      </div>
    </div>

    <div class="results" v-if="searched">
      <div class="exercise-card" :key="exercise.name" v-for="exercise in exercises">
        <p class="name">{{exercise.name}}</p>
        <p class="difficulty">{{exercise.difficulty}}</p>
        <p class="type">{{exercise.type}}</p>
        <p class="muscle">{{exercise.muscle}}</p>
        <p class="type">{{exercise.type}}</p>
        <p class="instructions">{{exercise.instructions}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { GetExercises } from '../services/api';
import { musclesArr } from '@/utils';

export default {
  name: 'FindExercises',
  data: () => ({
    exercises: [],
    muscles: musclesArr,
    searchQuery: '',
    searched: false
  }),
  methods: {
    onChange(evt) {
      const target = evt.target
      this.searchQuery = target.value
    },
    onSubmit(evt) {
      evt.preventDefault()
      GetExercises({name: this.searchQuery})
      .then((data) => {
        console.log(data)
        this.exercises = data
        this.searched = true
        this.searchQuery = ''
      })
      .catch((err) => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.FindExercises {

  .muscles-container {
    display: flex;
    flex-wrap: wrap;

    .muscle {
      padding: 1rem;
      cursor: pointer;
    }
  }
}
</style>