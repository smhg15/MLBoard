import * as React from 'react';
import { Box, Button, IconButton, Modal, FormControl, FormLabel, TextField, Select, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalTask({users}) {
  console.log(users)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Button>X</Button>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <TextField></TextField>
                <FormLabel>Key Words</FormLabel>
                <TextField></TextField>
                <FormLabel>Sprint</FormLabel>
                <TextField></TextField>
                <FormLabel id="users">Users</FormLabel>
                <Select
                  labelId="users"
                  id="users"
                // value={users}
                // onChange={handleChange}
                >
                  {users.map((user, index) => <MenuItem value={index}>
                                                {user}
                                              </MenuItem>)}
                </Select>
                <FormLabel>Task</FormLabel>
                <TextField></TextField>
                <FormLabel>Notes</FormLabel>
                <TextField></TextField>
                <Button>CREATE PROJECT</Button>
            </FormControl>
        </Box>
</Modal>      
    </div>
  );
}
export default ModalTask