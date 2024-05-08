<template>
  <div class="about">
    <h1>This is the admin page</h1>
    <div class="wrapper">
      <ul>
        <li v-for="article in articles" :key="article.id">
          <div class="wrapper2">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
            <p>{{ article.price }}</p>

            <p>{{ article.link }}</p>
            <h2>Catégories : </h2>
            <p v-for="categorie in article.categories">{{ categorie }}</p>

          </div>
          <img :src="article.image" alt="article.title" />

        </li>
      </ul>
      <form action="" @submit.prevent="this.createArticle()">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="this.title"/>
        <label for="description">Description</label>
        <input type="text" id="description" v-model="this.description"/>
        <label for="price">Price</label>
        <input type="number" id="price" v-model="this.price"/>
        <label for="image">Image</label>
        <input type="text" id="image" v-model="this.image"/>

        <label for="cagnotte">Lien vers la cagnotte</label>
        <input type="text" id="cagnotte" v-model="this.link"/>
        <label for="categorie">catégorie</label>
        <select name="categorie" id="categorie" v-model="this.categorie">
          <option value="meuble">meuble</option>
          <option value="deco">deco</option>
          <option value="vetement">vetement</option>
        </select>
        <button type="submit" >Add article</button>
        <button type="reset" >Reset</button>

      </form>
    </div>
  </div>
</template>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;

}
ul{
  list-style-type: none;
  padding: 0;
  width: 50%;
  height: 50vh;
  overflow-y: scroll;

}
form{
  width: 50%;
  display: flex;
  flex-direction: column;

}
li{
  border: 1px solid #000;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}



</style>
<script >
export default {
  name: "AdminView",
  props: {
    articles: Array,
  },
  data(){
    return {
      title: "",
      description: "",
      price: "",
      image: "",
      link: "",
      categorie: "",
    }
  },
  methods: {
    createArticle(){
      fetch("https://birth-backend.onrender.com/api/article/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          price: this.price,
          image: this.image,
          link: this.link,
          categorie: [this.categorie],
        }),
      })
    }
  }
};

</script>