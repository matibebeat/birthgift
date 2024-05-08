<script>
export default {
  name: 'ArticleView',
  props: {
    articles: Array,
  },
  data() {
    return {
      article: {
        title: "",
        description: "",
        price: "",
        image: "",
        link: "",
        categories: "",
      },
    };
  },
  beforeMount() {
    console.log(this.$route.params.id);
    console.log(this.articles);
    for (let i = 0; i < this.articles.length; i++) {
      if (this.articles[i]._id == this.$route.params.id) {
        this.article = this.articles[i];
      }
    }
  }


}
</script>
<template>
  <main>
    <div class="wrapper">
      <div class="article">
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <p>{{ article.price }} €</p>
        <img :src="article.image" alt="article.title" />
        <a target="_blank" :href="article.link">Cagnotte</a>
        <p>{{ article.categories }}</p>
      </div>
      <form action="">
        <label for="nom">Je suis</label>
        <input type="text" id="nom" name="nom"/>
        <a target="_blank" :href="article.link" @click="this.$router.push('/success')">
          Participer à la cagnotte
        </a>
      </form>
    </div>

  </main>
</template>
<style scoped>
  img {
    height: 200px;
  }
  .wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .article{
    width: 80%;
  }
  form{
    width: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #000;
    height: 50vh;
    padding: 1rem;
  }
</style>