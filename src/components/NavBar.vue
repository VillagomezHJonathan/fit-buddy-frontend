<template>
  <nav>
    <p class="logo">FitBuddy</p>
  </nav>
</template>

<script>

export default {
  name: 'NavBar'
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