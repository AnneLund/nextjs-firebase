import {ListItem, ListItemText} from '@mui/material'
import moment from 'moment'

const Todo = ({ id, timestamp, title, detail} ) => {
    return(
<ListItem className="label" >

<ListItemText className="todos"
primary={title}secondary={moment(timestamp).format("MMMM do, yyyy")}
/>

</ListItem> 
      
      
    )
}

export default Todo;