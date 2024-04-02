import {React, useState} from 'react';
import { Box, Button, Modal, FormControl, TextField, InputLabel, Stack, Tooltip, Chip, List} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import style from '../SXStyleMUIComponents';

function ModalNewProject() {
  const [open, setOpen] = useState(false);
  const [projectUser, setProjectUser] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description:'',
    users:[]
  })
///////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////

  // Simple handle events
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleFormData = (e) => setFormData({...formData, [e.target.name]:e.target.value})
  const handleProjectUser = (e) => setProjectUser(e.target.value)
  const handleCreateProject = ()=> console.log(formData);
 //Handle event with chips
  function handleFormDataUsers() {
    if (projectUser != '') {
    setFormData(formData => ({
      ...formData,
      users: [...formData.users, projectUser]
    }));
    setProjectUser('')
  }}
  function handleFormDataUsersEnter(e) {
    if (e.key === 'Enter'){
      if (projectUser != '') {
      setFormData(formData => ({
        ...formData,
        users: [...formData.users, projectUser]
      }));
      setProjectUser('')
    }}}

  const handleDeleteFormDataUsers= (indexToRemove) => {
    setFormData(formData => ({
      ...formData,
      users: formData.users.filter((_, index) => index !== indexToRemove)
    }));
  }


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
                  label='title'
                  name='title'
                  onChange={(e) => {handleFormData(e)}}
                ></TextField>
                <InputLabel 
                  id='description'
                ></InputLabel>
                <TextField 
                  label='description'
                  name='description'
                  onChange={(e) => {handleFormData(e)}}
                ></TextField>
                <List>
                {formData.users.map((user, index) => {
                  return (
                      <Chip
                        key={index}
                        label={user}
                        onDelete={()=>handleDeleteFormDataUsers(index)}
                        color='secondary'
                        size='small'
                      />
                  );
                })}
                </List>
                <div>
                <Tooltip title="Enter username and press 'Add' button" placement='top' arrow>
                <InputLabel 
                  id='users'
                ></InputLabel>
                <TextField 
                  label='users'
                  name='users'
                  size='small'   
                  value={projectUser}
                  onChange={(e) => {handleProjectUser(e)}}
                  onKeyDown={(e)=>{handleFormDataUsersEnter(e)}}
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