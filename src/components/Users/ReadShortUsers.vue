<template>
  <div class="row">
    <div v-for="user in users" class="card col s3 offset-s1">
      <div class="row">
        <span class="card-title">{{user.first_name}} "{{user.nick_name}}" {{user.last_name}}</span>
      </div>
      <div class="row">
        <div class="col s8">
          <label>role: {{user.role}}</label>
        </div>
        <div class="col s2">
          <button :value="user" @click="detail_user" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">subject</i></button>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'ReadUser',
  computed: {
    users () {
      return this.$store.state.users.filteredUsers
    }
  },
  methods: {
    detail_user (e) {
      this.$store.commit('detail_user', event.target.value)
    }
  },
  beforeCreate () {
    this.$store.dispatch('init_users_from_rmq')
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
