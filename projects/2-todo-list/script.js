/*function lineThrough() {
  this.parentElement.parentElement.style.textDecoration = "line-through";
}
*/
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = todos[i].task;
    let iCheck = document.createElement("i");
    let iTrash = document.createElement("i");
    iCheck.className = "fa fa-check";
    iTrash.className = "fa fa-trash";
    iCheck.setAttribute("aria-hidden", "true");
    iTrash.setAttribute("aria-hidden", "true");
    span.appendChild(iCheck);
    span.appendChild(iTrash);
    li.appendChild(span);
    list.appendChild(li);
    iCheck.addEventListener("click", function () {
      let parent = iCheck.parentElement;
      let grandParent = parent.parentElement;
      grandParent.style.textDecoration = "line-through";
    });
    iTrash.addEventListener("click", function () {
      let parent1 = iTrash.parentElement;
      let grandParent2 = parent1.parentElement;
      list.removeChild(grandParent2);
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputVal = document.getElementById("todoInput");
  let todoEL = { task: inputVal.value, completed: false };
  todos.push(todoEL);
  populateTodoList([todoEL]);
}
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
