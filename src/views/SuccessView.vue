<template>
  <div class="about">
    <h1>thanks for your participation</h1>
    <router-link to="/">Back to the list</router-link>
  </div>
</template>
<style scoped>
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  h1 {
    font-size: 2rem;
  }
  a {
    margin-top: 1rem;
    text-decoration: none;
    color: #000;
    font-size: 1.4em;
  }
  a:hover {
    color: #f00;
  }
</style>