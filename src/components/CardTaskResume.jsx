import * as React from 'react';
import style from '../SXStyleMUIComponents';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Tooltip } from '@mui/material';
import ModalTask from './ModalTask';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StatusSelect from './StatusSelect'


function CardTaskResume({task, index}) {
  return (
    
    <Accordion variant='elevation'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon/>}
    >
      {task.sprint !=''?<Chip label={task.sprint} color='primary' size='small'/>:''}
      <Divider
        flexItem 
        variant='middle' 
        orientation="vertical" 
        sx={style.divider}
      />
      <Tooltip 
        title={task.keyWords.join(', ')}
        placement='top' 
        arrow
      >
      <Typography variant='body1'>{task.title}</Typography>
      </Tooltip>
    </AccordionSummary>
    <AccordionDetails >
      {task.task}
      <Divider variant='middle' sx={style.divider}/>
      <Typography variant="body2" sx={style.divider}>
      Task assigned to:
      </Typography>
      {task.user !=''?<Chip label={task.user} color='secondary' size='small'/>:'- not assigned -'}
      <div className='endAlignButton'>
      <StatusSelect indexTask={index}/>
      <ModalTask indexTask={index}/>
      </div>
    </AccordionDetails>
  </Accordion>
  );
}
export default CardTaskResume