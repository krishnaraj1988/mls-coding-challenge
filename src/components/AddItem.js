import React, { useRef } from 'react';

const AddItem = (props) => {
    const inputRef = useRef();
    return (
        <div className="form">
            <input type="text" ref = {inputRef} onKeyPress={(e)=> e.key === 'Enter' && props.onAdd(e.target.value)}  data-element="addTodoInput"/>
            <button data-element="addTodoButton" onClick={()=> props.onAdd(inputRef.current.value)}>Add</button>
        </div>
    );
}

export default AddItem;