import _ from 'lodash'

export default {
  state: {
    projects: [
      {
        id: 0,
        title: 'project 1',
        corpus: 'Thalassius vero ea tempestate praefectus praetorio praesens adrogantis ingenii, considerans incitationem eius ad multorum non maturitate vel consiliis mitigabat, ut aliquotiens celsae principum molliverunt, sed adversando iurgandoque cum parum ad rabiem potius evibrabat, Augustum actus eius exaggerando',
        numberOfUser: 6,
        numberOfTask: 65
      },
      {
        id: 1,
        title: 'project 2',
        corpus: 'Thalassius vero ea tempestate praefectus praetorio praesens adrogantis ingenii, considerans incitationem eius ad multorum non maturitate vel consiliis mitigabat, ut aliquotiens celsae principum molliverunt, sed adversando iurgandoque cum parum ad rabiem potius evibrabat, Augustum actus eius exaggerando',
        numberOfUser: 20,
        numberOfTask: 40
      },
      {
        id: 3,
        title: 'thas',
        corpus: 'Thalassius vero ea tempestate praefectus praetorio praesens adrogantis ingenii, considerans incitationem eius ad multorum non maturitate vel consiliis mitigabat, ut aliquotiens celsae principum molliverunt, sed adversando iurgandoque cum parum ad rabiem potius evibrabat, Augustum actus eius exaggerando',
        numberOfUser: 20,
        numberOfTask: 40
      }
    ],
    filteredProjects: [
      {
        id: 0,
        title: 'project 1',
        corpus: 'Thalassius vero ea tempestate praefectus praetorio praesens adrogantis ingenii, considerans incitationem eius ad multorum non maturitate vel consiliis mitigabat, ut aliquotiens celsae principum molliverunt, sed adversando iurgandoque cum parum ad rabiem potius evibrabat, Augustum actus eius exaggerando',
        numberOfUser: 6,
        numberOfTask: 65
      },
      {
        id: 1,
        title: 'project 2',
        corpus: 'Thalassius vero ea tempestate praefectus praetorio praesens adrogantis ingenii, considerans incitationem eius ad multorum non maturitate vel consiliis mitigabat, ut aliquotiens celsae principum molliverunt, sed adversando iurgandoque cum parum ad rabiem potius evibrabat, Augustum actus eius exaggerando',
        numberOfUser: 20,
        numberOfTask: 40
      },
      {
        id: 3,
        title: 'thas',
        corpus: 'Thalassius vero ea tempestate praefectus praetorio praesens adrogantis ingenii, considerans incitationem eius ad multorum non maturitate vel consiliis mitigabat, ut aliquotiens celsae principum molliverunt, sed adversando iurgandoque cum parum ad rabiem potius evibrabat, Augustum actus eius exaggerando',
        numberOfUser: 20,
        numberOfTask: 40
      }
    ],
    selectedProject: { },
    newProject: { }
  },
  mutations: {
    search_project (state, value) {
      state.filteredProjects = _.filter(state.projects,
        function (p) { return _.startsWith(p.title, value) })
    },
    select_project (state, id) {
      console.log('add_project')
    },
    add_project (state) {
      console.log('add_project')
    }
  }
}