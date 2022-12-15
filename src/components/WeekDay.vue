<template>
  <div class="Day today" v-if="isToday" @click="togglePopUp">
    <p class="name">{{day}}</p>

    <p v-if="exercises.length">Exercise</p>
    <p v-else>Rest</p>
  </div>

  <div class="Day" v-else @click="togglePopUp">
    <p class="name">{{day}}</p>

    <p v-if="exercises.length">Exercise</p>
    <p v-else>Rest</p>
  </div>

  <div class="pop-up" ref="popUp">
    <p class="name">{{day}}</p>
    
    <div v-if="exercises.length || newExercises.length">
      <div class="exercise" v-for="e in exercises" :key="e.exercise_name">
        <p>{{e.exercise_name.toUpperCase()}} Sets: {{e.sets}} Reps: {{e.reps}}</p>
      </div>
      
      <div class="exercise" v-for="ne in newExercises" :key="ne.name">
        <p>{{ne.name.toUpperCase()}} Sets: {{ne.sets}} Reps: {{ne.reps}}</p>
      </div>
    </div>
    
    <p v-else>Rest</p>

    <div class="inputs">
      <button @click="toggleFindMode" v-if="!findMode">Add Exercises</button>
      <button v-if="findMode" @click="saveExercise">Save</button>
      <button v-else @click="saveExercise">Ok</button>
    </div>

    <FindExercises v-if="findMode" :addExercise="addExercise" :findMode="true" />
  </div>
</template>

<script>
import { getTodaysDate } from '@/utils';
import { PostExercise } from '@/services';
import FindExercises from '../components/FindExercises.vue';

const date = getTodaysDate()

export default {
  name: 'WeekDay',
  props: ['day', 'isToday', 'week', 'exercises', 'routine', 'user', 'updateUser'],
  components: {
    FindExercises
  },
  data: () => ({
    todaysDay: date.dayName,
    findMode: false,
    newExercises: []
  }), 
  methods: {   
    async saveExercise(){
      document.body.classList.remove('show')
      this.$refs.popUp.classList.remove('show')
      this.findMode = false

      if (this.newExercises.length) {
        await PostExercise(this.user, this.user.routine, this.day, this.newExercises)
        this.updateUser()
      }
    },
    togglePopUp() {
      document.body.classList.add('show')
      this.$refs.popUp.classList.add('show')
    },
    toggleFindMode() {
      this.findMode = true
    },
    addExercise(e) {
      this.newExercises.push(e)
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
    background-color: #76f9c2;
    color: black;
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
  width: 100%;
  height: 100vh;
  
  &.show {
    display: flex;
  }

  button {
    margin: 1rem 0.5rem;
  }

  .exercise {
    display: flex;
    font-size: 0.75em;
    
    p {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}
</style>