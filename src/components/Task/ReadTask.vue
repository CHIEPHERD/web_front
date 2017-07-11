<template>
  <div class="row">
    <div class="card col s10 offset-s1">

      <span class="card-title">Nom de la tâche</span>
      <div class="input-field col s12">
        <input id="title" type="text" class="validate">
        <label for="title">Titre</label>
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
          <select class="row dropdown-button btn">
            <option>Someone</option>
            <option>Someone else</option>
          </select>
          <select class="row dropdown-button btn">
            <option>Someone</option>
            <option>Someone else</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h5>Tâche parent</h5>
          <select class="dropdown-button btn">
            <option>Some Task</option>
            <option>Some other Task</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <h5>Sous tâches</h5>
          <ul>
            <li>A task</li>
            <li>another task</li>
          </ul>
          <select class="dropdown-button btn">
            <option>Ajouter une tâche existante</option>
            <option>Some other task</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="s12 col">
          <a class="waves-effect waves-light btn"><i class="material-icons left">queue</i>Nouvelle tâche</a>
        </div>
      </div>

      <div class="row">
        <div class="s4 col">
          <a class="waves-effect waves-light btn"><i class="material-icons left">delete</i>Supprimer la tâche</a>
        </div>
        <div class="s4 offset-s4 col">
          <a class="waves-effect waves-light btn"><i class="material-icons left">done</i>Valider</a>
        </div>
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
  color: white;
}
</style>
