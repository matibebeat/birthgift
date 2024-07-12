<script >
export default {
  props: {
    haref: String
  }
}
</script>

<template>
  <a :href="haref" target="_blank"><slot></slot></a>
</template>

<style scoped>
a {
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
width: 75%;
}

a:hover {
  background-color: #C3DBFD;
  color: black;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

</style>