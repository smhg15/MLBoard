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
            // state: 'backlog',}
        ]
        
    },
    reducers: {
        addTask: (state, action) => {
        state.tasks= [...state.tasks, action.payload]
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
    }
  })

  export const { addTask, updateProject, updateTask } = projectTreeSlice.actions

  export default projectTreeSlice.reducer