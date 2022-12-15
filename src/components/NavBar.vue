<template>
  <nav>
    <p class="logo">FitBuddy</p>

    <div v-if="authenticated">
      <button class="link" @click="signOut">Sign Out</button>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  props: ['setUser', 'authenticated'],
  methods: {
    signOut() {
      this.setUser(null)
      this.$router.push('/login')
    }
  }
}

</script>

<style>
nav {
  margin-bottom: 2rem;
  border-radius: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: 2em;
}

nav div {
  display: flex;
}
</style>