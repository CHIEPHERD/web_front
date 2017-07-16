<template>
  <div class="card">

    <span class="card-title">Inscription</span>

    <div class="input-field col s12">
      <input id="first_name" :value="first_name"
        @input='set_first_name' type="text" class="validate">
      <label for="first_name">First Name</label>
    </div>
    <div class="input-field col s12">
      <input id="last_name" :value="last_name"
       @input='set_last_name' type="text" class="validate">
      <label for="last_name">Last Name</label>
    </div>
    <div class="input-field col s12">
      <input id="nick_name" :value="nick_name"
       @input="set_nick_name" type="text" class="validate">
      <label for="nick_name">Pseudo</label>
    </div>
    <div class="input-field col s12">
      <input id="emailInscription" type="text"
      :value="email" @input="set_email" class="validate">
      <label for="emailInscription">Email</label>
    </div>
    <div class="row">
     <div class="input-field col s12">
       <input id="passwordInscription" type="password"
       :value="password" @input="set_password" class="validate">
       <label for="passwordInscription">Password</label>
     </div>
   </div>
   <div class="row">
    <button @click="inscription" class="btn waves-effect waves-light" type="submit" name="action">Valider
      <i class="material-icons right">send</i>
    </button>
  </div>

 </div>
</template>

<script>
export default {
  name: 'Inscription',
  data () {
    return {
      first_name: this.$store.state.auth.inscription_user.first_name,
      last_name: this.$store.state.auth.inscription_user.last_name,
      nick_name: this.$store.state.auth.inscription_user.nick_name,
      email: this.$store.state.auth.inscription_user.email,
      password: this.$store.state.auth.inscription_user.email
    }
  },
  methods: {
    inscription (event) {
      this.$store.commit('inscription')
    },
    set_first_name (e) {
      this.$store.commit('set_first_name', e.target.value)
    },
    set_last_name (e) {
      this.$store.commit('set_last_name', e.target.value)
    },
    set_nick_name (e) {
      this.$store.commit('set_nick_name', e.target.value)
    },
    set_email (e) {
      this.$store.commit('set_email', e.target.value)
    },
    set_password (e) {
      this.$store.commit('set_password', e.target.value)
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
