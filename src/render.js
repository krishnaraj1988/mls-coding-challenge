import { ItemGroups } from './store/todos';

function renderApp(input, radios, todoList) {
  return `<div>${input}${radios}${todoList}</div>`;
}

function renderForm() {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>
  </div>`;
}

function renderTodos(todoItems) {
  return `<ul class="todos">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${todo.completed && 'checked'}`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"${todo.completed ? ' checked' : ''}>
    ${todo.title}
  </li>`;
}

function renderRadioButtons(state){
  return `<div>
  <input type="radio" id="showAll" value="${ItemGroups.SHOW_ALL}" ${state.itemGroup === ItemGroups.SHOW_ALL && 'checked'} name="show" />
  <label for="showAll">${ItemGroups.SHOW_ALL}</label>
  <input type="radio" id="showCompleted" value="${ItemGroups.SHOW_COMPLETED}" ${state.itemGroup === ItemGroups.SHOW_COMPLETED && 'checked'} name="show" />
  <label for="showCompleted">${ItemGroups.SHOW_COMPLETED}</label>
  <input type="radio" id="showNotCompleted" value="${ItemGroups.SHOW_NOT_COMPLETED}" ${state.itemGroup === ItemGroups.SHOW_NOT_COMPLETED && 'checked'} name="show" />
  <label for="showNotCompleted">${ItemGroups.SHOW_NOT_COMPLETED}</label>
  </div>`
}

export default (element, state) => {
  //Filter items based on radio selection
  const todoItems = state.todos.map((todo)=>{
    if(state.itemGroup === ItemGroups.SHOW_COMPLETED && todo.completed ||
      state.itemGroup === ItemGroups.SHOW_NOT_COMPLETED && !todo.completed ||
      state.itemGroup === ItemGroups.SHOW_ALL){
      return renderTodoItem(todo);
    }
  }).join('');
  element.innerHTML = renderApp(
    renderForm(),
    renderRadioButtons(state),
    renderTodos(todoItems)
  );
}
