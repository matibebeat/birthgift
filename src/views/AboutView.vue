<script>
import ButtonA from "@/components/buttonA.vue";
import textarea from "@/components/TextArea.vue";
import ButtonMain from "@/components/ButtonMain.vue";


export default {
  name: "AboutView",
  components: {ButtonMain, ButtonA, textarea},
  props: {
    articles: Array,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    send() {
      fetch("https://birth-backend.onrender.com/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: this.message,
          type: "text",
        }),
      }).then((res) => {
        if (res.ok) {
          alert("Message envoyé");
        } else {
          alert("Erreur lors de l'envoi du message");
        }
      });
    },

  },
};
</script>

<template>
  <article>
    <div class="bubble">
      <h1>Envoyer un message à la famille</h1>
      <form action="" @submit.prevent="send">
        <textarea col="50" v-model="this.message"></textarea>
        <button-main>Envoyer</button-main>
      </form>

    </div>
  </article>

</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

}

.bubble {

  align-items: center;
  background-color: #C3DBFD;
  padding: 1rem;
  margin: 1rem;
  border-radius: 40px;
  width: 80%;

  float: left;
}

textarea {
  align-items: center;
  width: 80%;
  height: 100px;
  border-radius: 12px;
  margin: 1rem 0;
  padding: 1rem;
}

button-main {
}

</style>
