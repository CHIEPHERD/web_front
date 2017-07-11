<template>
  <div>
    <ul id="slide-out" class="side-nav">
      <li> <router-link class="collection-item" :to="{ name: 'Home' }">Accueil</router-link></li>
      <li> <router-link class="collection-item" :to="{ name: 'Project' }">Projets</router-link></li>
      <li> <router-link class="collection-item" :to="{ name: 'Kanban'}">Kanban</router-link></li>
      <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#!">Second Link</a></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
    <router-view class="col s12"></router-view>
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
