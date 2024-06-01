import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import { saveAs } from "file-saver";
import { useSelector } from "react-redux";


function SendByEmailProject(){
    const jSONproject = useSelector((state)=>state.projectTree)
    const strProject = JSON.stringify(useSelector((state)=>state.projectTree))
    function saveProject(){
    const blob = new Blob([strProject], {type:'text/plain; charset=utf-8'});
        saveAs(blob,jSONproject.title,)
    }
    return(
        <Tooltip 
          title="Send by e-mail" 
          placement='bottom' 
          arrow
          disabled
        >
        <IconButton color='secondary' disabled><EmailIcon/></IconButton>
        </Tooltip>
    )
}

export default SendByEmailProject