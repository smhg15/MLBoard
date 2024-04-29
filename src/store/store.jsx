import { configureStore } from '@reduxjs/toolkit'
import projectTreeReducer from './stateSlice';

export default configureStore({
  reducer: {
    projectTree: projectTreeReducer
  }
})