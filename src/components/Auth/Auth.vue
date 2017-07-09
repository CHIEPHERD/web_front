<template>
  <div class="row">
    <router-view class="col offset-s1 s4" name="Inscription"></router-view>
    <router-view class="col offset-s2 s4" name="Connexion"></router-view>
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
