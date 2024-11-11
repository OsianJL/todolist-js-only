let todos = [];
let todoID = 0;

const taskCount = document.querySelector(".task-count");
const inputMain = document.querySelector(".inputMain");
const todoList = document.querySelector(".todo-list");

function updateTaskCount() {
  taskCount.textContent = `${todos.length} items left`;
}

// Función para renderizar la lista de todos
function renderTodos(filteredTodos = todos) {
  todoList.innerHTML = ""; // Limpiar la lista antes de renderizar
  filteredTodos.forEach((todo) => {
    const listItem = createTodoElement(todo);
    todoList.appendChild(listItem);
  });
}

// Función para crear un elemento de todo
function createTodoElement(todo) {
  const listItem = document.createElement("li");
  listItem.className = "itemDiv bg-todo-Very-Dark-Grayish-Blue flex justify-between p-3 border-b border-white";

  const itemLeft = document.createElement("div");
  itemLeft.className = "flex p-1 gap-4 w-[80%]";

  const circleIcon = document.createElement("div");
  circleIcon.className = "circleIcon border-2 border-todo-Dark-Grayish-Blue hover:border-purple-600 rounded-full w-6 cursor-pointer";
  circleIcon.dataset.id = todo.id;

  const itemText = document.createElement("h2");
  itemText.className = "text-white cursor-pointer";
  itemText.textContent = todo.task;

  const itemRight = document.createElement("div");
  itemRight.className = "flex items-center";

  const crossIcon = document.createElement("img");
  crossIcon.src = "/images/icon-cross.svg";
  crossIcon.alt = "cross icon";
  crossIcon.className = "crossIcon w-6 h-6 cursor-pointer";
  crossIcon.dataset.id = todo.id;

  // EventListener para completar el todo
  circleIcon.addEventListener("click", () => toggleComplete(todo.id, circleIcon, itemText));

  // EventListener para eliminar el todo
  crossIcon.addEventListener("click", () => removeTodo(todo.id));

  // Construir la estructura del todo
  itemLeft.appendChild(circleIcon);
  itemLeft.appendChild(itemText);
  itemRight.appendChild(crossIcon);
  listItem.appendChild(itemLeft);
  listItem.appendChild(itemRight);

  return listItem;
}

// Función para alternar el estado de completado de un todo
function toggleComplete(id, circleIcon, itemText) {
  const todo = todos.find(todo => todo.id === id);
  if (!todo) return;

  todo.isCompleted = !todo.isCompleted;

  circleIcon.classList.toggle("bg-gradient-to-r");
  circleIcon.classList.toggle("from-purple-600");
  circleIcon.classList.toggle("to-blue-600");
  itemText.classList.toggle("line-through");

  let icon = circleIcon.querySelector("img"); 
  if (icon) {
    icon.remove();
  } else {
    icon = document.createElement("img");
    icon.src = "images/icon-check.svg"; 
    icon.alt = "Check icon";
    icon.classList.add("w-3", "h-3");
    circleIcon.classList.add("flex", "items-center", "justify-center"); 
    circleIcon.appendChild(icon); 
  }

  updateTaskCount();
}

// Función para añadir un nuevo todo
function addTodo(task) {
  todoID++;
  const todoObject = {
    id: todoID,
    task: task,
    isCompleted: false,
  };
  todos.push(todoObject);
  updateTaskCount();
  renderTodos();
}

// Función para eliminar un todo
function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  updateTaskCount();
  renderTodos();
}

// Funciones para filtrar los todos
function filterTodos(filter) {
  if (filter === "completed") {
    renderTodos(todos.filter(todo => todo.isCompleted));
  } else if (filter === "notCompleted") {
    renderTodos(todos.filter(todo => !todo.isCompleted));
  } else {
    renderTodos(todos);
  }
}

// EventListener para el input de añadir un todo
inputMain.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && inputMain.value.trim() !== "") {
    addTodo(inputMain.value.trim());
    inputMain.value = ""; // Limpiar el input después de añadir
  }
});

// Llamada inicial para renderizar y actualizar el contador
updateTaskCount();
renderTodos();
