import React, { cloneElement, useState } from 'react';
import { Box, Button, Modal, Avatar, List, ListItem, ListItemAvatar, ListItemText, IconButton, Grid} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { FileOpen, Save } from '@mui/icons-material';

function generate(element) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value,
    }),
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalOpenAndSaveProject() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button 
        onClick={handleOpen}
        variant='contained' 
        color='secondary'
        size='large'
      >
        OPEN PROJECT
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Button>X</Button>
            
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <List>
              {generate(
                <ListItem
                  secondaryAction={
                    <>
                    <IconButton edge="end" aria-label="fileOpen">
                      <FileOpen />
                      <Save/>
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  </>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary= 'Secondary text'
                  />
                </ListItem>,
              )}
            </List>
        </Grid>
      </Grid>
    </Box>
            </Box>
      </Modal>
    </>
  );
}
export default ModalOpenAndSaveProject