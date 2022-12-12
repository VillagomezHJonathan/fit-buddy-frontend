<template>
  <div class="Home">
    <TodaysDate />
    <WeekFull />    
  </div>
</template>

<script>
import WeekFull from '../WeekFull.vue';
import TodaysDate from '../TodaysDate.vue';

export default {
  name: 'HomePage',
  components: {
    WeekFull,
    TodaysDate
  }
}
</script>

<style lang="scss" scoped>

</style>