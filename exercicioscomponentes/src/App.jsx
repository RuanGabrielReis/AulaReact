import Exemplo1 from "./Componentes/Exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"

export default function App() {
  return (
    <div>
      <h1>Exercícios de Componentes</h1>

      <h3>Chamada para o Exemplo1</h3>
      <Exemplo1 numero1={8} numero2={2}/>

      <h3>Chamada para o Exercicio 1</h3>
      <Exercicio1 fahren={33}/>

      <h3>Chamada para o Exercicio 2</h3>
      <Exercicio2 peso={55} altura={1.65}/>

    </div>
  )
}