<template>
  <div class="row">
    <div class="card col s10 offset-s1">

      <span class="card-title">Nouvelle tâche - Projet {{project.name}}</span>
      <div class="input-field col s12">
        <input id="title" type="text" class="validate" v-model="task.title">
        <label for="title">Titre</label>
      </div>
      <div class="input-field col s12">
        <textarea id="description" class="materialize-textarea" v-model="task.description"></textarea>
        <label for="description">Description</label>
      </div>

      <div class="row">
        <div class="col s12">
          <h5>Type de tâche</h5>
          <select class="dropdown-button btn">
            <option v-for="type in types">{{type}}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <h5>Affectation</h5>
          <select class="dropdown-button btn">
            <option v-for="people in affectation">{{people.name}}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="s4 col">
          <a @click="precedent" class="waves-effect waves-light btn"><i class="material-icons left">skip_previous</i>Annuler</a>
        </div>
        <div class="col s4 offset-s4">
          <a @click="add_task" class="waves-effect waves-light btn"><i class="material-icons left">done</i>Valider</a>
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
      types: this.$store.state.tasks.types,
      affectation: this.$store.state.users.users,
      project: this.$store.state.project.selectedProject,
      task: {
        uuid: '',
        projectUuid: '',
        ancestorUuid: '',
        title: 'Write some data',
        description: '...description...',
        type: 'Task',
        children: []
      }
    }
  },
  methods: {
    precedent () {
      this.$router.go('-1')
    },
    add_task () {
      this.$data.task.projectUuid = this.$data.project.uuid
      this.$store.dispatch('add_task_on_rmq', this.$data.task).then((response) => {
        console.log('use response of add task')
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  beforeCreate () {
    this.$store.dispatch('init_tasks_assignment')
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

select option {
  background: white;
  color: black
}
</style>
