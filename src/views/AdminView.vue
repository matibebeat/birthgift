<template>
  <div class="about">
    <div class="tete">
      <h1>This is the admin page</h1>
      <div>
        <button-main @click="this.form_show = true">Ajoute un article</button-main>
        <button-main @click="this.sav_show = true">Envoyer un message au SAV</button-main>
        <button-router to="/messages">lire mes messages</button-router>
      </div>

    </div>

    <ul>
      <li v-for="article in articles" :key="article.id"
        :class="[article.visible ? 'visible' : 'hidden', article.achete ? 'achete' : 'libre']">
        <div class="wrapper2">
          <h1 v-if="article.achete">Article acheté par {{ article.prenom }}</h1>
          <h2>{{ article.name }}</h2>
          <p>{{ article.description }}</p>
          <p>{{ article.prix }} €</p>
          <div class="lien-container">
            <p class="lien">{{ article.lien }}</p>
          </div>

          <h2>Catégorie: </h2>
          <p>{{ article.categorie }}</p>
          <button-main @click="this.change(article._id); article.visible = true;" v-if="!article.visible">Rendre
            visible</button-main>
          <button-main @click="article.visible = false; this.change(article._id)" v-else>Cacher</button-main>
        </div>
        <img :src="article.photo" alt="article.title" />

      </li>
    </ul>
    <form action="" @submit.prevent="this.createArticle()" v-if="this.form_show">
      <fieldset>
        <div>
          <label for="title">Title</label>
          <input placeholder="Nom de l'article" type="text" id="title" v-model="this.title" />
        </div>
        <div>
          <label for="categorie">Catégorie</label>
          <select name="categorie" id="categorie" v-model="this.categorie">
            <option value="meuble">vêtements</option>
            <option value="deco">décorations</option>
            <option value="vetement">meubles</option>
            <option value="jouet">jouets</option>
            <option value="se déplacer">se déplacer</option>
            <option value="autre">autres</option>
          </select>
        </div>
        <div>
          <label for="price">Price</label>
          <input type="number" id="price" v-model="this.price" />
        </div>

      </fieldset>

      <label for="description">Description</label>
      <textarea name="description" id="description" cols="30" rows="3" v-model="this.description"
        placeholder="Description de l'article"></textarea>

      <label for="image">Image</label>
      <input type="text" id="image" v-model="this.image" placeholder="Collez le lien de la photo" />

      <label for="cagnotte">Lien vers la cagnotte</label>
      <input type="text" id="cagnotte" v-model="this.link" placeholder="Collez le lien de la cagnotte" />

      <div class="wrapper">
        <button-main style="background-color: red" @click="reset()">Reset</button-main>

        <button-main style="background-color: lightgreen">Valider</button-main>
        <button-main @click="this.form_show = false">Fermer</button-main>

      </div>


    </form>
<!--    style="display: none"-->
    <form action="" @submit.prevent="saveSAV()"  v-if="this.sav_show">
      <fieldset>
        <div>
          <label for="selection">Motif du message</label>
          <select id="selection" v-model="this.sav.motif">
            <option value="problem">Problème</option>
            <option value="modifier">j'ai fait une erreur sur un article</option>
            <option value="information">Information</option>
            <option value="supprimer">supprimer un article</option>
            <option value="autre">autre</option>
          </select>
        </div>
        <div>
          <label for="object">Objet du message</label>
          <input type="text" id="object"  v-model="this.sav.object" />
        </div>
        <div>
          <label for="urgent">Urgent</label>
          <input type="checkbox" name="urgent" id="" v-model="this.sav.urgent">
        </div>


      </fieldset>
      <label for="message">Message</label>
      <textarea name="message" id="message" cols="30" rows="10" v-model="this.sav.message"></textarea >
      <button-main >Envoyer</button-main>

    </form>
  </div>
</template>

<style scoped>
.lien {

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lien-container {

  width: 300px;
}

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;

}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  overflow-y: scroll;

}

