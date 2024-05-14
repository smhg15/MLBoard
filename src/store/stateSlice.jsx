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
            // sprint:' ',
            // user: '',
            // task:'',
            // notes:'',
            // state: 'backlog',}
        ]
        
    },
    reducers: {
        updateProject: (state, action) => {
        const {title, description, users} = action.payload
        state.title= title
        state.description= description
        state.users= users
      },
        addTask: (state, action) => {
        state.tasks= [...state.tasks, action.payload]
        }
    }
  })

  export const { updateProject, addTask } = projectTreeSlice.actions

  export default projectTreeSlice.reducer