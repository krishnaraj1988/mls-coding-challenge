import { fromJS } from "immutable";

const uniqueId = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  }
};

export const ItemGroups = Object.freeze({
  SHOW_ALL: "Show All",
  SHOW_COMPLETED: "Show Completed",
  SHOW_NOT_COMPLETED: "Show Not Completed"
});

export const initialState = fromJS({
  todos: [
    {
      id: uniqueId.get(),
      title: 'JS-101',
      completed: true
    },
    {
      id: uniqueId.get(),
      title: 'JS-102',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-201',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-202',
      completed: false
    }
  ],
  itemGroup: ItemGroups.SHOW_ALL
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      const todos = state.get('todos').toJS();
      return state.set('todos', fromJS([...todos, {
        id: uniqueId.get(),
        title: action.title,
        completed: false
      }]));
    case 'TOGGLE':
      const index = state.get('todos').findIndex(item => item.get('id') === action.id);
      return  state.updateIn(['todos', index, 'completed'], value => !value);
    case 'SHOW':
      return state.set('itemGroup', action.option);
    default:
      return state;
  }
}
