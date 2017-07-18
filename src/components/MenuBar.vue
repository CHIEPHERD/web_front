<template>
  <div>
    <ul id="profil-dropdown" class="dropdown-content">
      <li><a href="#!">Préférences</a></li>
      <li class="divider"></li>
      <li><a href="#" @click="disconnect">Déconnexion</a></li>
    </ul>
    <nav>
      <div class="nav-wrapper">
      <ul id="nav-mobile-left" class="left hide-on-med-and-down">
      <li><a href="#" data-activates="slide-out" id="leftSideBarTrigger"><i class="material-icons">view_headline</i></a></li>
      </ul>
        <a href="#" class="brand-logo center">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Home</a></li>
          <li> <router-link :to="{ name: 'Auth' }">Connexion</router-link></li>
          <li><a class="dropdown-button" href="#" data-activates="profil-dropdown">Nom prénom<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      </div>
    </nav>

    <router-view class="row"></router-view>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'MenuBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    disconnect (e) {
      this.$store.dispatch('deconnection')
    }
  },
  mounted () {
    $('#leftSideBarTrigger').sideNav()
    $('.modal').modal()
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

#profil-dropdown{
  margin-top: 65px;
}

</style>
