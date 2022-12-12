<template>
  <div class="Day">
    <p class="name">{{day}}</p>
  </div>
</template>

<script>
export default {
  name: 'WeekDay',
  props: {
    day: String
  }
}
</script>

<style lang="scss" scoped>
.Day {
  border: 1px solid black;
}
</style>