
import React from "react";
import { Link } from "react-router-dom";  

export default function Home() {
  return (
    <div>
        <h1
        style={{
          textAlign: 'center',
          color: 'white',
          backgroundColor: '#800020', 
          padding: '20px',
          borderRadius: '8px',
        }}
        >
        Estudo de Estados
        </h1>
        <Link to="/exemplo1">Exemplo 1</Link> <br></br>
        <Link to="/exemplo2">Exemplo 2</Link>

        <h3>Exercícios</h3>

        <Link to="/exercicio1">Exercicio 1</Link> <br></br>
        <Link to="/exercicio2">Exercicio 2</Link> <br></br>
        <Link to="/exercicio3">Exercicio 3</Link> <br></br>
        <Link to="/exercicio4">Exercicio 4</Link> <br></br>
        <Link to="/exercicio5">Exercicio 5</Link> <br></br>
    </div>
  );
}
