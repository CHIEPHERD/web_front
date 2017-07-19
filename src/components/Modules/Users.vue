<template>
  <div>
    <div class="row">
      <div class="card col s10 offset-s1">
        <h3> Utilisateurs </h3>
        <router-view class="row" name="search">recherche</router-view>
        <router-view class="row">Users</router-view>
        <router-view class="row" name="add">bouton d'ajout</router-view>
      </div>
    </div>
    <!-- Behind Add Button - Modal Structure -->
    <div id="addUserModal" class="modal">
      <div class="modal-content">
        <form>
          <router-view name="new"></router-view>
        </form>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
