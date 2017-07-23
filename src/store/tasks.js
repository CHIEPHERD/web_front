import rmq from '../rabbitMQ'

export default {
  state: {
    tasks: [
      {
        uuid: '',
        projectUuid: '',
        ancestorUuid: '',
        title: 'Write some data',
        description: '...description...',
        type: 'Task',
        children: []
      }
    ],
    types: ['Feature', 'Fix', 'Epic', 'Task'],
    newTask: { }
  },
  mutations: {
    select_task (state) {
      console.log('select_tasks')
    },
    add_task (state) {
      console.log('add_tasks')
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
    },
    init_task ({commit}, task) {
      let initRoad = 'chiepherd.tasks.show'
      rmq.connect(initRoad, task).then((response) => {
        commit('init_task', task)
      }).catch((err) => { console.log(err) })
    }
  }
}
