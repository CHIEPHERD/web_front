<template>
  <div>
    <h3> Kanban </h3>
    <kanban-board :stages="stages" :blocks="blocks">
    <div v-for="block in blocks" :slot="block.id">
      <div>
       <strong>id:</strong> {{ block.id }}
      </div>
      <div>
       {{ block.title }}
      </div>

      <router-link :to="{ name: 'ReadTask', params: {} }">Détails</router-link>
    </div>
    </kanban-board>
  </div>
</template>

<script>
export default {
  name: 'Kanban',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      stages: ['on-hold', 'in-progress', 'needs-review', 'approved'],
      blocks: [
        {
          id: 1,
          status: 'on-hold',
          title: 'Test'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/kanban.scss';
$on-hold: #FB7D44;
$in-progress: #2A92BF;
$needs-review: #F4CE46;
$approved: #00B961;

* {
  box-sizing: border-box;
}

/*
body {
  background: #33363D;
  color: white;
  font-family: 'Lato';
  font-weight: 300;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}*/

.drag-column {
    &-on-hold {
        .drag-column-header,
        .is-moved,
        .drag-options {
            background: $on-hold;
        }
    }

    &-in-progress {
        .drag-column-header,
        .is-moved,
        .drag-options {
            background: $in-progress;
        }
    }

    &-needs-review {
        .drag-column-header,
        .is-moved,
        .drag-options{
            background: $needs-review;
        }
    }

    &-approved {
        .drag-column-header,
        .is-moved,
        .drag-options {
            background: $approved;
        }
    }
}

.section {
  padding: 20px;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: 300;
  }

  h4 {
    font-weight: 400;
    a {
      font-weight: 600;
    }
  }
}
</style>
<!-- Yup, both the scoped and the non scoped work -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
