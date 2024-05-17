import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch } from 'react-redux'
import { deleteTask } from '../store/stateSlice';

function DeleteTask(indexTask){
    const dispatch = useDispatch()
    const handleDeleteTask =() => dispatch(deleteTask(indexTask))
    return(
        <IconButton
        onClick={handleDeleteTask}
        color='error'
        size='small'
        >
        <Tooltip 
            title="Delete Task" 
            placement='bottom' 
            arrow
            >
            <DeleteIcon/>
        </Tooltip>
      </IconButton>
    )

}
export default DeleteTask;