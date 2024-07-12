<script setup>

</script>

<template>
  <button class="button-main">
    <slot></slot>
  </button>
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
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

</style>