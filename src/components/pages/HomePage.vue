<template>
  <div class="Home">
    <TodaysDate />
    <WeekFull />    
    <FindExercises />
  </div>
</template>

<script>
import WeekFull from '../WeekFull.vue';
import TodaysDate from '../TodaysDate.vue';
import FindExercises from '../FindExercises.vue';

export default {
  name: 'HomePage',
  components: {
    WeekFull,
    TodaysDate,
    FindExercises
  }
}
</script>

<style lang="scss" scoped>

</style>