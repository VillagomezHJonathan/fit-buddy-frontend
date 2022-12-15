<template>
  <div class="Day today" v-if="isToday" @click="togglePopUp">
    <p class="name">{{day}}</p>

    <p v-if="exercises.length">Exercises</p>
    <p v-else>Rest</p>
  </div>

  <div class="Day" v-else @click="togglePopUp">
    <p class="name">{{day}}</p>

    <p v-if="exercises.length">Exercises</p>
    <p v-else>Rest</p>
  </div>

  <div class="pop-up" ref="popUp">
    <button @click="toggleFindMode">Add Exercises</button>
    <p class="name">{{day}}</p>
    <p v-if="exercises.length">Exercises</p>
    <p v-else>Rest</p>
    <button @click="saveExercise">Save</button>

    <FindExercises v-if="findMode" :findMode="true" />
  </div>
</template>

<script>
import { getTodaysDate } from '@/utils';
import FindExercises from '../components/FindExercises.vue';

const date = getTodaysDate()

export default {
  name: 'WeekDay',
  props: ['day', 'isToday', 'week', 'exercises'],
  components: {
    FindExercises
  },
  data: () => ({
    todaysDay: date.dayName,
    findMode: false
  }), 
  methods: {   
    saveExercise(){
      document.body.classList.remove('show')
      this.$refs.popUp.classList.remove('show')
    },
    togglePopUp() {
      document.body.classList.add('show')
      this.$refs.popUp.classList.add('show')
    },
    toggleFindMode() {
      this.findMode = true
    }
  }
}
</script>

<style lang="scss" scoped>
.Day {
  max-width: 500px;
  cursor: pointer;
  flex: 1;
  padding: 1rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  transition: all 0.2s ease, flex 0.3s ease;

  &.clicked {
    flex: 10;
  }

  &.today {
    background-color: grey;
  }
}

.pop-up {
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #000000, $alpha: 0.9);
  color: white;
  width: 100vh;
  height: 100vh;
  
  &.show {
    display: flex;
  }
}
</style>