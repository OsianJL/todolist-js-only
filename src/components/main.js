//* cazo el inputMain para obtener el texto

let todos = [];
let todoID = 0;

const taskCount = document.querySelector(".task-count")
const inputMain = document.querySelector(".inputMain");
const todoList = document.querySelector(".todo-list");
const removeX = document.createElement("img");
const checkDiv = document.createElement("div");


function updateTaskCount() {
  taskCount.textContent = `${todos.length} items left`;
}

inputMain.addEventListener("keydown", (event) => {
  const target = event.target;

  if (event.key === "Enter") {
    const inputValue = target.value;
    console.log(inputValue);
    todoID++;
    let todoObject = {
      id: todoID,
      task: inputValue,
      isCompleted: false,
    };
    todos.push(todoObject);
    target.value = "";
    updateTaskCount();

    const listItem = document.createElement("li");
    listItem.className =
      "itemDiv bg-todo-Very-Dark-Grayish-Blue flex justify-between p-3 border-b border-white";

    const itemLeft = document.createElement("div");
    itemLeft.className = "flex p-1 gap-4 w-[80%]";

    const circleIcon = document.createElement("div");
    circleIcon.className =
      "circleIcon border-2 border-todo-Dark-Grayish-Blue hover:border-purple-600 rounded-full w-6 cursor-pointer";

    const itemText = document.createElement("h2");
    itemText.className = "text-white";

    const itemRight = document.createElement("div");
    itemRight.className = "flex items-center";

    const crossIcon = document.createElement("img");
    crossIcon.src = "/images/icon-cross.svg";
    crossIcon.alt = "cross icon";
    crossIcon.className = "crossIcon w-6 h-6 cursor-pointer";

    circleIcon.dataset.id = todoObject.id;
    crossIcon.dataset.id = todoObject.id;

    crossIcon.addEventListener("click", (event) => {
      const todoItem = event.target.parentElement.parentElement;

      if (event.target.classList.contains("crossIcon")) {
        todoItem.remove();
      }

      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === parseInt(event.target.dataset.id)) {
          todos.splice(i, 1);
          break;
        }
      }
      updateTaskCount()
    });

    circleIcon.addEventListener("click", (event) => {
      if (event.currentTarget.classList.contains("circleIcon")) {
        circleIcon.classList.toggle("bg-gradient-to-r");
        circleIcon.classList.toggle("from-purple-600");
        circleIcon.classList.toggle("to-blue-600");               
        circleIcon.nextSibling.classList.toggle("line-through");

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

      }

      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === parseInt(event.target.dataset.id)) {
          todos[i].isCompleted = !todos[i].isCompleted;
          break;
        }
      }
    });

    for (let todo of todos) {
      itemText.innerHTML = todo.task;
      itemText.classList.add('cursor-pointer')
      itemRight.appendChild(crossIcon);

      itemLeft.appendChild(circleIcon);
      itemLeft.appendChild(itemText);

      listItem.appendChild(itemLeft);
      listItem.appendChild(itemRight);
      todoList.prepend(listItem);
    }
  }
});

updateTaskCount()
