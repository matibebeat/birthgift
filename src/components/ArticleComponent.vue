<script>
import { ref } from 'vue'

import ButtonA from "@/components/buttonA.vue";
import ButtonB from "@/components/buttonB.vue";

export default {
  name: "ArticleComponent",
  components: { ButtonB, ButtonA },
  data() {
    return {
      show: false,
      prenom: "",
    }
  },
  props: {
    article: Object,
  },
  methods: {
    buy(id) {

      this.article.achete = true;
      fetch("https://birth-backend.onrender.com/api/article/take/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prenom: this.prenom,
        }),
      }).then(this.show = false).catch(err => {
        console.log(err);
      });

    },
  },
  mounted() {
    console.log(this.article);
  }

};
</script>

<template>
  <li v-if="article.visible" :class="{ true: article.achete }">
    <img :src="article.photo" alt="image">
    <h1>{{ article.name }}</h1>
    <p>{{ article.description }}</p>
    <p>{{article.prix}}€</p>
    <ButtonA :haref="article.lien" v-if="!article.achete">Accèder à la cagnotte</ButtonA>
<!--    <ButtonB @click="this.show = true" v-if="!article.achete">Je souhaite l'offrire moi même</ButtonB>-->
    <h1 v-else class="erreur">Cet article a déjà été offert</h1>
  </li>
  <div class="confirm" v-if="this.show">
    <label for="nom">Qui êtes vous ?</label>
    <input type="text" v-model="prenom" placeholder="Votre nom">
    <ButtonA @click="this.buy(article._id)">Envoyer</ButtonA>
  </div>
</template>

<style scoped>
h1 {
  border: none;
}

li {
  border: none;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}

p {
  padding-top: 0rem;
}

a {
  text-align: center;
  align-items: center;
}

.true {
  background-color: #C3DBFD;
}

.erreur {
  color: grey;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 3rem;

}

.confirm {
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #C3DBFD;
  padding: 1rem;
  border-radius: 12px;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.confirm input {
  width: 80%;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
  font-size: 1.5rem;
}
</style>