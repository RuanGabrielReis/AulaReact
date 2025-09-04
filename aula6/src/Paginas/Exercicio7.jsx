import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio7()
{
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
    let media = (Number(n1)+Number(n2)+Number(n3)) / 3;
    setResultado(
      <div>
        A média das notas é {media} <br />
      </div>
    );
  }



  return (
    <div>
      <h1>Exercicio 7</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite a nota 1: <br />
            <input type="number" value={n1} onChange={e => setN1(e.target.value)} />
          </p>
          <p>
            Digite a nota 2: <br />
            <input type="number" value={n2} onChange={e => setN2(e.target.value)} />
          </p>
          <p>
            Digite a nota 3: <br />
            <input type="number" value={n3} onChange={e => setN3(e.target.value)} />
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