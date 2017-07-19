<template>
  <div class="row">
    <div class="col s4 offset-s8">
      <a class="waves-effect waves-light btn" href="#addProjectModal"s><i class="material-icons left">library_add</i>
        Ajouter un projet</a>
    </div>

  <!-- Behind Add Button - Modal Structure -->
    <div id="addProjectModal" class="modal">
      <div class="modal-content">
        <h4>Nouveau Projet</h4>
        <form class="col s12">
          <div class="row">
            <div class="input-field col offset-s3 s6">
              <input v-model="project_name" id="project_name" type="text" class="validate">
              <label for="project_name">Nom du projet</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col offset-s3 s6">
              <input v-model="initials" id="initials" type="text" class="validate">
              <label for="initials">Nom du projet</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
              <label for="description">Description</label>
            </div>
          </div>
          <div class="row">
            <!-- More like Auto complete -->
            <!-- Dropdown Structure -->
            <select class="dropdown-button btn">
              <option>user1</option>
              <option>user2</option>
              <option>user3</option>
            </select>

            <div class="switch">
              <label>
               Off
               <input type="checkbox" v-model="is_admin">
               <span class="lever"></span>
               On
              </label>
            </div>

            <!-- Add the view of add user -->
          </div>
          <button @click="add_this_project" class="waves-effect waves-light btn"><i class="material-icons left">done</i>Valider</button>

        </form>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'AddProjectButton',
  data () {
    return {
      project_name: '',
      initials: '',
      description: '',
      is_admin: false
    }
  },
  methods: {
    add_this_project (event) {
      console.log(this.$data)
      this.$store.commit('add_project', this.$data)
    }
  },

  mounted () {
    $('.modal').modal()
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
