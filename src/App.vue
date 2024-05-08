<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <h1>Ma Liste de naissance</h1>

      <nav>
        <RouterLink to="/">Liste</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <router-link to="/admin">Admin</router-link>
      </nav>
  </header>

  <RouterView :articles="this.articles"/>
</template>

<style scoped>
header {
  line-height: 1;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;


}
a{
  margin: 0 1rem;
  text-decoration: none;
  color: #000;
  font-size: 1.4em;
}

a:hover{
  color: #f00;
}

h1{
  font-size: 2rem;
  margin: 0;
  width: 30%;
}


</style>
<script>

export default {
  name: 'App',
  data() {
    return {
      articles: [],
      placeholder: [
          {title: 'Article 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price: 100,
            image: 'https://picsum.photos/200/300',
            id: 1,
          link: 'https://google.com',
          categories: ['meuble']},
          {title: 'Article 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price: 200,
            image: 'https://picsum.photos/200/300',
            id: 2,
          link: 'https://google.com',
          categories: ['deco', 'vetement']},
          {title: 'Article 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price: 300,
            image: 'https://picsum.photos/200/300',
            id: 3,
          link: 'https://google.com',
          categories: ['meuble', 'deco']},
          {title: 'Article 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            price: 400,
            image: 'https://picsum.photos/200/300',
            id: 4,
          link: 'https://google.com',
          categories: ['meuble', 'vetement']},
          ]
    }
  },
  mounted() {
    fetch('https://birth-backend.onrender.com/api/article/').then(response => response.json()).then(data => {
      this.articles = data;
    }).catch(err => {
      console.log(err);
      this.articles = this.placeholder;
    });
  }
};
</script>
