import React, { useRef, useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { openProject } from '../store/stateSlice';
import '../App.css';



function BetaOpenProject(){
  const dispatch = useDispatch()
  const [buttonlabel, setButtonLabel] = useState('Add File')
  
  // Función para manejar la selección de archivos
  const handleFileChange = (event) => {
    const fileReader= new FileReader();
    const file = event.target.files[0];
    fileReader.readAsText(file)
    fileReader.onload = () => {
      const result=JSON.parse(fileReader.result)
      setButtonLabel(result.title)
      dispatch(openProject(result))
    }
    fileReader.onerror = () => {
      console.log(fileReader.error);
    }

  };

  return (
    <div>
      <label className='button'>
        {buttonlabel}
      <input
        type="file"
        className='hidden'
        onChange={handleFileChange}
        
        />
      </label>
      <Button 
        variant='contained'
        color='secondary'
        size='small'
        component={Link}
        to={'/dashboard'}
        disabled={buttonlabel=='Add File'?true:false}>
        Open Project
      </Button>
    </div>
  );
};

export default BetaOpenProject;