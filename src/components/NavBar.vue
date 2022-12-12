<template>
  <nav>
    <p class="logo">LOGO</p>

    <div>
      <p>Link 1</p>
      <p>Link 2</p>
      <p>Link 3</p>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavBar'
}

</script>

<style>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: black;
}

nav div {
  display: flex;
}
</style>