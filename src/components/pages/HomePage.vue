<template>
  <div class="Home">
    <TodaysDate />
    <WeekFull :user="user" :updateUser="updateUser" />  
    <h2 v-if="this.user">Hello {{this.user.name}}!</h2>
    <h3>Today's Schedule:</h3>
    <div v-if="getDayExercises(todaysDay).length">
      <p  v-for="e in getDayExercises(todaysDay)" :key="e.name">
        {{e.exercise_name.toUpperCase()}} Sets: {{e.sets}} Reps: {{e.reps}}
      </p>
    </div>

    <p v-else>Rest</p>
    
    <FindExercises />
  </div>
</template>

<script>
import WeekFull from '../WeekFull.vue';
import TodaysDate from '../TodaysDate.vue';
import { getTodaysDate } from '@/utils';

const date = getTodaysDate()


export default {
  name: 'HomePage',
  props: ['user', 'authenticated', 'setUser'],
  components: {
    WeekFull,
    TodaysDate
  },
  data: () => ({
    todaysDay: date.dayName,
    exercises: []
  }),
  methods: {
    getDayExercises(dayName){
      if (this.user) {
        return this.user.routine.exercises.filter((exercise) => exercise.day_name === dayName)
      }

      return []
    },
    updateUser() {
      this.$forceUpdate();
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>

</style>