import { Header } from './components/Header.tsx'
import { InputAdd } from './components/InputAdd.tsx'
import { OpenTask } from './components/OpenTask.tsx'

import clipboard from './assets/clipboard.svg'
import { useState } from 'react'

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleCreateNewToDo(todoText: string) {
    const newTodo: Todo = {
      id: Math.random(),
      text: todoText,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  function handleTodoDelete(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function handleTodoComplete(id: number) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    )
  }

  return (
    <div className="flex flex-col justify-center mb-80">
      <Header />

      <div className="-mt-6 flex flex-col items-center">
        <InputAdd onSubmit={handleCreateNewToDo} />
        <div className="max-w-3xl w-full">
          <div className="flex justify-between mt-16 mb-6">
            <div>
              <strong className="text-product-blue">Tarefas criadas</strong>
              <span className="rounded-full ml-2 bg-base-gray-400 text-base-gray-200 py-0.5 px-2">
                {todos.length}
              </span>
            </div>
            <div>
              <strong className="text-product-purple">Concluídas</strong>
              <span className="rounded-full ml-2 bg-base-gray-400 text-base-gray-200 py-0.5 px-2">
                {todos.filter((todo) => todo.completed).length} de{' '}
                {todos.length}
              </span>
            </div>
          </div>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <OpenTask
                key={todo.id}
                todo={todo}
                onDelete={handleTodoDelete}
                onToggle={handleTodoComplete}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center border-t border-base-gray-400 rounded mt-6">
              <span className="mt-16">
                <img src={clipboard} alt="clipboard" />
              </span>
              <span className="mt-4 flex flex-col items-center">
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
