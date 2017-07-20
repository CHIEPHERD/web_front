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
    selectedProject: { }
  },
  mutations: {
    search_project (state, value) {
      state.filteredProjects = _.filter(state.projects,
        function (p) { return _.startsWith(p.title, value) })
    },
    select_project (state, id) {
      console.log('add_project')
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
    }
  },
  actions: {
    init_projects_from_rmq () {
      // callRmqRoute('chiepherd.project', 'toto')
      // let road = 'chiepherd.project.create'
      let listRoad = 'chiepherd.project.list'
      rmq.connect().then((client) => {
        /* rmq.send(client, road, {email: 'test@email.fr', name: 'this', description: 'test from web', label: 'test Os térone'}) */
        console.log('call good')
        rmq.send(client, listRoad, {}).then(() => { console.log('msg back') })
          .catch((err) => { console.log(err) })
      })
      .catch((err) => { console.log(err) })
    }
  }
}
