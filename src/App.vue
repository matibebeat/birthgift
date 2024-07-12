<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ButtonMain from './components/ButtonMain.vue'
import TextArea from './components/TextArea.vue'
import ButtonRouter from './components/ButtonRouter.vue'
import ButtonA from "@/components/buttonA.vue";



</script>


<template>
  <header>
    <div class="headertitre">
      <img alt="Vue logo" class="logo" src="@/assets/baby-girl.svg" width="75" height="75" />
      <h1>Ma Liste de naissance</h1>
    </div>


    <nav>
      <button-router href="/">Liste</button-router>
      <button-router href="/about">Me contacter</button-router>
      <button-router href="/admin">Admin</button-router>

    </nav>
  </header>

  <section id="sidepanel">
    <div id="title" class="bubble">
      <h1>Notre Liste de naissance</h1>
      <h2>Date prévue de l'évenement:</h2>
      <h3>6/07/2024</h3>
<!--      <p>déja <span>24</span> participants</p>-->
    </div>

    <div class="bubble" id="second">
      <h1>Participer de facon libre</h1>
      <p>Vous êtes libres de choisir le montant que vous voulez partager, Voici un lien vers une cagnotte Leetchi.</p>

      <ButtonA href="https://www.leetchi.com/fr/c/bapteme-adele-5792572?utm_source=native&utm_medium=social_sharing">lien vers la cagnotte</ButtonA>
    </div>

    <div class="bubble" id="second">
      <h1>Envoyer un message à la famille</h1>

      <form action="" @submit.prevent="SensMessage()">
        <textarea v-model="sav.message" cols="40" rows="6" placeholder="Votre message"></textarea>
        <button-main  >Envoyer</button-main>
      </form>



    </div>


  </section>

  <RouterView class="main" :articles="articles" @newArticle="articles.push($event)"></RouterView>
</template>

<style scoped>

header {
  background-color: #DBECFE;
  line-height: 1;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  z-index: 1000;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.headertitre {
  display: flex;
  flex-direction: row;
  align-items: center;

}



.logo {
  display: block;
  margin: 0 1.5rem 0 0;
}

nav {
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  margin-right: 1rem;




}

a {
  margin: 0 1rem;
  text-decoration: none;
  color: #000;
  font-size: 1.4em;
}

a:hover {
  color: #f00;
}

h1 {
  font-size: 2rem;
  margin: 0;

}

.main {
  width: 75%;

}

#sidepanel {
  width: 25%;
  display: flex;
  position: fixed;
  height: 85vh;
  top: 12vh;
  right: 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  //padding: 1rem;

  .bubble {
    width: 85%;
    padding: 1rem 5%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 25px;

  }

  #second {
    margin-top: 1rem;


    text-area {
      width: 100%;
      height: 100px;
    }

    h1 {
      font-size: 1.5rem;
      margin: 0;

    }


    button {
      float: right;
    }

    p {
      font-size: 1.1rem;
    }

  }

  #title {

    color: #77AFFC;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #DBECFE;

    p {
      margin: 0;
      color: black;

      span {
        font-size: 1.5rem;
        font-weight: 800;
      }
    }

    h1 {
      font-size: 1.7rem;
      margin: 0;
      text-align: center;
      color: black;
    }

    h2 {
      font-size: 1rem;
      margin: 0.3rem 0 0 0;
      text-align: center;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 800;
      margin-top: 0.6rem;
      margin-bottom: 0;
      text-align: center;
    }

  }
}


/*media query for iphone*/
@media only screen and (max-width: 600px) {
  .main{
    margin-top: 250px;
  }
  header {
    position: absolute;
    top: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .headertitre {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    margin: 0;
  }

  nav {
    margin: 1rem 0;
  }

  #sidepanel {
    display: none;
  }

  .main {
    width: 100%;
  }
}

text-area {
  width: 100%;
  height: 100px;
}

</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      sav : {
        message: " ",
      },
      articles: [
      ],



    }
  },
  mounted() {
    // this.articles = this.placeholder;
    fetch('https://birth-backend.onrender.com/api/article').then(response => response.json()).then(data => {
      this.articles = data;
      console.log(data);
    }).catch(err => {
      console.log(err);
      this.articles = this.placeholder;
    });
  },
  methods: {
    SensMessage() {
      fetch("https://birth-backend.onrender.com/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: this.sav.message,
          type: "text",
        }),
      }).then((response) => {
        if (response.ok) {
          alert("Message envoyé avec succès")
        } else {
          alert("Une erreur est survenue, veuillez réessayer plus tard")
        }
      });
    },
  }
};
</script>

