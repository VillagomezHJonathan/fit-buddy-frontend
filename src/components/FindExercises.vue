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
      <div 
      class="muscle" 
      @click="onClick(muscle)" 
      :key="muscle" 
      v-for="muscle in muscles">
        <p>{{muscle}}</p>
      </div>
    </div>

    <div class="results" v-if="searched">
      <ExerciseCard :key="exercise.name" v-for="exercise in exercises" :exercise="exercise" /> 
    </div>
  </div>
</template>

<script>
import ExerciseCard from './ExerciseCard.vue';
import { GetExercises } from '../services/api';
import { musclesArr } from '@/utils';

export default {
  name: 'FindExercises',
  components: {
    ExerciseCard
  },
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
        this.exercises = data
        this.searched = true
        this.searchQuery = ''
      })
      .catch((err) => console.log(err))
    },
    onClick(muscle) {
      GetExercises({muscle: muscle})
      .then((data) => {
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
      padding: 0.25rem;
      cursor: pointer;
    }
  }
}
</style>