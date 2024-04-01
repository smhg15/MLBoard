import * as React from 'react';
import { Box, Button, Modal, FormControl, FormLabel, TextField } from '@mui/material';

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

function ModalNewProject() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Button>X</Button>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <TextField></TextField>
                <FormLabel>Description</FormLabel>
                <TextField></TextField>
                <FormLabel>Project Users</FormLabel>
                <TextField></TextField>
                <Button>CREATE PROJECT</Button>
            </FormControl>
        </Box>
      </Modal>
    </>
  );
}
export default ModalNewProject