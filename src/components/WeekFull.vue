<template>
  <div class="Week" ref="week">
      <WeekDay 
      :key="day" 
      v-for="day in days" 
      :day="day" 
      :isToday="day === todaysDay" 
      :week="this.$refs.week"
      :exercises="getDayExercises(day)"
      :user="user"
      :updateUser="updateUser" />
  </div>
</template>

<script>
import WeekDay from './WeekDay.vue';
import { daysArr, getTodaysDate } from '../utils'

const todaysDate = getTodaysDate()

export default {
  name: 'WeekFull',
  components: {
    WeekDay
  },
  props: ['user', 'updateUser'],
  data: () => ({
    days: daysArr,
    todaysDay: todaysDate.dayName
  }),
  methods: {
    getDayExercises(dayName){
      if (this.user) {
        return this.user.routine.exercises.filter((exercise) => exercise.day_name === dayName)
      }

      return []
    }
  },
  mounted() {
  
  }
}
</script>

<style lang="scss" scoped>
.Week {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>