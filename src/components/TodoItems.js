import React from 'react';
import { ItemGroups } from '../store/todos';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    todoItem: {
        margin: '8px 0',
        background: '#EEF0F1',
        padding: '10px',
        borderRadius: '5px'
    },
    checkbox: {
        marginRight: '10px'
    },
    todos: {
        listStyleType: 'none',
        padding: 0,
        margin: 0
    }
});

const TodoItems = (props) => {
    let items = props.items;
    if(props.itemGroup === ItemGroups.SHOW_COMPLETED){
        items = props.items.filter(i=> i.completed);
    } else if(props.itemGroup === ItemGroups.SHOW_NOT_COMPLETED){
        items = props.items.filter(i=> !i.completed);
    }
    const classes = useStyles();
    return (
        <ul className={classes.todos}>
        {
            items.map(item =>{
                return (
                <li key={item.id} className={classes.todoItem}>
                    <input 
                        onChange={()=>props.onToggle(item.id)} 
                        type="checkbox" 
                        data-id={item.id}
                        checked={item.completed}
                        className={classes.checkbox}
                    />
                    {item.title}
                </li>
                );
            })
        }
        </ul>
    );
}

export default TodoItems;