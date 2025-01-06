const input = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
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

addButton.addEventListener("click", addPoint);


