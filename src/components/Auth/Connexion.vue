<template>
  <div class="card">

    <span class="card-title">Connexion</span>
    <div class="input-field col s12">
      <input :value="email" @input='set_email' id="email" type="text" class="validate">
      <label for="email">Email</label>
    </div>
    <div class="row">
     <div class="input-field col s12">
       <input :value="password" @input="set_password" id="password" type="password" class="validate">
       <label for="password">Password</label>
     </div>
    </div>
    <div class="row">
      <button @click="connection" class="btn waves-effect waves-light" type="submit" name="action">Valider
        <i class="material-icons right">send</i>
      </button>
    </div>
    <label/> {{errorMessage}} </label>
  </div>
</template>

<script>
export default {
  name: 'Connexion',
  data () {
    return {
      email: this.$store.state.auth.connect_user.email,
      password: this.$store.state.auth.connect_user.password,
      errorMessage: ''
    }
  },
  methods: {
    set_email (e) {
      this.$store.commit('set_connect_email', e.target.value)
    },
    set_password (e) {
      this.$store.commit('set_connect_password', e.target.value)
    },
    connection (e) {
      this.$store.dispatch('connection').then((response) => {
        this.$router.push({name: 'Home'})
      }).catch((err) => {
        this.$data.errorMessage = err
      })
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
