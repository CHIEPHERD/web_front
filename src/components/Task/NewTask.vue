<template>
  <div class="row">
    <div class="card col s10 offset-s1">

      <span class="card-title">Nouvelle tâche</span>
      <div class="input-field col s12">
        <input id="title" type="text" class="validate">
        <label for="title">Email</label>
      </div>
      <div class="input-field col s12">
        <textarea id="description" class="materialize-textarea"></textarea>
        <label for="description">Description</label>
      </div>

      <div class="row">
        <div class="col s12">
          <h5>Type de tâche</h5>
          <select class="dropdown-button btn">
            <option>Feature</option>
            <option>Fix</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <h5>Affectation</h5>
          <select class="dropdown-button btn">
            <option>Someone</option>
            <option>Someone else</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="offset-s6 s3 col">
          <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>Annuler</a>
        </div>
        <div class="col s3">
          <a class="waves-effect waves-light btn"><i class="material-icons left">done</i>Valider</a>
        </div>
      </div>
     </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'NewTask',
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
