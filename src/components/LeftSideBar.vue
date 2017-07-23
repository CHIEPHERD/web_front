<template>
  <div>
    <ul id="slide-out" class="side-nav">
      <div class="background">
        <img src="../assets/logo.png">
      </div>
      <li><router-link class="collection-item" :to="{ name: 'Home' }">Accueil</router-link></li>
      <li><router-link class="collection-item" :to="{ name: 'Project' }">Projets</router-link></li>
      <li><router-link class="collection-item" :to="{ name: 'Users' }">Utilisateurs</router-link></li>
      <li><router-link class="collection-item" :to="{ name: 'Admin' }">Administrateurs</router-link></li>
      <li><router-link class="collection-item" :to="{ name: 'Kanban'}">Kanban</router-link></li>
    </ul>
    <router-view class="col s12"></router-view>
  </div>
</template>

<script>

export default {
  name: 'LeftSideBar',
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
