import { Link } from "react-router-dom";

export default function Home()
{
  return (
    <div>
      <h1>Estudo de Estados (useState)</h1>

      <ul>
        <li><Link to="/exemplo1">Exemplo 1</Link></li>
        <li><Link to="/exemplo2">Exemplo 2</Link></li>
      </ul>

      <h3>Exercícios</h3>

      <ul>
        <li><Link to="/exercicio1">Exercício 1</Link></li>
        <li><Link to="/exercicio2">Exercício 2</Link></li>
        <li><Link to="/exercicio3">Exercício 3</Link></li>
        <li><Link to="/exercicio4">Exercício 4</Link></li>
        <li><Link to="/exercicio5">Exercício 5</Link></li>
        <li><Link to="/exercicio6">Exercício 6</Link></li>
        <li><Link to="/exercicio7">Exercício 7</Link></li>
        <li><Link to="/exercicio8">Exercício 8</Link></li>
        <li><Link to="/exercicio9">Exercício 9</Link></li>
        <li><Link to="/exercicio10">Exercício 10</Link></li>
        
      </ul>
      
    </div>
  )
}