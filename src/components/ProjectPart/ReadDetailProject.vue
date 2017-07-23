<template>
  <div>
    <div class="offset-s1 s10 col card">
      <h4> {{project.name}}</h4>
      <div class="col s2">
        <button @click="" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">subject</i></button>
      </div>
      <div class="col s10 offset-s1">
        <p> {{project.description}}
        </p>
      </div>
      <div class="offset-s6 s2 col">{{project.numberOfUser}} utilisateurs</div>
      <div class="col s2">{{project.numberOfTask}} tâches</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ReadFullProject',
  computed: {
    project () {
      return this.$store.state.project.selectedProject
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
