import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import { saveAs } from "file-saver";
import { useSelector } from "react-redux";

function SaveProject(){
    const jSONproject = useSelector((state)=>state.projectTree)
    const strProject = JSON.stringify(useSelector((state)=>state.projectTree))
    function saveProject(){
    const blob = new Blob([strProject], {type:'text/plain; charset=utf-8'});
        saveAs(blob,jSONproject.title,)
    }
    return(
        <Tooltip 
          title="Save" 
          placement='bottom' 
          arrow
          
        >
        <IconButton color='secondary' onClick={saveProject}><SaveIcon/></IconButton>
        </Tooltip>
    )
}

export default SaveProject