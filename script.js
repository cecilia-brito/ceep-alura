const newTask = document.querySelector('[data-form-button]');
const createTask = (event) => {
    event.preventDefault() 
    const list = document.querySelector('[data-list]')
    const inputNewTask = document.querySelector('[data-form-input]');
    const valueInput = inputNewTask.value;
    console.log(valueInput); 
    const task = document.createElement('li');
    task.classList.add('task')
    const content = `<p class='content'>${valueInput}</p>`
    
    task.innerHTML = content;
    list.appendChild(task)
    valueInput = ' ';
}

newTask.addEventListener('click', createTask)