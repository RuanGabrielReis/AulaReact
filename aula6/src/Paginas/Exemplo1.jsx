import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exemplo1() {
  const [nome, setNome] = useState("Ruan");
  const [idade, setIdade] = useState(18);
  const [resultado, setResultado] = useState(null);

  function calcular() {

    let dias = Number(idade) * 365;
    setResultado("Olá "+ nome + ", você já viveu " + dias + " dias.");
  }

  function limpar() {
    setNome("");
    setIdade(0);
    setResultado(null);
  }

  return (
    <div>
      
      <h1>Exemplo 1</h1>
      <div className="container">
        <form>
          <p>
            Digite o nome do aluno <br/>
            <input type="text" placeholder="Digite seu nome" value={nome} onChange={e => setNome(e.target.value)}/>
          </p>
          <p>
            Digite a idade do aluno <br/>
            <input type="number" placeholder="Digite sua idade" value={idade} onChange={e => setIdade(e.target.value)}/>
          </p>
          <p style={{ textAlign: "center" }}>
            <input type="button" value="Exemplo 1" onClick={calcular}/>
            <input type="button" value="Limpar" onClick={limpar}/>  
          </p>

          <p>
            <b>Resultado:</b> <br/>
            {resultado}
          </p>

          <p style={{ textAlign: "right" }}>
            <Link to="/">
              <input type="button" title="Voltar para Home" value="&#8592;" style={{ width: "auto" }}/>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
