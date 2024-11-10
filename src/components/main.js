//* cazo el inputMain para obtener el texto

let todos = [{}];
console.log(todos);
let todoID = 0;

const inputMain = document.querySelector(".inputMain");
const todoList = document.querySelector(".todo-list");
const removeX = document.createElement("img");
const checkDiv = document.createElement("div");

console.log(inputMain);

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

    const listItem = document.createElement("li");
    listItem.className =
      "itemDiv bg-todo-Very-Dark-Grayish-Blue flex justify-between p-3 border-b border-white";

    const itemLeft = document.createElement("div");
    itemLeft.className = "flex p-1 gap-4 w-[80%]";

    const circleIcon = document.createElement("div");
    circleIcon.className =
      "circleIcon border-2 border-todo-Dark-Grayish-Blue rounded-full w-6 cursor-pointer";

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
    });

    circleIcon.addEventListener("click", (event) => {
      if (event.target.classList.contains("circleIcon")) {
        circleIcon.classList.add("bg-green-500");
        circleIcon.nextSibling.classList.add("line-through");
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

      itemRight.appendChild(crossIcon);

      itemLeft.appendChild(circleIcon);
      itemLeft.appendChild(itemText);

      listItem.appendChild(itemLeft);
      listItem.appendChild(itemRight);
      todoList.prepend(listItem);
    }
  }
});
