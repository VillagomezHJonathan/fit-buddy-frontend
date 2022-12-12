<template>
  <div class="Week">
    <div :key="day" v-for="day in days">
      <WeekDay :day="day" />
    </div>
  </div>
</template>

<script>
import WeekDay from './WeekDay.vue';
import { daysArr } from '../utils'

export default {
  name: 'WeekFull',
  components: {
    WeekDay
  },
  data: () => ({
    days: daysArr
  })
}
</script>

<style></style>