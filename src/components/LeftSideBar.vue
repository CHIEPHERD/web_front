<template>
  <div>
    <div class="col s3 m3 l3 xl3">
      <ul class="collection">
        <router-link class="collection-item" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="collection-item" :to="{ name: 'Project' }">Project</router-link>
        <router-link class="collection-item" :to="{ name: 'GANTT' }">GANTT</router-link>
        <router-link class="collection-item" :to="{ name: 'Kanban'}">Kanban</router-link>
      </ul>
    </div>
    <router-view class="col s9 m9 l9 xl9"></router-view>
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
  color: #42b983;
}
</style>
