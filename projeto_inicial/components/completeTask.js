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

export default completeBtn