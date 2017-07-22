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
    <div class="row">
      <div class="input-field col s12">
        <input id="email_inscription" type="text"
          v-bind:class="{ 'invalid': $v.email.$error }"
          v-model='email' :value="email" @input="set_email" class="validate">
        <label for="email_inscription">Email</label>
      </div>
      <label v-if="$v.email.$invalid">Veuillez rentrer une adresse email valide</label>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <input id="password_inscription" type="password"
          v-bind:class="{ 'invalid': $v.password.$error }"
          v-model='password' :value="password" @input="set_password">
        <label for="password_inscription">Mot de passe</label>
      </div>
      <label v-if="$v.password.$invalid">Le mot de passe doit être entre {{$v.password.$params.minLength.min}} et {{$v.password.$params.maxLength.max}} charactère</label>
    </div>

    <div class="row">
      <div class="input-field col s12">
        <input id="confirm_password_inscription" type="password"
          v-bind:class="{ 'invalid': $v.confirm_password.$error }"
          v-model='confirm_password'  :value="confirm_password" @input="set_cpassword" class="validate">
        <label for="confirm_password_inscription">Confirmation de mot de passe</label>
      </div>
      <label v-if="$v.confirm_password.$invalid">Vos mots de passe ne concorde pas</label>
    </div>
    <div class="row">
     <button @click="inscription" class="btn waves-effect waves-light" type="submit" name="action">Valider
       <i class="material-icons right">send</i>
     </button>

     <label> {{errorMessage}} </label>
  </div>

 </div>
</template>

<script>
import { required, sameAs, email, minLength, maxLength } from 'vuelidate/lib/validators'
//
export default {
  name: 'Inscription',
  data () {
    return {
      first_name: this.$store.state.auth.inscription_user.firstname,
      last_name: this.$store.state.auth.inscription_user.lastname,
      nick_name: this.$store.state.auth.inscription_user.nickname,
      email: this.$store.state.auth.inscription_user.email,
      password: this.$store.state.auth.inscription_user.password,
      confirm_password: this.$store.state.auth.inscription_user.password_confirmation,
      errorMessage: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      minLength: minLength(4),
      maxLength: maxLength(25)
    },
    confirm_password: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
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
    },
    set_cpassword (e) {
      this.$store.commit('set_cpassword', e.target.value)
    },
    inscription (event) {
      if (this.$v.$invalid === false) {
        this.$store.dispatch('inscription').then((response) => {
          this.$router.push({name: 'Project'})
        }).catch((err) => {
          console.log(err)
          this.$data.errorMessage = err.errors.message
        })
      } else {
        this.$data.errorMessage = 'L\'un des champs est invalide'
      }
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
