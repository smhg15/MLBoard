import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import { saveAs } from "file-saver";
import { useSelector } from "react-redux";


function AddToGoogleDriveProject(){
    const jSONproject = useSelector((state)=>state.projectTree)
    const strProject = JSON.stringify(useSelector((state)=>state.projectTree))
    function saveProject(){
    const blob = new Blob([strProject], {type:'text/plain; charset=utf-8'});
        saveAs(blob,jSONproject.title,)
    }
    return(
        <Tooltip 
          title="Add to Google Drive" 
          placement='bottom' 
          arrow
          disabled
          >
        <IconButton color='secondary' disabled><AddToDriveIcon/></IconButton>
        </Tooltip>
    )
}

export default AddToGoogleDriveProject