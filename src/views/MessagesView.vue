<script>
export default {
  name: 'MessagesView',
  data() {
    return {
      messages: [
      ],
    };
  },
  methods: {
    getMessages() {
      fetch("https://birth-backend.onrender.com/api/message")
        .then((res) => res.json())
        .then((data) => {
          this.messages = data;
        });
    },
  },
  mounted() {
    this.getMessages();
  },
};

</script>

<template>
  <article>
      <h1>Messages </h1>
    <p><span style="color: red">message du developpeur en rouge</span> <span style="color: blue">informations en bleu</span></p>
      <ul>
        <li v-for="message in messages" :key="message._id" :class="message.type">
          <p>{{ message.message }}</p>
        </li>
      </ul>
  </article>

</template>

<style scoped>

article {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}

.Dev, .dev{
  background-color: red;
}
</style>