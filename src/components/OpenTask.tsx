import { Todo } from '../App'
import IconTrash from '../assets/trash.svg'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export const OpenTask = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="flex w-full max-w-3xl items-center justify-center mb-3">
      <div
        className={`bg-base-gray-500 text-base-gray-100 rounded-lg w-full focus:outline-none resize-none p-4 flex justify-between items-start ${
          !todo.completed
            ? 'border border-base-gray-400'
            : 'border border-base-gray-500'
        }`}
      >
        <div className="flex">
          <input
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            type="checkbox"
            className="mr-4 rounded-full w-5 h-5 border-product-blue border-2 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-12 from-15 to-16 bg-base-gray-500 checked:bg-product-purpledark focus:checked:bg-product-purpledark hover:checked:bg-product-purpledark"
          />
          <p
            className={`text-sm ${
              todo.completed ? 'line-through text-base-gray-300' : ''
            }`}
          >
            {todo.text}
          </p>
        </div>
        <button>
          <img
            src={IconTrash}
            alt="Icone de lixeira"
            onClick={() => onDelete(todo.id)}
            className="w-[16px] h-[16px] max-w-none ml-4"
          />
        </button>
      </div>
    </div>
  )
}
