import {React, useState} from 'react';
import { Box, Button, Modal, FormControl, TextField, InputLabel, Stack, Tooltip, Chip, List, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import style from '../SXStyleMUIComponents';

function ModalNewProject() {
  const [open, setOpen] = useState(false);
  const [titleIsDefine, setTitleIsDefine] = useState(false);
  const [projectUsers, setProjectUsers] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description:'',
    users:[]
  })
// Handle Description and other simple events
  const handleDescriptionFormData = (e) => setFormData({...formData, [e.target.name]:e.target.value})
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Handle Title event
  function handleTitleFormData(e) {
    if (e.target.value == ''){
      setTitleIsDefine(false)
    }else{
      setTitleIsDefine(true)
    }
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  // Handle Users events
  const handleProjectUsers = (e) => setProjectUsers(e.target.value)

  function handleFormDataUsers() {
    if (projectUsers != '') {
    setFormData(formData => ({
      ...formData,
      users: [...formData.users, projectUsers]
    }));
    setProjectUsers('')
  }}

  function handleFormDataUsersEnter(e) {
    if (e.key === 'Enter'){
      if (projectUsers != '') {
      setFormData(formData => ({
        ...formData,
        users: [...formData.users, projectUsers]
      }));
      setProjectUsers('')
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
        <Box sx={[style.box, style.border]}>
        <Typography>New Project</Typography>
          <Button 
            color='secondary' 
            sx={style.buttomX}
            onClick={handleClose}
            
          >
            <CloseIcon/>
          </Button>
          <FormControl>
            <Stack spacing={2}>
              <InputLabel id='title'/>
              <Tooltip title="This field is required" placement='top-start' arrow>
              <TextField 
                label='title *'
                name='title'
                onChange={(e) => {handleTitleFormData(e)}}
              />
              </Tooltip>
              <InputLabel 
                id='description'
              />
              <TextField 
                label='description'
                name='description'
                onChange={(e) => {handleDescriptionFormData(e)}}
              />
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
              <InputLabel id='users'/>
              <TextField 
                label='users'
                name='users'
                size='small'   
                value={projectUsers}
                onChange={(e) => {handleProjectUsers(e)}}
                onKeyDown={(e)=>{handleFormDataUsersEnter(e)}}
              />
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
                component={Link}
                to={titleIsDefine?'/dashboard':''}
                state={formData}
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