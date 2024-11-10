//* cazo el inputMain para obtener el texto

let todos = [
    
]
console.log(todos);

const inputMain = document.querySelector('.inputMain')
const todoList = document.querySelector('.todo-list')
const removeX = document.createElement('img')
const checkDiv = document.createElement('div')

console.log(inputMain)

inputMain.addEventListener('keydown', (event) => {
    const target = event.target;
    if (event.key === 'Enter') {
      const inputValue = target.value; 
      console.log(inputValue); 
      todos.push(inputValue)
      target.value= ''
      const listItem = document.createElement('li')
      listItem.className = ' flex justify-around text-2xl text-cyan-500 bg-todo-Very-Dark-Grayish-Blue'
      for (let todo of todos){
          listItem.innerHTML = todo
          todoList.prepend(listItem)
      }
    }
  });
  