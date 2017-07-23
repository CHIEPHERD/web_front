<template>
  <div class="row">
    <div class="card col s10 offset-s1">

      <span class="card-title">Nouvelle tâche</span>
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
            <option v-for="type in taskTypes">{{type}}</option>
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
        <div class="offset-s6 s3 col">
          <a class="waves-effect waves-light btn"><i class="material-icons left">delete</i>Annuler</a>
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
      taskTypes: this.$store.state.tasks.types,
      affectation: [
        {
          name: 'Someone'
        },
        {
          name: 'Someone else'
        }
      ]
    }
  },
  methods: {
    add_task () {
      this.$store.dispatch('add_task').then((response) => {
        console.log('use response of add task')
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  beforeCreate () {
    this.$store.dispatch('get_task_assgnment')
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