li {
  width: auto;
}

form {
  width: 40%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

}

input,
select {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #9d9d9d;
  font-size: 1.2rem;
  border-radius: 0.25rem;
}

textarea {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #9d9d9d;
  font-size: 1.2rem;
  border-radius: 0.25rem;
}

legend {
  font-size: 1.5rem;
  margin: 1rem;
  padding: 1rem;
  background-color: #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

li {
  border: 1px solid #000;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tete {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.hidden {
  background-color: #afafaf;
  border: none;
}

fieldset {
  border: none;
  border-radius: 1rem;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

fieldset div {
  display: flex;
  flex-direction: column;
  width: auto;
}

fieldset div:last-child {
  width: 20%;
}

img {
  width: 200px;
  height: 200px;
  object-fit: fill;
  padding-bottom: 0;

}

.achete {
  background-color: #C3DBFD;
  border: none;
  opacity: 0.5;
}

input[type="checkbox"] {
  width: 40px;
  height: 40px;
  accent-color: red;
}
</style>
<script>
import ButtonMain from "@/components/ButtonMain.vue";
import ButtonRouter from "@/components/ButtonRouter.vue";

export default {
  name: "AdminView",
  components: {ButtonRouter, ButtonMain },
  props: {
    articles: Array,
  },
  data() {
    return {
      sav_show: false,
      form_show: false,
      title: "",
      description: "",
      price: "",
      image: "",
      link: "https://www.leetchi.com/fr/c/bapteme-adele-5792572?utm_source=native&utm_medium=social_sharing",
      categorie: "",
      sav: {
        motif: "",
        object: "",
        urgent: false,
        message: "",
      },
    }
  },
  methods: {
    createArticle() {
      fetch("https://birth-backend.onrender.com/api/article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.title,
          description: this.description,
          prix: this.price,
          photo: this.image,
          lien: this.link,
          categorie: this.categorie,
          visible: true,
        }),
      }).then(response => response.json()).then(data => {
        alert("L'article a été ajouté avec succès");
        this.reset();
        this.form_show = false;
        this.$emit("newArticle", {
          name: this.title,
          description: this.description,
          prix: this.price,
          image: this.image,
          lien: this.link,
          categorie: this.categorie,
          visible: true,
        });
      }).catch(err => {
        alert("Un probleme a survenu lors de l'ajout de l'article");
      });
    },
    reset() {
      this.title = "";
      this.description = "";
      this.price = "";
      this.image = "";
      this.link = "https://www.leetchi.com/fr/c/bapteme-adele-5792572?utm_source=native&utm_medium=social_sharing";
      this.categorie = "";
    },
    saveSAV(){
      const webhook = "https://discord.com/api/webhooks/1258380390012420168/bukCK2JnddU-BSQTFnlgl2u-sa7wqObbAEb57SChmJ30Znmd9c3bk3Zkxp7eH0lWjvxJ";
      const content = `${this.sav.urgent ? "@everyone" : ""} \n **Motif**: ${this.sav.motif} \n **Objet**: ${this.sav.object} \n **Message**: ${this.sav.message}`
      const messageContent = {
        content: content,
      };
      fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageContent),
      }).then(response => {
        if (response.ok) {
          this.sav_show = false;
          console.log("Message sent successfully!");
        } else {
          console.error("Failed to send message. Status code:", response.status);
        }
      })
          .catch(error => {
            console.error("Error sending message:", error);
          });




      console.log("saveSAV")  ;
    },
    change(id) {
      console.log(id);
      fetch("https://birth-backend.onrender.com/api/article/switch/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(response => response.json()).then(data => {
        alert("La visibilité de l'article a été modifiée avec succès");
      }).catch(err => {
        alert("Un probleme a survenu lors de la modification de la visibilité de l'article");
      });
    }
  },
  computed: {
    visibles() {
      return this.articles.filter((article) => article.visible === true);
    }
  }
};

</script>