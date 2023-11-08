import { ChangeEvent, FormEvent, useState } from "react"

export function InputAdd() {

const [newTaskText, setNewTaskText] = useState('')

function handleCreateNewToDo(event: FormEvent) {
  event.preventDefault()


}

function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
  event.target.setCustomValidity('')
  setNewTaskText(event.target.value)

}

const isNewTaskTextEmpty = newTaskText.length === 0


  return(

      <form onSubmit={handleCreateNewToDo} className="flex items-center justify-center">
        
        <textarea 
        name="task" 
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        required
        />
        <footer>
          <button type="submit" disabled={isNewTaskTextEmpty}>
            Publicar
            </button>
        </footer>
      </form>

  )
}
