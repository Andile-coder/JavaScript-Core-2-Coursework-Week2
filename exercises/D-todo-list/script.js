function clickStyle() {
  this.style.textDecoration = "line-through";
}
function unclick() {
  this.style.textDecoration = "none";
}
function todoList(todos) {
  var ul = document.createElement("ul");
  var cont = document.getElementById("content");
  for (var i = 0; i < todos.length; i++) {
    var li = document.createElement("li");
    li.textContent = todos[i].todo;
    cont.appendChild(ul).appendChild(li);
    li.addEventListener("click", clickStyle);
    li.addEventListener("dblclick", unclick);
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
