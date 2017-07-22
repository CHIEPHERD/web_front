import _ from 'lodash'
import rmq from '../rabbitMQ'

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
    selectedProject: {
      id: 3,
      title: 'thas',
      corpus: 'Thalassius vero ea tempestate praefectus praetorio praesens adrogantis ingenii, considerans incitationem eius ad multorum non maturitate vel consiliis mitigabat, ut aliquotiens celsae principum molliverunt, sed adversando iurgandoque cum parum ad rabiem potius evibrabat, Augustum actus eius exaggerando',
      numberOfUser: 20,
      numberOfTask: 40
    }
  },
  mutations: {
    search_project (state, value) {
      state.filteredProjects = _.filter(state.projects,
        function (p) { return _.startsWith(p.title, value) })
    },
    add_project (state, data) {
      console.log('add_project')
      let project = {
        title: data.project_name,
        corpus: data.description,
        initials: data.initials,
        numberOfUser: 0,
        numberOfTask: 0
      }
      state.projects = _.concat(state.projects, project)
    },
    detail_project (state, project) {
      state.selectedProject = project
    }
  },
  actions: {
    init_projects_from_rmq () {
      return new Promise((resolve, reject) => {
        let listRoad = 'chiepherd.project.list'

        rmq.connect(listRoad, {}).then((response) => {
          resolve(response)
        })
        .catch((err) => { reject(err) })
      })
    },
    add_project_using_rmq ({state, commit}, data) {
      return new Promise((resolve, reject) => {
        let addRoad = 'chiepherd.project.create'

        rmq.connect(addRoad, data).then((response) => {
          commit('add_project', response)
          resolve(response)
        }).catch((err) => { reject(err) })
      })
    }
  }
}
