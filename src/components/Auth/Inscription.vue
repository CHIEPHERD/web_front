<template>
  <div class="card">
    <span class="card-title">inscription</span>
    <div class="input-field col s12">
      <input id="emailInscription" type="text" class="validate">
      <label for="email">Email</label>
    </div>
    <div class="row">
     <div class="input-field col s12">
       <input id="passwordInscription" type="password" class="validate">
       <label for="password">Password</label>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
