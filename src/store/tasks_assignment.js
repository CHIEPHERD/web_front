import rmq from '../rabbitMQ'

//an user is binded to a task by his assignment
export default {
  state: {
    tasks_assignement: [],
  },
  mutations: {
    delete_task_assignment (state) {
      console.log('delete_project')
    },
    bind_task_assignment_user (state) {
      console.log('select_project')
    },
    add_task_assignment (state) {
      console.log('add_project')
    }
  },
  actions: {
    add_task_assignment ({commit}, task) {
      let addRoad = 'chiepherd.tasks.create'
      rmq.connect(addRoad, task).then((response) => {
        commit('add_task', task)
      }).catch((err) => { console.log(err) })
    },
    delete_task_assignment ({commit}, task) {
      let deleteRoad = 'chiepherd.tasks.delete'
      rmq.connect(deleteRoad, task).then((response) => {
        commit('delete_task', task)
      }).catch((err) => { console.log(err) })
    },
    init_tasks_assignment ({commit}, task) {
      let initRoad = 'chiepherd.tasks.show'
      rmq.connect(initRoad, task).then((response) => {
        commit('init_task', task)
      }).catch((err) => { console.log(err) })
    }
  }
}
