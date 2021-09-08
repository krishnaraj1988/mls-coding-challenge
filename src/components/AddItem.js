import React, { useRef } from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        padding: '8px'
    },
    addButton: {
      color: 'green',
      padding: '10px',
      background: '#339cff',
      color: 'white',
      border: 'none',
      marginLeft: '5px',
      minWidth: '75px',
      borderRadius: '5px',
      '&:hover': {
        backgroundColor: '#4095c6'
    },
    },
    textbox: {
        height: '12px',
        border: '1px solid #339cff',
        padding: '10px',
        borderRadius: '5px'
    }
  });

const AddItem = (props) => {
    const inputRef = useRef();
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <input 
                type="text" 
                ref = {inputRef} 
                onKeyPress={(e)=> {
                    if(e.key === 'Enter' && e.target.value !== ''){
                        props.onAdd(e.target.value);
                        inputRef.current.value = '';
                    }
                }}
                placeholder='Add your new todo' 
                className = {classes.textbox} 
            />
            <button 
                className={classes.addButton} 
                data-element="addTodoButton" 
                onClick={()=> {
                    if(inputRef.current.value !== '') {
                        props.onAdd(inputRef.current.value);
                        inputRef.current.value = '';
                    }
                }}
            >
                Add
            </button>
        </div>
    );
}

export default AddItem;