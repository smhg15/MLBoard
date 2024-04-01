import {React, useState} from 'react';
import { Box, Button, Modal, FormControl, TextField, InputLabel, Stack, Tooltip, Chip} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import style from '../SXStyleMUIComponents';


function ModalNewProject() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description:'',
    users:[]
  })
  let projectUser = ''

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const handleFormData = (e) => setFormData({...formData, [e.target.name]:e.target.value})
const handleProjectUser = (e) => projectUser = e.target.value
const handleFormDataUsers = () => setFormData(formData => ({
  ...formData,
  users: [...formData.users, projectUser]
}));
const handleCreateProject = ()=> console.log(formData);

  return (
    <>
      <Button 
        variant='contained'
        color='secondary'
        size='large'
        onClick={handleOpen}
      >
        NEW PROJECT
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.box}>
            <Button 
              color='secondary' 
              sx={style.buttomX}
              onClick={handleClose}
            >
              <CloseIcon/>
            </Button>
            <FormControl>
              <Stack spacing={2}>
                <InputLabel 
                  id='title'
                ></InputLabel>
                <TextField 
                  labelId='title' 
                  label='title'
                  name='title'
                  onChange={(e) => {handleFormData(e)}}
                ></TextField>
                <InputLabel 
                  id='description'
                ></InputLabel>
                <TextField 
                  labelId='description' 
                  label='description'
                  name='description'
                  onChange={(e) => {handleFormData(e)}}
                ></TextField>
                <div>
                  {formData.users.map((user) => <Chip label={user} variant='filled' color='secondary' size='small'></Chip>)}
                <Tooltip title="Enter username and press 'Add' button" placement='top' arrow>
                <InputLabel 
                  id='users'
                ></InputLabel>
                <TextField 
                  labelId='users' 
                  label='users'
                  name='users'
                  size='small'   
                  onChange={(e) => {handleProjectUser(e)}}
                ></TextField>
                </Tooltip>
                <Button
                  variant= 'text'
                  color='secondary'
                  size='large'
                  onClick={() => {handleFormDataUsers()}}                  
                >
                  ADD
                </Button>
                </div>
                <Button
                  variant='contained' 
                  color='secondary'
                  size='small'         
                  onClick={handleCreateProject}         
                >
                  CREATE PROJECT
                </Button>
              </Stack>
            </FormControl>
        </Box>
      </Modal>
    </>
  );
}
export default ModalNewProject