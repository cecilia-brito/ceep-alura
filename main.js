   import completeBtn from './projeto_inicial/components/completeTask.js'
   import BtnDelete from './projeto_inicial/components/deleteTask.js'
   
   const newTask = document.querySelector('[data-form-button]');
    const createTask = (event) => {
        event.preventDefault() 
        const list = document.querySelector('[data-list]')
        const inputNewTask = document.querySelector('[data-form-input]');
        let valueInput = inputNewTask.value;
        const task = document.createElement('li');
        task.classList.add('task')
        const content = `<p class='content'>${valueInput}</p>`
        
        task.innerHTML = content;
        list.appendChild(task)
        task.appendChild(completeBtn())
        task.appendChild(BtnDelete())
        valueInput = ' ';
    }

    newTask.addEventListener('click', createTask)