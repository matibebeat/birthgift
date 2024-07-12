<script>
export default{
  name:'LoginView',
data(){
    return{
      email: "",
      password:""
    }
},
  methods:{
    login() {
      if(this.email === "damien" && this.password === "damien"){
        localStorage.setItem("token", 'true');
        this.$router.push("/admin");
      }else{
        alert('pas bon chef')
      }
    }
  }
}
</script>

<template>
  <main>
    <form  @submit.prevent="login">
      <label for="email">Email</label>
      <input
          id="email"
          v-model="email"
          class="form__input"
          placeholder="Email"
          required
      />
      <label for="password">Password</label>
      <input
          type="password"
          id="password"
          v-model="password"
          class="form__input"
          placeholder="Password"
          required
      />
      <button type="submit" class="btn btn--primary btn--block">
        Connexion
      </button>
    </form>
  </main>

</template>

<style scoped>

  

</style>