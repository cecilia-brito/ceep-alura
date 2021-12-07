(() =>{
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
        task.appendChild(completeBtn())
        valueInput = ' ';
    }

    newTask.addEventListener('click', createTask)

    const completeBtn = () =>{
        const completeButton = document.createElement('button')
        completeButton.classList.add('check-button')
        completeButton.innerText = "concluir"
        completeButton.addEventListener('click', completeTask)

        return completeButton;
    }

    const completeTask = (event) => {
    const btnCompleteFunction = event.target
    const taskComplete = btnCompleteFunction.parentElement;

    taskComplete.classList.toggle('done')
    }
})()