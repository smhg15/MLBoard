import { Box, Typography, Divider, Accordion, AccordionSummary, AccordionDetails, Chip, IconButton, ListItem, List, ListItemText, Badge } from '@mui/material';
import React from 'react';
// import { useLocation } from 'react-router-dom';//para pasar el estado con react-router-dom (F4: la información persiste, con redux no.)
import { Link } from 'react-router-dom';
import style from '../SXStyleMUIComponents';
import '../App.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import SaveIcon from '@mui/icons-material/Save';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ModalTask from '../components/ModalTask';
import { useSelector } from 'react-redux'

function Dashboard() {
  const headerProject = useSelector((state)=>state.projectTree)
  const tasks = useSelector((state)=>state.projectTree.task)
  console.log(tasks)
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
        <IconButton 
          component={Link}
          to={'/'}
          title='New Project'
          color='secondary'
        >                    
          <CreateNewFolderIcon/>
        </IconButton>
        <IconButton title='Save' color='secondary'><SaveIcon/></IconButton>
        <IconButton title='Add to Google Drive' color='secondary'><AddToDriveIcon/></IconButton>
        <IconButton title='Send by e-mail' color='secondary'><EmailIcon/></IconButton>
        <Divider 
          flexItem 
          variant='middle' 
          orientation="vertical" 
          sx={style.divider}
        />
        <ModalTask/>
      </Box>
      <Divider flexItem variant='middle' sx={style.divider}/>
      <div className='dashboardColums'>
      <Typography variant='body2' align='left'>Project tree:</Typography>
      
      </div>
      </div>
      <div className='border dashboardColums'>
        <Typography variant='h4' align='center'>BACKLOG</Typography>
        <Divider flexItem variant='middle' sx={style.divider}/>
        <List>
          {tasks.map((task, index) => {
            return (
              <>
                <ListItem
                  key={index}
                >
                <ListItemText primary={task.title} />
                <Badge badgeContent={task.sprint} color="primary" title={`Sprint: ${task.sprint}`}/>
                </ListItem>
                <Divider flexItem variant='middle'/>
              </>
            );
          })}
          </List>
      </div>
      <div className='border dashboardColums'>
        <Typography variant='h4' align='center'>TO DO</Typography>
        <Divider flexItem variant='middle' sx={style.divider}/>
      </div>
      <div className='border dashboardColums'>
        <Typography variant='h4' align='center'>ON GOING</Typography>
        <Divider flexItem variant='middle' sx={style.divider}/>
      </div>
      <div className='border dashboardColums'>
        <Typography variant='h4' align='center'>DONE</Typography>
        <Divider flexItem variant='middle' sx={style.divider}/>
      </div>
      </Box>
    )
  }
  
  export default Dashboard