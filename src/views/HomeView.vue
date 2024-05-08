<script >
export default {
  name: "HomeView",
  props: {
    articles: Array,
  },

};
</script>

<template>
  <main>
    <h1>Home</h1>
    <ul class="categories">
      <li class="inactive">Meubles</li>
      <li class="active">Déco</li>
      <li class="inactive">Vêtements</li>
    </ul>
    <ul class="articles">
      <li v-for="article in articles" :key="article.id" @click="this.$router.push('/article/'+article._id)">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
          <p>{{ article.price }} €</p>
          <img :src="article.image" alt="article.title" />
          <a :href="article.link">Cagnotte</a>
          <p>{{ article.categories }}</p>

      </li>

    </ul>
  </main>
</template>
<style scoped>
  .articles{
    list-style-type: none;
    padding: 0;
    display: grid;
    /* put two columns */
    grid-template-columns: repeat(2, 1fr);

  }

  .articles li {
    border: 1px solid #000;
    margin: 1rem;
    padding: 1rem;
  }
  .articles li:hover {
    background-color: #bbbbbb;
    transform: scale(1.05);
    transition: all 0.8s;

  }

  img {
    height: 200px;

  }

  a {
    display: block;
    margin-top: 1rem;
  }

  .categories{
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
  }

  .categories li {
    padding: 1rem;
    cursor: pointer;
    border-radius: 10px;
  }

  .categories li.active {
    background-color: blue;
    color: #fff;
  }

</style>