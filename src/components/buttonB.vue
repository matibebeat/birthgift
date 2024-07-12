<script >
export default {
  props: {
    href: String
  }
}
</script>

<template>
  <a :href="href"><slot></slot></a>
</template>

<style scoped>
a {

  background-color: white;
  border: #77AFFC 3px solid;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px auto;
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