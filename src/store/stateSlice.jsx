import { createSlice } from '@reduxjs/toolkit'

const projectTreeSlice = createSlice({
    name: 'projectTree',
    initialState: {
        title: '',
        description:'',
        users:[],
        tasks:[
            // {
            // title: '',
            // keyWords:[],
            // sprint:'',
            // user: '',
            // task:'',
            // notes:'',
            // status: 'backlog',}
        ]
        
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks= [...state.tasks, action.payload]
        },
        deleteTask: (state, action) => {
            const {indexTask} = action.payload
            state.tasks.splice(indexTask, 1)
        },
        updateProject: (state, action) => {
            const {title, description, users} = action.payload
            state.title= title
            state.description= description
            state.users= users
        },
        updateTask: (state, action) => {
            const {indexTask, formData} = action.payload
            state.tasks[indexTask]= formData
        },
        updateTaskStatus: (state, action) => {
            const {taskStatus, indexTask} = action.payload
            state.tasks[indexTask].status= taskStatus
            console.log(state.tasks[indexTask].status)
        },
    }
  })

  export const { addTask, deleteTask, updateProject, updateTask, updateTaskStatus } = projectTreeSlice.actions

  export default projectTreeSlice.reducer