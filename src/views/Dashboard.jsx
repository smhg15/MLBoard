import { Box, Typography, Divider, Accordion, AccordionSummary, AccordionDetails, Chip, IconButton, List, Tooltip } from '@mui/material';
import React from 'react';
// import { useLocation } from 'react-router-dom';//para pasar el estado con react-router-dom (F4: la información persiste, con redux no.)
import { Link } from 'react-router-dom';
import style from '../SXStyleMUIComponents';
import '../App.css';
import { useSelector } from 'react-redux'
import ModalTask from '../components/ModalTask';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import SaveIcon from '@mui/icons-material/Save';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CardTaskResume from '../components/CardTaskResume';
import ProjectTree from '../components/ProjectTree';

function Dashboard() {
  const headerProject = useSelector((state)=>state.projectTree)
  const tasks = useSelector((state)=>state.projectTree.tasks)
  // let { state } = useLocation();//para pasar el estado con react-router-dom
    return (
      <Box sx={[style.dashboardBox, style.border]}>
      <div className='border dashboardColums'>
      <Accordion variant='elevation'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
        >
          <Typography variant='h4'>{headerProject.title}</Typography>
        </AccordionSummary>
        <AccordionDetails >
          {headerProject.description}
          <Divider variant='middle' sx={style.divider}/>
          <Typography variant="body2" sx={style.divider}>
            Project Users:
          </Typography>
          {headerProject.users.map((user, index) => <Chip  key={index}
                                              label={user}
                                              color='secondary'
                                              size='small'>
                                            </Chip>)}
        </AccordionDetails>
      </Accordion>
      <Box
      sx={[style.buttonGroupBox, style.divider]}
      >
        <Tooltip 
          title="New Project" 
          placement='bottom' 
          arrow
        >
        <IconButton 
          component={Link}
          to={'/'}
          color='secondary'
        >                    
          <CreateNewFolderIcon/>
        </IconButton>
        </Tooltip>
        <Tooltip 
          title="Save" 
          placement='bottom' 
          arrow
        >
        <IconButton color='secondary'><SaveIcon/></IconButton>
        </Tooltip>
        <Tooltip 
          title="Add to Google Drive" 
          placement='bottom' 
          arrow
        >
        <IconButton color='secondary'><AddToDriveIcon/></IconButton>
        </Tooltip>
        <Tooltip 
          title="Send by e-mail" 
          placement='bottom' 
          arrow
        >
        <IconButton color='secondary'><EmailIcon/></IconButton>
        </Tooltip>
        <Divider 
          flexItem 
          variant='middle' 
          orientation="vertical" 
          sx={style.divider}
        />
        <ModalTask/>
      </Box>
      <Divider flexItem variant='middle' sx={style.divider}/>
      <Typography variant='body2' align='left'>Project tree:</Typography>
      <div className='dashboardColums overflow'>
      <ProjectTree data={tasks}/>
      </div>
      </div>
      <div className='border dashboardColums'>
        <Typography variant='h4' align='center'>BACKLOG</Typography>
        <Divider flexItem variant='middle' sx={style.divider}/>
        <List sx={style.overflow}>
          {tasks.map((task, index) => {
            if (task.status =='backlog')
            return (<CardTaskResume key={index} task={task} index={index}/>);
          })}
          </List>
      </div>
      <div className='border dashboardColums'>
        <Typography variant='h4' align='center'>TO DO</Typography>
        <Divider flexItem variant='middle' sx={style.divider}/>
        <List sx={style.overflow}>
          {tasks.map((task, index) => {
            if (task.status =='todo')
            return (<CardTaskResume key={index} task={task} index={index}/>);
          })}
          </List>
      </div>
      <div className='border dashboardColums'>
        <Typography variant='h4' align='center'>ON GOING</Typography>
        <Divider flexItem variant='middle' sx={style.divider}/>
        <List sx={style.overflow}>
          {tasks.map((task, index) => {
            if (task.status =='ongoing')
            return (<CardTaskResume key={index} task={task} index={index}/>);
          })}
          </List>
      </div>
      <div className='border dashboardColums'>
        <Typography variant='h4' align='center'>DONE</Typography>
        <Divider flexItem variant='middle' sx={style.divider}/>
        <List sx={style.overflow}>
          {tasks.map((task, index) => {
            if (task.status =='done')
            return (<CardTaskResume key={index} task={task} index={index}/>);
          })}
          </List>
      </div>
      </Box>
    )
  }
  
  export default Dashboard