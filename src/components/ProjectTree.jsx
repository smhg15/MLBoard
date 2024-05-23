import React from "react";
import { useSelector } from 'react-redux'
import {Divider, Tooltip, Typography } from "@mui/material";
import style from "../SXStyleMUIComponents";
import IconStatus from "../commons/iconStatus";

function ProjectTree({data}){
    const groupedByKey = data.reduce((acc, obj) => {
    const { sprint } = obj;
    if (!acc[sprint]) {
      acc[sprint] = [];
    }
    acc[sprint].push(obj);
    return acc;x
  }, {});
  
  // Convert the grouped object into an array of arrays
  const reorderedTasks = Object.values(groupedByKey);
return (
  <>
  {reorderedTasks.map((keyTasks) => (
    <>
      <Typography variant="body2" sx={style.treeSprint}>
      Sprint {keyTasks[0].sprint==''?'- not assigned -':keyTasks[0].sprint}
      </Typography>
      {keyTasks.map((task) => (
        <div className='endAlignButton'>         
        <Tooltip title={task.keyWords.join(', ')}> 
        <Typography variant="body2" sx={style.treeTask}>
          {task.title}
        </Typography>
        </Tooltip>
        <Divider 
        flexItem 
        variant='middle' 
        orientation="vertical" 
        sx={style.divider}
      />
        <IconStatus status={task.status}/>
        </div>
      ))}
    </>
  ))}
  </>
);
}

export default ProjectTree;