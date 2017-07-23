import _ from 'lodash'
import rmq from '../rabbitMQ'

export default {
  state: {
    projects: [],
    filteredProjects: [],
    selectedProject: {
      id: 3,
      name: 'thas',
      description: 'Thalassius vero ea tempestate praefectus praetorio praesens adrogantis ingenii, considerans incitationem eius ad multorum non maturitate vel consiliis mitigabat, ut aliquotiens celsae principum molliverunt, sed adversando iurgandoque cum parum ad rabiem potius evibrabat, Augustum actus eius exaggerando',
      users: [],
      tasks: []

    }
  },
  mutations: {
    search_project (state, value) {
      state.filteredProjects = _.filter(state.projects,
        function (p) { return _.startsWith(p.name, value) })
    },
    add_project (state, data) {
      console.log('add_project')
      /* let project = {
        name: data.project_name,
        description: data.description,
        initials: data.initials,
        numberOfUser: 0,
        numberOfTask: 0
      } */
      state.projects = _.concat(state.projects, data)
    },
    detail_project (state, project) {
      state.selectedProject = project
    }
  },
  actions: {
    init_projects_from_rmq ({state}) {
      return new Promise((resolve, reject) => {
        let listRoad = 'chiepherd.project.list'
        let projectUserRoad = 'chiepherd.project.users'
        let taskUserRoad = 'chiepherd.project.tasks'

        rmq.connect(listRoad, {}).then((response) => {
          console.log('project')
          console.log(response)
          state.projects = response
          state.filteredProjects = response
          return response
        }).then((projects) => {
          let promises = []
          _.forEach(projects, (p) => {
            let pUserPromise = rmq.connect(projectUserRoad, p).then((response) => {
              p.users = response
            }).catch((err) => reject(err))
            let tUserPromise = rmq.connect(taskUserRoad, p).then((response) => {
              p.tasks = response
            }).catch((err) => reject(err))

            promises.push(pUserPromise)
            promises.push(tUserPromise)
          })
          Promise.all(promises).then((response) => {
            console.log('all promises processed')
            resolve(response)
          }).catch((err) => reject(err))
        })
        .catch((err) => { reject(err) })
      })
    }, /*
    detail_project_from_rmq ({commit}) {
      return new Promise((resolve, reject) => {
        let detailRoad = 'chiepherd.project.show'

        rmq.connect(detailRoad, {}).then((response) => {
          commit('detail_project', response)
          resolve(response)
        })
        .catch((err) => { reject(err) })
      })
    }, */
    get_all_tasks_of_project ({state}) {
      return new Promise((resolve, reject) => {
        let allTaskProject = 'chiepherd.project.task'
        rmq.connect(allTaskProject, state.selectedProject).then((response) => {
          resolve(response)
        }).catch((err) => { reject(err) })
      })
    },
    get_all_users_of_project ({state}) {
      return new Promise((resolve, reject) => {
        let allUserProject = 'chiepherd.project.users'
        rmq.connect(allUserProject, state.selectedProject).then((response) => {
          resolve(response)
        }).catch((err) => { reject(err) })
      })
    },
    add_projects_from_rmq ({state, commit}, project) {
      return new Promise((resolve, reject) => {
        let addRoad = 'chiepherd.project.create'
        let payload = {
          name: project.name,
          label: project.label,
          description: project.description,
          email: project.email
        }

        rmq.connect(addRoad, payload).then((response) => {
          commit('add_project', response)
          resolve(response)
        }).catch((err) => { reject(err) })
      })
    }
  }
}
