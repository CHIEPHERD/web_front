import rmq from '../rabbitMQ'
import _ from 'lodash'

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
    selectedTask: {
      uuid: '',
      projectUuid: '',
      ancestorUuid: '',
      title: 'Write some data',
      description: '...description...',
      type: 'Task',
      children: []
    }
  },
  mutations: {
    detail_task (state, task) {
      state.selectedTask = task
    },
    add_task (state, task) {
      state.tasks = _.concat(state.tasks, task)
    }
  },
  actions: {
    add_task_on_rmq ({commit}, task) {
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
