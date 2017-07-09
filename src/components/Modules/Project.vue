<template>
  <div class="row">
    <div class="card col s10 offset-s1">
      <h3> Projets </h3>
      <router-view class="row" name="search">recherche</router-view>
      <router-view class="row">Projets</router-view>
      <router-view class="row" name="add">bouton d'ajout</router-view>
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
