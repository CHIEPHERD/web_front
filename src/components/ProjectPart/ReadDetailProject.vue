<template>
  <div>
    <div class="offset-s1 s10 col card">
      <div class="col s4">
        <h4> {{project.name}}</h4>
      </div>
      <div class="col s4 offset-s4">
        <label>Projet </label>
        <div class="switch">
          <label>
           Inactif
           <input type="checkbox" v-model='project.visibility'>
           <span class="lever"></span>
           Actif
          </label>
        </div>
      </div>
      <div class="col s10 offset-s1">
        <div class="row">
          <div class="input-field col s12">
            <textarea v-model="project.description" id="description" class="materialize-textarea"></textarea>
            <label for="description">Description</label>
          </div>
        </div>
      </div>
      <div class="col s6">{{users.length}} utilisateurs</div>
      <div class="col s6">{{tasks.length}} tâches</div>

      <div class="col s10 offset-s1">
        <div class="row">
          <div class="switch">
            Kanban
            <label>
             Inactif
             <input type="checkbox" v-model='showKanban'>
             <span class="lever"></span>
             Actif
            </label>
          </div>
        </div>
        <div class="row">
          <kanban-board v-if="showKanban" :stages="stages" :blocks="tasks">
            <div v-for="task in tasks" :slot="task.id">
            <div>
             <strong>id:</strong> {{ task.id }}
            </div>
            <div>
             {{ task.title }}
            </div>

            <router-link :to="{ name: 'ReadTask', params: {} }">Détails</router-link>
          </div>
          </kanban-board>

          <label>Liste des tâches</label>
          <li>
            <ul v-for="task in tasks">{{task.type}} {{task.name}}</ul>
          </li>

          <label>Liste des utilisateurs</label>
          <li>
            <ul v-for="user in users">{{user.lastname}} {{user.firstname}}</ul>
          </li>
          <router-link class="waves-effect waves-light btn" :to="{ name: 'NewTask' }"><i class="material-icons left">library_add</i>Ajouter une tâche</router-link>
        </div>
      </div>

      <div class="row">
        <div class="s4 col">
          <button @click="precedent" class="waves-effect waves-light btn"><i class="material-icons left">skip_previous</i>Annuler</button>
        </div>
        <div class="s4 col">
          <button @click="show_delete" class="waves-effect waves-light btn"><i class="material-icons left">delete</i>Supprimer</button>
        </div>
        <div class="s4 col">
          <button @click="update_project" class="waves-effect waves-light btn"><i class="material-icons left">done</i>Valider</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ReadFullProject',
  data () {
    return {
      tasks: [],
      users: [],
      stages: this.$store.state.kanban.stages,
      showKanban: true
    }
  },
  methods: {
    precedent () {
      this.$router.go(-1)
    },
    show_delete () {
    },
    update_project () {
    }
  },
  computed: {
    project () {
      return this.$store.state.project.selectedProject
    }
  },
  beforeCreate () {
    // get all Users of Project
    this.$store.dispatch('get_all_users_of_project').then((response) => {
      this.$data.users = response
    })

    // get all tasks of Project
    this.$store.dispatch('get_all_tasks_of_project').then((response) => {
      this.$data.tasks = response
    })
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
