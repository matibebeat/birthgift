<script >
import { ref } from "vue";

import ArticleComponent from "@/components/ArticleComponent.vue";
import ButtonA from "@/components/buttonA.vue";

export default {
  name: "HomeView",
  components: {ButtonA, ArticleComponent},
  props: {
    articles: Array,
  },

  methods: {
    getCategorie(name) {
      return this.articles.filter((article) => article.categorie === name);
    },
    getCategoriesNames() {
      // get all categories names from articles if there is at least one article visible
      let visibleArticles = this.articles.filter((article) => article.visible);
      let l = visibleArticles.map((article) => article.categorie);


      return [...new Set(l)];
    },
  },
};
</script>

<template>
  <main>
    <article>
      <img src="../assets/IMG-20240613-WA0003.jpg" alt="logo" />
      <h1>Liste de naissance d'<span style="font-size: 45px; ">Adèle</span></h1>
      <p>Nous sommes heureux de vous annoncer l'apparition d'un nouvel arrivant dans notre famille.<br>
        Voici la liste de naissance d'Adèle, vous pouvez participer en choisissant un article et en cliquant sur le lien de la cagnotte.</p>
      <ButtonA href="https://www.leetchi.com/fr/c/bapteme-adele-5792572?utm_source=native&utm_medium=social_sharing">lien vers la cagnotte</ButtonA>
    </article>
    <details open v-for="categorie in getCategoriesNames()" :key="categorie">
      <summary>{{categorie}}</summary>
    <ul class="articles">

        <ArticleComponent v-for="article in getCategorie(categorie)" :key="article.id"  :article="article" :class="article.acheté"/>
    </ul>
    </details>







<!--

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
-->
  </main>
</template>
<style scoped>

  .articles{
    list-style-type: none;
    padding: 0;
    display: grid;
    /* put two columns */
    grid-template-columns: repeat(3, 1fr);

  }

  img {
    height: 200px;

  }

  a {
    display: block;
    margin-top: 1rem;
  }

  article {
    padding: 1rem;

    p{
      font-size: 1.2rem;

    }

    h1{

      padding-top: 1.5rem;
      margin-top: 0;
      font-size: 2rem;
    }
    img {
      border-bottom: 2px solid rgba(100, 139, 243, 0.5);
      width: 100%;
      height: 260px;
      object-fit: cover;
      padding-bottom:0;

    }
  }

  summary {
    font-size: 1.5rem;
    margin: 1rem;
    padding: 1rem;
    background-color: #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 600px) {
    .articles{
      grid-template-columns: repeat(1, 1fr);
      align-items: center ;
    }
  }

</style>