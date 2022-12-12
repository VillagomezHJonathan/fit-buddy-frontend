<template>
  <div class="Week">
    <div :key="day" v-for="day in days">
      <WeekDay :day="day" :isToday="day === todaysDay" />
    </div>
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
  data: () => ({
    days: daysArr,
    todaysDay: todaysDate.dayName
  })
}
</script>

<style lang="scss" scoped>
.Week {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  
}
</style>