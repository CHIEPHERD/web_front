<template>

  <div class="row">
    <div class="input-field col s4 offset-s8">
      <i class="material-icons prefix">search</i>
      <input type="text" id="autocomplete-input" class="autocomplete">
      <label for="autocomplete-input">Search project</label>
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
