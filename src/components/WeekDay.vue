<template>
  <div class="Day today" v-if="isToday">
    <p class="name">{{day}}</p>
  </div>

  <div class="Day" v-else>
    <p class="name">{{day}}</p>
  </div>
</template>

<script>
import { getTodaysDate } from '@/utils';

const date = getTodaysDate()

export default {
  name: 'WeekDay',
  props: {
    day: String,
    isToday: Boolean
  },
  data: () => ({
    todaysDay: date.dayName
  })
}
</script>

<style lang="scss" scoped>
.Day {
  border: 1px solid black;

  &.today {
    background-color: grey;
  }
}
</style>