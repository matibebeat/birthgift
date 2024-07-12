<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  props: {
    href: String
  }
}



</script>

<template>
<router-link :to="this.href" class="button-main">
    <slot></slot>
</router-link>
</template>

<style scoped>
.button-main {
  background-color: #77AFFC;
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  padding: 16px 32px;
}

.button-main:hover {
  background-color: #C3DBFD;
  color: black;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

</style>