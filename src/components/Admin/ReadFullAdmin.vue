<template>
  <div class="row">
    <div class="card col s10 offset-s1">

      <div class="row">
        <div class="col s4">
          <span class="card-title">{{admin.firstname}} {{admin.lastname}}</span>
        </div>
        <div class="col s4 offset-s4">
          <div class="switch">
            <label>
             Inactif
             <input type="checkbox" v-model='admin.isActive'>
             <span class="lever"></span>
             Actif
            </label>
          </div>
        </div>
      </div>
      <div class="input-field col s12">
        <input id="last_name" type="text" class="validate" v-model='admin.lastname'>
        <label for="last_name">Nom:</label>
      </div>
      <div class="input-field col s12">
        <input id="first_name" type="text" class="validate" v-model='admin.firstname'>
        <label for="first_name">Prénom:</label>
      </div>
      <div class="input-field col s12">
        <input id="nick_name" type="text" class="validate" v-model='admin.nickname'>
        <label for="nick_name">Pseudo</label>
      </div>
      <div class="input-field col s12">
        <input id="email" type="email" class="validate" v-model='admin.email'>
        <label for="email">Email</label>
      </div>

      <div class="input-field col s12">
        <input id="password" type="password" class="validate" v-model='admin.password'>
        <label for="password">Mot de passe</label>
      </div>
      <div class="input-field col s12">
        <input id="confirm_password" type="password" class="validate" v-model='admin.password_confirmation'>
        <label for="confirm_password">Confirmation du mot de passe</label>
      </div>

      <div class="col s12">
        Administrateur Chiepherd
        <div class="switch">
          <label>
           Off
           <input type="checkbox" v-model="admin.isAdmin" checked>
           <span class="lever"></span>
           On
          </label>
        </div>
      </div>

      <div class="row">
        <div class="offset-s6 s3 col">
          <router-link :to="{ name: 'Admin', params: {} }" class="waves-effect waves-light btn"><i class="material-icons left">skip_previous</i>Annuler</router-link>
        </div>
        <div class="col s3">
          <button class="waves-effect waves-light btn"><i class="material-icons left">done</i>Valider</button>
        </div>
      </div>
     </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadFullAdmin',
  data () {
    return {
      admin: this.$store.state.admins.selectedAdmin
    }
  },
  methods: {
    update_admin () {
      this.$store.dispatch('update_admin_from_rmq', this.$data.admin)
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
  color: white;
}
</style>
