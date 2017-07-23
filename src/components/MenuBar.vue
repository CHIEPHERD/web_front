<template>
  <div>
    <nav>
      <div class="nav-wrapper">
      <ul id="nav-mobile-left" class="left hide-on-med-and-down">
      <li v-if="this.$session.exists()"><a href="#" data-activates="slide-out" id="leftSideBarTrigger"><i class="material-icons">view_headline</i></a></li>
      </ul>
        <a href="#" class="brand-logo center">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Home</a></li>
          <li v-if="!this.$session.exists()"> <router-link :to="{ name: 'Auth' }">Connexion</router-link></li>
          <li v-if="this.$session.exists()"> <a  href="#" @click="preference">Préférences</a></li>
          <li v-if="this.$session.exists()"> <a href="#" @click="disconnect">Deconnexion</a></li>
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
      this.$session.destroy()
      this.$store.dispatch('deconnection', this.$session.get('jwt')).then((response) => {
        this.$router.push({name: 'Home'})
      })
    },
    preference () {
      this.$store.commit('detail_admin', this.$store.state.auth.admin)
      this.$router.push({path: 'preference'})
    }
  },
  mounted () {
    $('#leftSideBarTrigger').sideNav()
    $('.modal').modal()
  }
}
</script>
<style lang="scss">
@import '../assets/kanban.scss';
$on-hold: #FB7D44;
$in-progress: #2A92BF;
$needs-review: #F4CE46;
$approved: #00B961;

* {
  box-sizing: border-box;
}

/*
body {
  background: #33363D;
  color: white;
  font-family: 'Lato';
  font-weight: 300;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}*/

.drag-column {
    &-on-hold {
        .drag-column-header,
        .is-moved,
        .drag-options {
            background: $on-hold;
        }
    }

    &-in-progress {
        .drag-column-header,
        .is-moved,
        .drag-options {
            background: $in-progress;
        }
    }

    &-needs-review {
        .drag-column-header,
        .is-moved,
        .drag-options{
            background: $needs-review;
        }
    }

    &-approved {
        .drag-column-header,
        .is-moved,
        .drag-options {
            background: $approved;
        }
    }
}

.section {
  padding: 20px;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: 300;
  }

  h4 {
    font-weight: 400;
    a {
      font-weight: 600;
    }
  }
}
</style>

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
