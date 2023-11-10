import ignitelogo from '../assets/logo-todo.svg'

export function Header() {
  return (
    <header className="flex justify-center pt-16 pb-20 bg-base-gray-700">
      <img
        src={ignitelogo}
        alt="Ignite Logo"
        className="flex justify-center h-9"
      />
    </header>
  )
}
