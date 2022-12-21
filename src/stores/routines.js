import { defineStore } from 'pinia'

export const routinesStore = defineStore('routines', {
  state: () => ({
    routines: [],
    currentRoutine: {}
  }),
  getters: {
    getRoutines: (state) => state.routines,
    getCurrentRoutine: (state) => state.currentRoutine
  },
  actions: {
    setRoutines(routines) {
      this.routines = routines
    },
    setCurrentRoutine(routine) {
      this.currentRoutine = routine
    }
  }
})
