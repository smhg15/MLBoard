import React from 'react';
import { useLocation } from 'react-router-dom';


function Dashboard() {
  
  let { state } = useLocation();
  console.log(state)
    return (
      <>
      <div>
        <h2>PROYECTO</h2>
        <div>MENÚ HAMBURGUESA + NEW TASK</div>
        <div>PROJECT TREE</div>
      </div>
      <div>
        <h2>BACKLOG</h2>
      </div>
      <div>
        <h2>TO DO</h2>
      </div>
      <div>
        <h2>ON GOING</h2>
      </div>
      <div>
        <h2>DONE</h2>
      </div>
      </>
    )
  }
  
  export default Dashboard