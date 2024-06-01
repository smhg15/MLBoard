import { Stack } from '@mui/material';
import React from 'react';
import ModalNewProject from '../components/ModalNewProject';
import ModalOpenAndSaveProject from '../components/ModalOpenAndSaveProject';
import BetaOpenProject from '../components/BetaOpenProject';

function Landing() {

    return (
      <Stack spacing={2}>
        <ModalNewProject/>
        {/* <ModalOpenAndSaveProject/> */}
        <BetaOpenProject/>
      </Stack>
    )
  }
  
  export default Landing