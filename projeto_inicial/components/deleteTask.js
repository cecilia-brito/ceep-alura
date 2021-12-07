const BtnDelete = () =>{
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'deletar'
    
    deleteButton.addEventListener('click', deleteTask)

    return deleteButton
  }

  const deleteTask = (event) =>{
      const deleteButton = event.target

      const taskComplete = deleteButton.parentElement

      taskComplete.remove()

      return deleteButton
  }

 export default BtnDelete