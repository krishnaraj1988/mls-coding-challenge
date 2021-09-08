import React from 'react';
import { ItemGroups } from '../store/todos';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        padding: '5px'
    }
  });
const Filters = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <input type="radio" id="showAll" value={ItemGroups.SHOW_ALL} checked  name="show"
            onChange={(e)=> props.onShow(e.target.value)} checked={props.itemGroup === ItemGroups.SHOW_ALL} />
            <label htmlFor="showAll">{ItemGroups.SHOW_ALL}</label>
            <input type="radio" id="showCompleted" value={ItemGroups.SHOW_COMPLETED} name="show" 
            onChange={(e)=> props.onShow(e.target.value)} checked={props.itemGroup === ItemGroups.SHOW_COMPLETED}/>
            <label htmlFor="showCompleted">{ItemGroups.SHOW_COMPLETED}</label>
            <input type="radio" id="showNotCompleted" value={ItemGroups.SHOW_NOT_COMPLETED} name="show" 
            onChange={(e)=> props.onShow(e.target.value)} checked={props.itemGroup === ItemGroups.SHOW_NOT_COMPLETED}/>
            <label htmlFor="showNotCompleted">{ItemGroups.SHOW_NOT_COMPLETED}</label>
        </div>
    );
}

export default Filters;