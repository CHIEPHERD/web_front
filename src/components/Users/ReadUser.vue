<template>
  <div class="row">
    <div class="card col s10 offset-s1">

      <div class="row">
        <div class="col s4">
          <span class="card-title">Robert William</span>
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
        <input id="last_name" type="text" class="validate">
        <label for="last_name">Robert</label>
      </div>
      <div class="input-field col s12">
        <input id="first_name" type="text" class="validate">
        <label for="first_name">William</label>
      </div>
      <div class="input-field col s12">
        <input id="nick_name" type="text" class="validate">
        <label for="nick_name">Leeroy Jenkins</label>
      </div>
      <div class="input-field col s12">
        <input id="email" type="email" class="validate">
        <label for="email">Email</label>
      </div>

      <div class="input-field col s12">
        <input id="password" type="password" class="validate">
        <label for="password">Mot de passe</label>
      </div>
      <div class="input-field col s12">
        <input id="confirm_password" type="password" class="validate">
        <label for="confirm_password">Confirmation du mot de passe</label>
      </div>

      <div class="col s12">
        Administrateur Chiepherd
        <div class="switch">
          <label>
           Off
           <input type="checkbox">
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
          <a class="waves-effect waves-light btn"><i class="material-icons left">done</i>Valider</a>
        </div>
      </div>
     </div>

    </div>
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

a {
  color: white;
}
</style>
