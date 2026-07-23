let todoList = [];
let todoList2 = [];
render_todo();

function add_todo(){
  const input = document.querySelector('.name-input-js');

  const value = input.value;
  todoList.push(value);
  console.log(todoList);

  input.value = '';
}


function render_todo(){
  let todoListHTML = '';

  for(let i = 0; i < todoList2.length; i++){
    const todo = todoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);
  document.querySelector('.todo-list-js')
    .innerHTML = todoListHTML;

}


function add_todo2(){
  const input = document.querySelector('.name2-input-js');

  const value = input.value;
  todoList2.push(value);
  

  input.value = '';
  render_todo();

}