<template>
  <div class="row">
    <div class="card col s10 offset-s1">

      <span class="card-title">{{user.last_name}} '{{user.nick_name}}' {{user.first_name}}</span>
      <div class="input-field col s12">
        <input id="last_name" v-model="user.last_name" type="text" class="validate">
        <label for="last_name">Nom</label>
      </div>
      <div class="input-field col s12">
        <input id="first_name" v-model="user.first_name" type="text" class="validate">
        <label for="first_name">Prénom</label>
      </div>
      <div class="input-field col s12">
        <input id="nick_name" v-model="user.nick_name" type="text" class="validate">
        <label for="nick_name">Pseudo</label>
      </div>
      <div class="input-field col s12">
        <input id="email" type="email" v-model="user.email" class="validate">
        <label for="email">Email</label>
      </div>

      <div class="input-field col s12">
        <input id="password" type="password" v-model="user.password" class="validate">
        <label for="password">Mot de passe</label>
      </div>
      <div class="input-field col s12">
        <input id="confirm_password" v-model="user.confirm_password" type="password" class="validate">
        <label for="confirm_password">Confirmation du mot de passe</label>
      </div>

      <div class="col s12">
        Administrateur Chiepherd
        <div class="switch">
          <label>
           Off
           <input type="checkbox" v-model="user.is_admin">
           <span class="lever"></span>
           On
          </label>
        </div>
      </div>

      <!-- Si Administrateur chiepherd est On , on affiche pas ceci-->
      <div class="row">
        <div class="col s4">
          <select class="dropdown-button btn">
            <option>Développeur</option>
            <option>Chef de projet</option>
            <option>Autre</option>
          </select>
        </div>
        <div class="col s4">
          <label>du projet</label>
        </div>
        <div class="col s4">
          <select class="dropdown-button btn">
            <option>Gislak</option>
            <option>Flamby</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="offset-s6 s3 col">
          <a class="waves-effect waves-light btn"><i class="material-icons left">skip_previous</i>Annuler</a>
        </div>
        <div class="col s3">
          <button @click="creation_user" class="waves-effect waves-light btn"><i class="material-icons left">done</i>Valider</button>
        </div>
      </div>
     </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateUser',
  data () {
    return {
      user: {
        first_name: '',
        last_name: '',
        nick_name: '',
        email: '',
        password: '',
        confirm_password: '',
        role: '',
        is_admin: false
      }
    }
  },
  methods: {
    creation_user (event) {
      this.$store.commit('creation_user', this.$data)
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
