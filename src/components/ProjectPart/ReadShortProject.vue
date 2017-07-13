<template>
  <div>
    <div class="row" v-for="project in projects">
      <div class="offset-s1 s10 col card">
        <h4> {{project.title}}</h4>
        <div class="col s10 offset-s1">
          <p> {{project.corpus}}
          </p>
        </div>
        <div class="offset-s8 s2 col">{{project.numberOfUser}} utilisateurs</div>
        <div class="col s2">{{project.numberOfTask}} tâches</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ReadShortProject',
  data () {
    return {
      projects: [
        {
          title: 'project 1',
          corpus: 'Thalassius vero ea tempestate praefectus praetorio praesens adrogantis ingenii, considerans incitationem eius ad multorum non maturitate vel consiliis mitigabat, ut aliquotiens celsae principum molliverunt, sed adversando iurgandoque cum parum ad rabiem potius evibrabat, Augustum actus eius exaggerando',
          numberOfUser: 6,
          numberOfTask: 65
        },
        {
          title: 'project 2',
          corpus: 'Thalassius vero ea tempestate praefectus praetorio praesens adrogantis ingenii, considerans incitationem eius ad multorum non maturitate vel consiliis mitigabat, ut aliquotiens celsae principum molliverunt, sed adversando iurgandoque cum parum ad rabiem potius evibrabat, Augustum actus eius exaggerando',
          numberOfUser: 20,
          numberOfTask: 40
        }
      ]
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
