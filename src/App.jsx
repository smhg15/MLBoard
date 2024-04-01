import CardTaskResume from "./components/CardTaskResume"
import ModalNewProject from "./components/ModalNewProject"
import ModalOpenAndSaveProject from "./components/ModalOpenAndSaveProject"
import ModalTask from "./components/ModalTask"
import Dashboard from "./views/Dashboard"
import Landing from "./views/Landing"
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from "@mui/material"

function App() {

  return (
    <div className="app">
    <Typography variant="h1">MLBOARD</Typography>
    <Landing/>
    <footer className="footer"><Typography variant="caption">#FreePlayerCodify</Typography></footer>
    </div>
  )
}

export default App