import React from 'react';
import SourceIcon from '@mui/icons-material/Source';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';


function IconStatus({status}) {
    let icon
  switch (status) {
      case 'todo':
          icon= <AssignmentIndIcon color='primary'/>
          break
      case 'ongoing':
          icon= <EngineeringIcon color='primary'/>
          break
      case 'done':
          icon= <AssignmentTurnedInIcon color='success'/>
          break
      default:
          icon= <SourceIcon color='primary'/>
  }
  return icon
}

export default IconStatus;