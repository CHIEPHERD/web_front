<template>
  <div class="row">
    <div class="card col s10 offset-s1">

      <span class="card-title">Nom de la tâche</span>
      <div class="input-field col s12">
        <input id="title" type="text" class="validate" v-model="title">
        <label for="title">Titre</label>
      </div>
      <div class="input-field col s12">
        <textarea id="description" class="materialize-textarea" v-model='task.title'></textarea>
        <label for="description">Description</label>
      </div>

      <div class="row">
        <div class="col s12">
          <h5>Type de tâche</h5>
          <select class="dropdown-button btn">
            <option v-model='task.type' selected>{{task.type}}</option>
            <option v-for="type in taskTypes">{{type}}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <h5>Affectation</h5>
          <select class="row dropdown-button btn">
            <option v-for="people in affectation">
              {{people.name}}
            </option>
          </select>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col s12">
          <h5>Tâche parent</h5>
          <select class="dropdown-button btn">
            <option v-for="task in parentTask">{{task.name}}</option>
          </select>
        </div>
      </div> -->

      <div class="row">
        <div class="col s12">
          <h5>Sous tâches</h5>
          <ul>
            <li v-for="task in task.children">{{task.name}}</li>
          </ul>
          <h6> Ajouter une tâche existante </h6>
          <select class="dropdown-button btn">
            <option v-for="task in allTask">{{task.name}}</option>
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
import _ from 'lodash'

export default {
  name: 'ReadTask',
  data () {
    return {
      allTask: [],
      task: this.$store.state.tasks.selectedTask
    }
  },
  mouted (state) {
    this.$data.allTask = _.filter(this.$store.state.tasks.tasks,
      {projectUuid: this.$store.state.tasks.selectedTask.projectUuid})
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
