<template>
  <div class="Home">
    <TodaysDate />
    <WeekFull :user="user" />  
    <h2 v-if="this.user">Hello {{this.user.name}}!</h2>
    <FindExercises />
  </div>
</template>

<script>
import WeekFull from '../WeekFull.vue';
import TodaysDate from '../TodaysDate.vue';

export default {
  name: 'HomePage',
  props: ['user'],
  components: {
    WeekFull,
    TodaysDate
  }
}
</script>

<style lang="scss" scoped>

</style>