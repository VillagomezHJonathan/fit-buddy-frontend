import { defineStore } from 'pinia'

export const useExercisesStore = defineStore('exercises', {
  state: () => ({
    exercises: []
  }),
  getters: {
    allExercises: (state) => state.exercises
  },
  actions: {
    setExercises(e) {
      this.exercises = e
    }
  }
})
