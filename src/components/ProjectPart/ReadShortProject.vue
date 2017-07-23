<template>
  <div>
    <div class="row" v-for="project in projects">
      <div class="offset-s1 s10 col card">
        <h4> {{project.name}}</h4>
        <div class="col s10 offset-s1">
          <p> {{project.description}}</p>
        </div>
        <div class="row">
        <!--  <div class="offset-s6 s2 col">{{project.user.length() || 0}} utilisateurs</div>
          <div class="col s2">{{project.user.length() || 0}} tâches</div> -->
          <div class="col s2">
            <button @click="detail_project(project)" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">subject</i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ReadShortProject',
  computed: {
    projects () {
      return this.$store.state.project.filteredProjects
    }
  },
  methods: {
    detail_project (project) {
      console.log('detail_project')
      console.log(project)
      this.$store.commit('detail_project', project)
      this.$router.push({name: 'DetailProject'})

      /* this.$store.dispatch('detail_project_from_rmq', project).then(() => {
        this.$router.push({name: 'DetailProject'})
      }) */
    }
  },
  beforeCreate () {
    this.$store.dispatch('init_projects_from_rmq')
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
