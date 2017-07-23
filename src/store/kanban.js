import rmq from '../rabbitMQ'

// an user is binded to a task by his assignment
export default {
  state: {
    tasks: [{
      uuid: 1,
      id: 1,
      status: 'on-hold'
    }],
    stages: ['on-hold', 'in-progress', 'needs-review', 'approved'],
    isActive: true
  },
  mutations: {
    bind_task_status (state) {
      console.log('select_project')
    },
    update_stage (state) {
      console.log('add_project')
    }
  },
  actions: {
    init_all_status_from_rmq ({commit}, task) {
      let addRoad = 'chiepherd.tasks.create'
      rmq.connect(addRoad, task).then((response) => {
        commit('add_task', task)
      }).catch((err) => { console.log(err) })
    },
    init_stages_from_rmq ({commit}, task) {
      let deleteRoad = 'chiepherd.tasks.delete'
      rmq.connect(deleteRoad, task).then((response) => {
        commit('delete_task', task)
      }).catch((err) => { console.log(err) })
    },
    // all status are by default on Number 1
    update_status_from_rmq ({commit}, task) {
      let initRoad = 'chiepherd.tasks.show'
      rmq.connect(initRoad, task).then((response) => {
        commit('init_task', task)
      }).catch((err) => { console.log(err) })
    },
    update_stage_from_rmq ({commit}, stage) {

    },
    delete_status_from_rmq ({commit}, status) {

    }
  }
}
