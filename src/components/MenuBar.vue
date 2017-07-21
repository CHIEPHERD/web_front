<template>
  <div>
    <nav>
      <div class="nav-wrapper">
      <ul id="nav-mobile-left" class="left hide-on-med-and-down">
      <li v-if="is_connected"><a href="#" data-activates="slide-out" id="leftSideBarTrigger"><i class="material-icons">view_headline</i></a></li>
      </ul>
        <a href="#" class="brand-logo center">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Home</a></li>
          <li v-if="!is_connected"> <router-link :to="{ name: 'Auth' }">Connexion</router-link></li>
          <li v-if="is_connected"> <a  href="#" @click="disconnect">Préférences</a></li>
          <li v-if="is_connected"> <a href="#" @click="disconnect">Deconnexion</a></li>
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
  computed: {
    is_connected () {
      return this.$store.state.auth.is_connected
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
