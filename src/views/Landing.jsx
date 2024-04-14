import { Stack } from '@mui/material';
import React from 'react';
import ModalNewProject from '../components/ModalNewProject';
import ModalOpenAndSaveProject from '../components/ModalOpenAndSaveProject';

function Landing() {

    return (
      <Stack spacing={2}>
        <ModalNewProject/>
        <ModalOpenAndSaveProject/>
      </Stack>
    )
  }
  
  export default Landing