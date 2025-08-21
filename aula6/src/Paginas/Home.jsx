
import React from "react";
import { Link } from "react-router-dom";  

export default function Home() {
  return (
    <div>
        <header>
          <h1>
            Estudo de Estados
          </h1>
        </header>
        
        <ul>
        <li><Link to="/exemplo1">Exemplo 1</Link></li>
        <li><Link to="/exemplo2">Exemplo 2</Link></li>
        </ul>

        <h3>Exercícios</h3>

        <ul>
        <li><Link to="/exercicio1">Exercicio 1</Link></li>
        <li><Link to="/exercicio2">Exercicio 2</Link></li>
        <li><Link to="/exercicio3">Exercicio 3</Link></li>
        <li><Link to="/exercicio4">Exercicio 4</Link></li>
        <li><Link to="/exercicio5">Exercicio 5</Link></li>
        </ul>
    </div>
  );
}
