import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio1()
{
  const [num, setNum] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
    
    setResultado(
      <div>
        O quadrado é {Number(num) ** 2} <br></br>
        O cubo é {Number(num) ** 3} <br></br>
      </div>
    );
  }



  return (
    <div>
      <h1>Exercicio 1</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite um número qualquer: <br />
            <input type="number" value={num} onChange={e => setNum(e.target.value)} />
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