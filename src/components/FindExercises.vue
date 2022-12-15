<template>
  <div class="FindExercises">
    <form @submit="onSubmit">
      <input 
      type="text" 
      id="search" 
      :value="searchQuery" 
      @input="onChange"
      placeholder="Search" />

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
      <ExerciseCard :addExercise="addExercise" :findMode="this.findMode" :key="exercise.name" v-for="exercise in exercises" :exercise="exercise" /> 
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
  props: ['findMode', 'addExercise'],
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
    padding: 0 2rem;

    .muscle {
      padding: 0.25rem 1rem;
      cursor: pointer;
      background-color: #5f5e6a;
      border-radius: 1rem;
      color: #76f9c2;
      margin: 0.5rem;
    }
  }

  .results {
    overflow-y: scroll;
    height: 500px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  form {
    margin: 1rem auto;
    flex-direction: row;
  }
}
</style>