<template>
  <div class="row">
    <div v-for="admin in admins" class="card col s3 offset-s1">
      <div class="row">
        <span class="card-title">{{admin.firstname}} "{{admin.nickname}}" {{admin.lastname}}</span>
      </div>
      <div class="row">
        <div class="col s8">
          <label>email: {{admin.email}}</label>
        </div>
        <div class="col s2">
          <button @click="detail_admin(admin)" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">subject</i></button>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'ReadUser',
  computed: {
    admins () {
      return this.$store.state.admins.filteredAdmins
    }
  },
  methods: {
    detail_admin (admin) {
      this.$store.commit('detail_admin', admin)
      this.$router.push({name: 'DetailAdmin'})
    }
  },
  beforeCreate () {
    this.$store.dispatch('init_admins_from_rmq')
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
