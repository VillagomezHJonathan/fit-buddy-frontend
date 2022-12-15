<template>
  <div class="Week" ref="week">
      <WeekDay 
      :key="day" 
      v-for="day in days" 
      :day="day" 
      :isToday="day === todaysDay" 
      :week="this.$refs.week"
      :exercises="getDayExercises(day)" />
  </div>
</template>

<script>
import WeekDay from './WeekDay.vue';
import { GetUserRoutine } from '@/services'
import { daysArr, getTodaysDate } from '../utils'

const todaysDate = getTodaysDate()

export default {
  name: 'WeekFull',
  components: {
    WeekDay
  },
  props: ['user'],
  data: () => ({
    days: daysArr,
    todaysDay: todaysDate.dayName,
    routine: []
  }),
  methods: {
    async getRoutine() {
      if (this.user) {
        const data = await GetUserRoutine(this.user)
        this.routine = data
      }
    },
    getDayExercises(dayName){
      return this.routine.filter((exercise) => exercise.day_name === dayName)
    }
  },
  mounted() {
    this.getRoutine()
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