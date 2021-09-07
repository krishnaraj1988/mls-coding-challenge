import React from 'react';
import * as todoActions from '../store/todoActions';
import { connect } from 'react-redux';
import AddItem from './AddItem';
import Filters from './Filters';
import TodoItems from './TodoItems';

const App = (props) => {
    return (
        <div>
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