<template>

  <div class="row">
    <div class="input-field col s4">
      <select v-model="project_selected">
        <option value="" disabled selected>Projet</option>
        <option v-for="project in projects">{{project.name}}</option>

      </select>
      <label>Materialize Select</label>
    </div>

    <div class="input-field col s4 offset-s4">
      <i class="material-icons prefix">search</i>
      <input :value="user_last_name" @input="search_user"
        type="text" id="autocomplete-input" class="autocomplete">
      <label for="autocomplete-input">Search project</label>
    </div>
  </div>

</template>

<script>

export default {
  name: 'SearchUser',
  data () {
    return {
      projects: this.$store.state.projects.projects,
      project_selected: {},
      user_last_name: ''
    }
  },
  methods: {
    search_user (e) {
      this.$store.commit('search_user', e.target.value, this.$data.project_selected)
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
