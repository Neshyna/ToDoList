const input = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");
const todoList = document.getElementById("todoList");

const addPoint = () => {
  let point = input.value;
  
  if (point === "") {  
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");

  li.textContent = point;

  todoList.append(li);

  input.value = "";
};

const deleteAllPoints = () => {
  todoList.innerHTML = "";
};

addButton.addEventListener("click", addPoint);
deleteButton.addEventListener("click", deleteAllPoints);


