import rmq from '../rabbitMQ'

export default {
  state: {
    tasks: { },
    newTask: { }
  },
  mutations: {
    select_task (state) {
      console.log('select_project')
    },
    add_task (state) {
      console.log('add_project')
    }
  },
  actions: {
    add_task ({commit}, task) {
      let addRoad = 'chiepherd.tasks.create'
      rmq.connect(addRoad, task).then((response) => {
        commit('add_task', task)
      }).catch((err) => { console.log(err) })
    },
    update_task ({commit}, task) {
      let updateRoad = 'chiepherd.tasks.update'
      rmq.connect(updateRoad, task).then((response) => {
        commit('update_task', task)
      }).catch((err) => { console.log(err) })
    },
    delete_task ({commit}, task) {
      let deleteRoad = 'chiepherd.tasks.delete'
      rmq.connect(deleteRoad, task).then((response) => {
        commit('delete_task', task)
      }).catch((err) => { console.log(err) })
    }
  }
}
