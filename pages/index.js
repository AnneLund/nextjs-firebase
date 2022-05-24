import { Container, Snackbar, Alert} from '@mui/material'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import {useState} from 'react'
import {TodoContext} from '../pages/TodoContext'


export default function Home() {
  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("succes")
  const [alertMessage, setAlertMessage] = useState("")
const showAlert = (type, msg) => {
  setAlertType(type);
  setAlertMessage(msg);
  setOpen(true);
}

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false)
}

  return (
    <TodoContext.Provider value={{showAlert}}>
<Container className="container">
  <TodoForm/> 
    <Snackbar
    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} 
    open={open} 
    autoHideDuration={6000} 
    onClose={handleClose}>
      <Alert 
      onClose={handleClose} 
      severity={alertType}>
      {alertMessage}
      </Alert>
    </Snackbar>
      <TodoList/>
</Container>
</TodoContext.Provider>
  )
}
