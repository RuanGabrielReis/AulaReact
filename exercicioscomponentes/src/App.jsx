import Exemplo1 from "./Componentes/Exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"
import Exercicio3 from "./Componentes/Exercicio3"
import Exercicio4 from "./Componentes/Exercicio4"
import Exercicio5 from "./Componentes/Exercicio5"

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

      <h3>Chamada para o Exercicio 3</h3>
      <Exercicio3 valor={100} taxa={10} tempo={2}/>

      <h3>Chamada para o Exercicio 4</h3>
      <Exercicio4 tipo={"retangulo"} base={5} altura={4}/>
      <Exercicio4 tipo={"retangulo"} base={5} altura={5}/>
      <Exercicio4 tipo={"triangulo"} base={5} altura={4}/>
      
      <h3>Chamada para o Exercicio 5</h3>
      <Exercicio5 consultas={10}/>
    </div>
  )
}