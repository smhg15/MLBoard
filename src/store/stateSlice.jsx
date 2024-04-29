import { createSlice } from '@reduxjs/toolkit'

const projectTreeSlice = createSlice({
    name: 'projectTree',
    initialState: {
        title: '',
        description:'',
        users:[],
        task:[
            // {
            // title: '',
            // keyWords:[],
            // sprint:' ',
            // users:'',
            // task:'',
            // notes:'',
            // }
        ]
        
    },
    reducers: {
        updateProject: (state, action) => {
        const {title, description, users} = action.payload
        state.title= title
        state.description= description
        state.users= users
      },
        updateTask: (state, action) => {
        state.task= [...state.task, action.payload]
        }
    }
  })

  export const { updateProject, updateTask } = projectTreeSlice.actions

  export default projectTreeSlice.reducer