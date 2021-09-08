import React from 'react';
import * as todoActions from '../store/todoActions';
import { connect } from 'react-redux';
import AddItem from './AddItem';
import Filters from './Filters';
import TodoItems from './TodoItems';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    container: {
      width: '400px',
      margin: '0 auto'
    },
    header: {
        padding: '10px',
        fontWeight: 'bold',
        fontSize: '20px'
    }
  });

const App = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <header className={classes.header}>Todo App</header>
            <AddItem {...props}/>
            <Filters {...props}/>
            <TodoItems {...props}/>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: value => dispatch(todoActions.add(value)),
        onToggle: id => dispatch(todoActions.toggle(id)),
        onShow: option => dispatch(todoActions.show(option)),
    }
};
const mapStateToProps = (state) =>{
    return {
        itemGroup: state.itemGroup,
        items: state.todos
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);