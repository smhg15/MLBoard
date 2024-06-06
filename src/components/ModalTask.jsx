import {React, useState} from 'react';
import { Box, Button, Chip, FormControl, IconButton, InputLabel, MenuItem, Modal, List, Select, Stack, Tooltip, TextField, Typography} from '@mui/material';
import style from '../SXStyleMUIComponents';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addTask, updateTask } from '../store/stateSlice';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';

function ModalTask({indexTask}) {
  const projectUsers = useSelector((state)=>state.projectTree.users)
  const taskData = useSelector((state)=>state.projectTree.tasks[indexTask]||'')
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [titleIsDefine, setTitleIsDefine] = useState(false);
  const [keyWords, setKeyWords] = useState('');
  const [formData, setFormData] = useState({
    title:taskData.title|| '',
    keyWords:taskData.keyWords||[],
    sprint:taskData.sprint||'',
    user:taskData.user||'',
    task:taskData.task||'',
    notes:taskData.notes||'',
    status:taskData.status||'backlog'
  })

  // Handle simple events
  function handleOpen() {
    setOpen(true)
    formData.title !=''?setTitleIsDefine(true):setTitleIsDefine(false);
  }
  const handleClose = () => setOpen(false);
  const handleFormData = (e) => setFormData({...formData, [e.target.name]:e.target.value})
  
  function handleTitleFormData(e) {
    if (e.target.value == ''){
      setTitleIsDefine(false)
    }else{
      setTitleIsDefine(true)
    }
    return setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  function handleCreateTask(formData) {
    if (titleIsDefine == true) {
    dispatch(addTask(formData))
    handleClose();
    setFormData({
      title: '',
      keyWords:[],
      sprint:'',
      user:'',
      task:'',
      notes:'',
      status:'backlog'
    });
    setTitleIsDefine(false)
    }
  }

  function handleEditTask(indexTask, formData){
      if (formData.title !='')
        {let payload = {indexTask, formData}
        dispatch(updateTask(payload))
        handleClose();
        setTitleIsDefine(false)}
    }

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
      <Tooltip 
          title={taskData==''?'New Task':'View Details'}
          placement='bottom'  
          arrow
      >
      <IconButton 
        color={taskData==''?'primary':'secondary'}
        onClick={handleOpen}
        size='small'        
      >
        {
        taskData==''?
        <AddIcon fontSize='large'/>
        :
        <VisibilityIcon/>
        }  
      </IconButton>
      </Tooltip>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={[style.box, style.border]}>
          <Typography>{taskData==''?'New Task':'Task Details'}</Typography>
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
                <Tooltip title="This field is required" placement='top-start' arrow>
                <TextField 
                  label='Title *'
                  name='title'
                  value={formData.title}
                  onChange={(e) => {handleTitleFormData(e)}}
                />
                </Tooltip>
{/* CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS CHIPS */}
                <List>
                  {
                  formData.keyWords.map((kWord, index) => {
                    return (
                        <Chip
                          key={index}
                          label={kWord}
                          onDelete={()=>handleDeleteFormDataKeyWords(index)}
                          color='secondary'
                          size='small'
                        />
                    );
                  })
                  }
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
                  defaultValue={formData.sprint}
                  onChange={(e) => {handleFormData(e)}}
                />
                <FormControl>
                <InputLabel id="user">User</InputLabel>
                <Select
                  label='User'
                  labelId="user"
                  id="user"
                  name='user'
                  value={formData.user}
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
                  defaultValue={formData.task}
                  onChange={(e) => {handleFormData(e)}}
                />
                <InputLabel id='Notes'/>
                <TextField 
                  label='Notes' 
                  multiline
                  maxRows={4}  
                  name='notes'
                  defaultValue={formData.notes}
                  onChange={(e) => {handleFormData(e)}}                
                  />
                <Button
                  variant='contained'
                  color='secondary'
                  size='small'
                  onClick={taskData==''?()=>handleCreateTask(formData):()=>handleEditTask(indexTask, formData)}
                >
                  {taskData==''?'CREATE TASK':'CLOSE / SAVE CHANGES'}
                </Button>
              </Stack>
            </FormControl>
        </Box>
</Modal>      
    </div>
  );
}
export default ModalTask