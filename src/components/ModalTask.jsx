import {React, useState} from 'react';
import { Box, Button, Chip, FormControl, IconButton, InputLabel, MenuItem, Modal, List, Select, Stack, Tooltip, TextField, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import style from '../SXStyleMUIComponents';



function ModalTask({users}) {
  console.log(users)
  const [selectValue, setSelectValue] = useState('');
  const [open, setOpen] = useState(false);

  const [keyWords, setKeyWords] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    keyWords:[],
    user:'',
    task:'',
    notes:'',
  })

  // Handle simple events
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {setSelectValue(e.target.value)};

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
                <TextField label='Title *'/>
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
                  <Tooltip title="Enter key word and press 'Add' button" placement='top' arrow>
                  <InputLabel id='kWords'/>
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
                <TextField 
                  label='Task' 
                  multiline
                  maxRows={3}
                />
                <InputLabel id='Notes'/>
                <TextField 
                  label='Notes' 
                  multiline
                  maxRows={4}                  
                  />
                <Button
                  variant='contained'
                  color='secondary'
                  size='small'
                  onClick={console.log(formData)}
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