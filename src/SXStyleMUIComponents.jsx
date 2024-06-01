
// This file includes all the additional styles ('sx' styles) added on MUI components

import { HowToVoteRounded } from "@mui/icons-material";

// Classes are sorted alphabetically
const style = {
    dashboardBox: {
      /*CONTAINER*/
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor:'#ce93d871',
      position: 'absolute',
      /*CONTENT*/
      display: 'flex',
      justifyContent: 'space-between',
    },
    border:{
      border:'solid 2px #000000',
      borderRadius: '10px',
      padding: '1%',
    },
    box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    buttonGroupBox: {
      display: 'flex',      
      justifyContent:'space-between',
      width: '95%',
    },
    buttomX: {
      position: 'absolute',
      top: '2%',
      right: '0%',
    },
    divider: {
      margin: '2%',
    },
    overflow: {
      overflow: 'auto',
      height: '90%',
      '&::-webkit-scrollbar': {
        width: '7px',
        backgroundColor: '#fafafa',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ce93d871',
        border: 'solid 1px #fafafa'
      }
    },
    treeSprint:{
      padding:'2%',
      width:'100%',
      backgroundColor:'#ce93d871'
    },
    treeTask:{
      padding:'0 10% 2% 5%',
      width:'100%',
      backgroundColor:'#fafafa',      
    },
  };

  export default style