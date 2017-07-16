<template>

  <div class="row">
    <div class="input-field col s4 offset-s8">
      <i class="material-icons prefix">search</i>
      <input :value="project" @input="search_project"
        type="text" id="autocomplete-input" class="autocomplete">
      <label for="autocomplete-input">Search project</label>
    </div>
  </div>

</template>

<script>

export default {
  name: 'SearchProject',
  data () {
    return {
      project: ''
    }
  },
  methods: {
    search_project (e) {
      this.$store.commit('search_project', e.target.value)
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
