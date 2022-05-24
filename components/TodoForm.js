import {Button, TextField} from '@mui/material'
import {serverTimestamp, addDoc, collection } from 'firebase/firestore'
import {useState} from 'react'
import {useContext} from 'react'
import {db} from '../firebase'
import {TodoContext} from '../pages/TodoContext'

const TodoForm = () => {
    const [todo, setTodo] = useState({title: '', detail: ''})
    const {showAlert} = useContext(TodoContext)
    const onSubmit = async () => {
     const collectionRef = collection(db, "todos")
     const docRef = await addDoc(collectionRef, {...todo, timestamp:
    serverTimestamp()}) 
    setTodo({ title: '', detail: ''}) 
    showAlert('success', `Todo med id ${docRef.id} er tilføjet!`)
    }
    
    return(
        <form>
            {/* <pre>{JSON.stringify(todo)}</pre> */}
            <TextField 
            label="title" 
            value={todo.title}
            onChange={event => setTodo({...todo, title: event.target.value})}
            />
            <TextField 
            label="detail" 
            value={todo.detail}
            onChange={event => setTodo({...todo, detail: event.target.value})}
            />
            <Button onClick={onSubmit} variant="contained">Tilføj ny ToDo</Button>
        </form>
    )
}

export default TodoForm;