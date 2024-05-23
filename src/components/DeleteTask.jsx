import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch } from 'react-redux'
import { deleteTask } from '../store/stateSlice';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


function DeleteTask(indexTask){
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    function handleDeleteTask() {
        dispatch(deleteTask(indexTask));
        setOpen(false);
    }
    return(
        <>
        <IconButton
        onClick={handleClickOpen}
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
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
        <DialogTitle id="responsive-dialog-title">
            {'Delete this task?'}
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
        Are you sure you want to permanently remove this task?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleClose}>
            Cancel
            </Button>
            <Button onClick={handleDeleteTask} autoFocus color='error'>
            Delete
            </Button>
        </DialogActions>
        </Dialog>
    </>
    )

}
export default DeleteTask;