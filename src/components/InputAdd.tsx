import { ChangeEvent, FormEvent, useState } from "react"
import { PlusCircle } from "@phosphor-icons/react";

export function InputAdd() {

const [newTaskText, setNewTaskText] = useState('')

function handleCreateNewToDo(event: FormEvent) {
  event.preventDefault()


}

function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
  event.target.setCustomValidity('')
  setNewTaskText(event.target.value)

}

const isNewTaskTextEmpty = newTaskText.length === 0


  return(

      <form onSubmit={handleCreateNewToDo} className="flex w-full max-w-3xl items-center justify-center">
        
        <input 
        name="task" 
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        required
        className="bg-base-gray-500 text-base-gray-300 border border-base-gray-700 rounded-lg items-center w-full focus:outline-none resize-none p-4"
        />
        <footer>
          <button className="bg-product-bluedark text-base-gray-100 flex items-center p-4 ml-2 rounded-lg focus:outline-none" type="submit" disabled={isNewTaskTextEmpty}>
            <strong className="mr-2">Criar</strong>
            <PlusCircle size={24} />
            </button>
        </footer>
      </form>

  )
}
