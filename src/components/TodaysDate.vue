<template>
  <div class="TodaysDate">
    <p class="month">{{todaysDate.month}}</p>
    <p class="day">{{todaysDate.dd}}</p>
    <p class="year">{{todaysDate.year}}</p>
  </div>
</template>

<script>
import { getTodaysDate } from '@/utils';

const todaysDate = getTodaysDate()

export default {
  name: 'TodaysDate',
  data: () => ({
    todaysDate
  })
}
</script>

<style lang="scss" scoped>
.TodaysDate {
  width: fit-content;
  display: flex;
  margin: 0 auto;

  .month {
    text-transform: capitalize;
  }

  p:nth-of-type(2) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}
</style>