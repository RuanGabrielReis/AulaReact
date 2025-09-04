import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio2()
{
  const [fahren, setFahren] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
    let celsius = ((Number(fahren)-32)*5)/9;
    setResultado(
      <div>
        A temperatura em graus Celsius é {celsius}° <br />
      </div>
    );
  }



  return (
    <div>
      <h1>Exercicio2 2</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite a temperatura em Fahrenheit: <br />
            <input type="number" value={fahren} onChange={e => setFahren(e.target.value)} />
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