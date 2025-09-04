import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio10()
{
  const [valorHora, setValorHora] = useState(0);
  const [qttHoras, setQttHoras] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
    let salario = Number(valorHora) * Number(qttHoras) * 30;
    setResultado(
      <div>
        O salário do funcioário é {salario} <br />
      </div>
    );
  }



  return (
    <div>
      <h1>Exercicio 10</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o valor da hora: <br />
            <input type="number" value={valorHora} onChange={e => setValorHora(e.target.value)} />
          </p>
          <p>
            Digite a quantidade de horas trabalhadas por dia: <br />
            <input type="number" value={qttHoras} onChange={e => setQttHoras(e.target.value)} />
          </p>
          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>
        </form>
        <p>
          Resultado: {resultado}
        </p>
        <p>
          <Link to="/">Voltar</Link>
        </p>
      </div>
    </div>
  )
}