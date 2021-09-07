import React from 'react';
import { ItemGroups } from '../store/todos';

const TodoItems = (props) => {
    let items = props.items;
    if(props.itemGroup === ItemGroups.SHOW_COMPLETED){
        items = props.items.filter(i=> i.completed);
    } else if(props.itemGroup === ItemGroups.SHOW_NOT_COMPLETED){
        items = props.items.filter(i=> !i.completed);
    }
    return (
        <ul className='todos'>
        {
            items.map(item =>{
                return <li key={item.id} className={`todos__item todos__item_${item.completed && 'checked'}`}>
                    <input onChange={()=>props.onToggle(item.id)} type="checkbox" data-id={item.id}
                    checked={item.completed}/>
                    {item.title}
                    </li>
            })
        }
        </ul>
    );
}

export default TodoItems;