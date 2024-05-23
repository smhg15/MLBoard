import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SourceIcon from '@mui/icons-material/Source';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import style from '../SXStyleMUIComponents';
import { Divider, IconButton, Tooltip, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateTaskStatus } from '../store/stateSlice';
import IconStatus from '../commons/iconStatus';

function StatusSelect({indexTask}) {
  const taskData = useSelector((state)=>state.projectTree.tasks[indexTask].status)
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleChangeStatus(taskStatus, indexTask){
      let payload = {taskStatus, indexTask}
      dispatch(updateTaskStatus(payload))
      setAnchorEl(null);
    }

  return (
    <div>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size='small'
      >
        <Tooltip 
            title="Change Status" 
            placement='bottom' 
            arrow
        >
            <IconStatus status={taskData}/>
        </Tooltip>
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={()=>handleChangeStatus('backlog', indexTask)}>
            <SourceIcon color='primary' fontSize='small'/>
            <Divider 
                flexItem 
                variant='middle' 
                orientation="vertical" 
                sx={style.divider}
            />
            <Typography>Backlog</Typography>
        </MenuItem>
        <MenuItem onClick={()=>handleChangeStatus('todo', indexTask)}>
            <AssignmentIndIcon color='primary' fontSize='small'/>
            <Divider 
                flexItem 
                variant='middle' 
                orientation="vertical" 
                sx={style.divider}
            />
            <Typography>To Do</Typography>
        </MenuItem>
        <MenuItem onClick={()=>handleChangeStatus('ongoing', indexTask)}>
            <EngineeringIcon color='primary' fontSize='small'/>
            <Divider 
                flexItem 
                variant='middle' 
                orientation="vertical" 
                sx={style.divider}
            />
            <Typography>On Going</Typography>
        </MenuItem>
        <MenuItem onClick={()=>handleChangeStatus('done', indexTask)}>
            <AssignmentTurnedInIcon color='success' fontSize='small'/>
            <Divider 
                flexItem 
                variant='middle' 
                orientation="vertical" 
                sx={style.divider}
            />
            <Typography>Done</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default StatusSelect;
