<template>
  <div class="row">
    <div class="card col s10 offset-s1">

      <div class="row">
        <div class="col s4">
          <span class="card-title">{{user.firstname}} '{{user.nickname}}' {{user.firstname}}</span>
        </div>
        <div class="col s4 offset-s4">
          <div class="switch">
            <label>
             Inactif
             <input type="checkbox">
             <span class="lever"></span>
             Actif
            </label>
          </div>
        </div>
      </div>
      <div class="input-field col s12">
        <input id="last_name" type="text" class="validate" v-model="user.lastname">
        <label for="last_name">Nom</label>
      </div>
      <div class="input-field col s12">
        <input id="first_name" type="text" class="validate" v-model="user.firstname">
        <label for="first_name">Prénom</label>
      </div>
      <div class="input-field col s12">
        <input id="nick_name" type="text" class="validate" v-model="user.nickname">
        <label for="nick_name">Pseudo</label>
      </div>
      <div class="input-field col s12">
        <input id="email" type="email" class="validate" v-model="user.email">
        <label for="email">Email</label>
      </div>

      <div class="input-field col s12">
        <input id="password" type="password" class="validate" v-model="user.password">
        <label for="password">Mot de passe</label>
      </div>
      <div class="input-field col s12">
        <input id="confirm_password" type="password" class="validate" v-model="user.password_confirmation">
        <label for="confirm_password">Confirmation du mot de passe</label>
      </div>

      <div class="col s12">
        Administrateur Chiepherd
        <div class="switch">
          <label>
           Off
           <input type="checkbox" v-model="user.isAdmin">
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
          <h6>du projet</h6>
        </div>
        <div class="col s4">
          <select class="dropdown-button btn">
            <option v-for="project in projects">{{project}}</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="s4 col">
          <button @click="precedent" class="waves-effect waves-light btn"><i class="material-icons left">skip_previous</i>Annuler</button>
        </div>
        <div class="offset-s4 col s4">
          <button @click="update_user" class="waves-effect waves-light btn"><i class="material-icons left">done</i>Valider</button>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadUser',
  data () {
    return {
      projects: this.$store.state.project.projects,
      user: this.$store.state.users.selectedUser
    }
  },
  methods: {
    update_user () {
      this.$store.dispatch('update_user_from_rmq', this.$data.user)
    },
    precedent () {
      this.$router.go(-1)
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
