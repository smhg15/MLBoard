import {React, useState} from 'react';
import { Box, Button, Chip, FormControl, IconButton, InputLabel, MenuItem, Modal, List, Select, Stack, Tooltip, TextField, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import style from '../SXStyleMUIComponents';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateTask } from '../store/stateSlice';


function ModalTask() {
  const projectUsers = useSelector((state)=>state.projectTree.users)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [keyWords, setKeyWords] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    keyWords:[],
    sprint:' ',
    users:'',
    task:'',
    notes:'',
    state:'backlog'
  })

  // Handle simple events
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleFormData = (e) => setFormData({...formData, [e.target.name]:e.target.value})
  const handleCreateTask= (formData)=>dispatch(updateTask(formData));

  // Handle Key Words events
  const handleProjectKeyWords = (e) => setKeyWords(e.target.value)

  function handleFormDataKeyWords() {
    if (keyWords != '') {
    setFormData(formData => ({
      ...formData,
      keyWords: [...formData.keyWords, keyWords]
    }));
    setKeyWords('')
  }}

  function handleFormDataKeyWordsEnter(e) {
    if (e.key === 'Enter'){
      if (keyWords != '') {
      setFormData(formData => ({
        ...formData,
        keyWords: [...formData.keyWords, keyWords]
      }));
      setKeyWords('')
    }}}

  const handleDeleteFormDataKeyWords= (indexToRemove) => {
    setFormData(formData => ({
      ...formData,
      keyWords: formData.keyWords.filter((_, index) => index !== indexToRemove)
    }));
  }
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
                <TextField 
                  label='Title *'
                  name='title'
                  onChange={(e) => {handleFormData(e)}}
                />
{/* CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS */}
                <List>
                  {formData.keyWords.map((kWord, index) => {
                    return (
                        <Chip
                          key={index}
                          label={kWord}
                          onDelete={()=>handleDeleteFormDataKeyWords(index)}
                          color='secondary'
                          size='small'
                        />
                    );
                  })}
                </List>
                <div>
                  <InputLabel id='kWords'/>
                  <Tooltip 
                    title="Enter key word and press 'Add' button" 
                    placement='top' 
                    arrow
                  >
                  <TextField 
                    label='Key Words'
                    name='kWords'
                    size='small'   
                    value={keyWords}
                    onChange={(e) => {handleProjectKeyWords(e)}}
                    onKeyDown={(e)=>{handleFormDataKeyWordsEnter(e)}}
                  />
                  </Tooltip>
                  <Button
                    variant= 'text'
                    color='secondary'
                    size='large'
                    onClick={() => {handleFormDataKeyWords()}}
                  >
                    ADD
                  </Button>
                </div>
{/* CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS */}
                <InputLabel id='Sprint'/>
                <TextField 
                  label='Sprint'
                  name='sprint'
                  onChange={(e) => {handleFormData(e)}}
                />
                <FormControl>
                <InputLabel id="users">User</InputLabel>
                <Select
                  label='Users'
                  labelId="users"
                  id="users"
                  name='users'
                  value={formData.users}
                  onChange={(e) => {handleFormData(e)}}
                >
                  {projectUsers.map((user, index) => <MenuItem 
                                                key={index} 
                                                value={user}>
                                                  {user}
                                              </MenuItem>)}
                </Select>
                </FormControl>
                <InputLabel id='Task'/>
                <TextField 
                  label='Task' 
                  multiline
                  maxRows={3}
                  name='task'
                  onChange={(e) => {handleFormData(e)}}
                />
                <InputLabel id='Notes'/>
                <TextField 
                  label='Notes' 
                  multiline
                  maxRows={4}  
                  name='notes'
                  onChange={(e) => {handleFormData(e)}}                
                  />
                <Button
                  variant='contained'
                  color='secondary'
                  size='small'
                  onClick={()=>handleCreateTask(formData)}
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