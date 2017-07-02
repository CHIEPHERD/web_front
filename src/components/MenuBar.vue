<template>
  <div>
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Other Stuff</a></li>
          <li><a href="#">Stuff</a></li>
          <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Profil<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      </div>
    </nav>
    <router-view class="row"></router-view>
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
