<template>
  <div>
    <h3> Kanban </h3>

    <kanban-board :stages="stages" :blocks="tasks">
    <div v-for="block in tasks" :slot="block.id">
      <div>
       <strong>id:</strong> {{ block.id }}
      </div>
      <div>
       {{ block.title }}
      </div>

      <router-link :to="{ name: 'ReadTask', params: {} }">Détails</router-link>
    </div>
    </kanban-board>

    <router-link class="waves-effect waves-light btn" :to="{ name: 'NewTask' }"><i class="material-icons left">done</i>Ajouter une tâche</router-link>
  </div>
</template>

<script>
export default {
  name: 'Kanban',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      stages: this.$store.state.kanban.stages,
      tasks: this.$store.state.tasks.tasks
    }
  },
  computed: {
    blocks () {
      return this.$store.state.tasks
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Yup, both the scoped and the non scoped work -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
