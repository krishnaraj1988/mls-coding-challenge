import store from './store';
import * as todoActions from './store/todoActions';

function addListener(eventName, selector, callback) {
  document.body.addEventListener(eventName, e => {
    if (e.target.matches(selector)) {
      return callback(e);
    }
  });
}

addListener('click', '[data-element="addTodoButton"]', () => {
  const todoInput = document.querySelector('[data-element="addTodoInput"]');
  store.dispatch(todoActions.add(todoInput.value));
});

addListener('click', '[data-element="toggleTodo"]', e => {
  const id = Number(e.target.dataset.id);
  store.dispatch(todoActions.toggle(id));
});

//Handle keypress event to add items on pressing enter key
addListener('keypress', '[data-element="addTodoInput"]', (e) => {
  if(e.key === 'Enter'){
    const todoInput = e.target;
    store.dispatch(todoActions.add(todoInput.value));
  }
});

//Handle radio button click event to show selected, not selected or all items
addListener('click', 'input[name="show"]', (e) => {
  const todoInput = e.target;
  store.dispatch(todoActions.show(todoInput.value));
});