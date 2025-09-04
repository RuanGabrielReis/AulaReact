import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio9()
{
  const [valor, setValor] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
    let montante = Number(valor) * (1+(Number(taxa)*Number(tempo)));
    setResultado(
      <div>
        O valor do montante é {montante} <br />
      </div>
    );
  }



  return (
    <div>
      <h1>Exercicio 9</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o valor inicial: <br />
            <input type="number" value={valor} onChange={e => setValor(e.target.value)} />
          </p>
          <p>
            Digite a taxa de juros: <br />
            <input type="number" value={taxa} onChange={e => setTaxa(e.target.value)} />
          </p>
          <p>
            Digite o tempo (em anos): <br />
            <input type="number" value={tempo} onChange={e => setTempo(e.target.value)} />
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