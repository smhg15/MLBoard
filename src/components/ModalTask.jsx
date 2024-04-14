import {React, useState} from 'react';
import { Box, Button, IconButton, Modal, FormControl, InputLabel, TextField, Select, MenuItem, Stack, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import style from '../SXStyleMUIComponents';


function ModalTask({users}) {
  console.log(users)
  const [selectValue, setSelectValue] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {setSelectValue(e.target.value)};
  return (
    <div>
      <IconButton 
        title='New Task' 
        color='primary' 
        onClick={handleOpen}
      >
        <AddIcon fontSize='large'/>
      </IconButton>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={[style.box, style.border]}>
          <Typography>New Task</Typography>
          <Button 
              color='secondary' 
              sx={style.buttomX}
              onClick={handleClose}
            >
              <CloseIcon/>
            </Button>
            <FormControl>
             <Stack spacing={2}>
                <InputLabel id='Title'/>
                <TextField label='Title *'/>
                <InputLabel id='Key Words'/>
                <TextField label='Key Words'/>
                <InputLabel id='Sprint'/>
                <TextField label='Sprint'/>
                <FormControl>
                <InputLabel id="users">User</InputLabel>
                <Select
                  label='Users'
                  labelId="users"
                  id="users"
                  value={selectValue}
                  onChange={handleChange}
                >
                  {users.map((user, index) => <MenuItem value={index}>
                                                {user}
                                              </MenuItem>)}
                </Select>
                </FormControl>
                <InputLabel id='Task'/>
                <TextField label='Task'/>
                <InputLabel id='Notes'/>
                <TextField label='Notes'/>
                <Button
                  variant='contained'
                  color='secondary'
                  size='small'
                >
                  CREATE TASK
                </Button>
              </Stack>
            </FormControl>
        </Box>
</Modal>      
    </div>
  );
}
export default ModalTask