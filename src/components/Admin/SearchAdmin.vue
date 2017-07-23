<template>

  <div class="row">

    <div class="input-field col s4 offset-s4">
      <i class="material-icons prefix">search</i>
      <input :value="admin_last_name" @input="search_admin"
        type="text" id="autocomplete-input" class="autocomplete">
      <label for="autocomplete-input">Recherche d'administrateur</label>
    </div>
  </div>

</template>

<script>

export default {
  name: 'SearchAdmin',
  data () {
    return {
      admins: this.$store.state.admins.filteredAdmins,
      admin_selected: {},
      admin_last_name: ''
    }
  },
  methods: {
    search_admin (e) {
      this.$store.commit('search_admin', e.target.value)
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
