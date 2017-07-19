<template>
  <div class="row">
    <div class="card col s10 offset-s1">
      <span class="card-title">Êtes vous sur de vouloir supprimer cette tâche</span>

      <div class="row">
        <div class="s4 col">
          <a class="waves-effect waves-light btn"><i class="material-icons left">skip_previous</i>Annuler</a>
        </div>
        <div class="s4 offset-s4 col">
          <a class="waves-effect waves-light btn"><i class="material-icons left">delete</i>Supprimer la tâche</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteTask',
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
  color: white;
}
</style>
