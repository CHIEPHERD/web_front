<template>
  <div id="app">
    <router-view name="MenuBar"> </router-view>
    <div class="row">
      <router-view class="col s3 m3 l3 xl3"></router-view>
      <router-view class="col s9 m9 l9 xl9" name="SLW"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
