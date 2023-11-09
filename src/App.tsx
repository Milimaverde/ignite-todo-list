import { Header } from "./components/Header.tsx";
import { InputAdd } from "./components/InputAdd.tsx";
import clipboard from './assets/clipboard.svg';


export function App() {

  return (

    <div className="flex flex-col justify-center mb-80">
      <Header />

      <div className="-mt-6 flex flex-col items-center">
        <InputAdd />
        <div className="max-w-3xl w-full">
          <div className="flex justify-between mt-16">
            <div>
              <strong className="text-product-blue">Tarefas criadas</strong>
                <span className="rounded-full ml-2 bg-base-gray-400 text-base-gray-200 py-0.5 px-2">1</span>
              
            </div>
            <div>
              <strong className="text-product-purple">Concluídas</strong>
                <span className="rounded-full ml-2 bg-base-gray-400 text-base-gray-200 py-0.5 px-2">1</span>
              
            </div>
          </div>
          <div className="flex flex-col justify-center items-center border-t border-base-gray-400 rounded mt-6">
            <span className="mt-16">
              <img src={clipboard} alt="clipboard" />
            </span>
            <span className="mt-4 flex flex-col items-center">
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </span>
          </div>
        </div>
      </div>
    </div>


  )
}

