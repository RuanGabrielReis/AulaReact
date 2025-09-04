import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio8()
{
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);  
  const [resultado, setResultado] = useState('');


  function calcular() {
    let imc = peso / (altura**2);
    setResultado(
      <div>
        O IMC é {imc} <br />
      </div>
    );
  }



  return (
    <div>
      <h1>Exercicio 8</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o peso: <br />
            <input type="number" value={peso} onChange={e => setPeso(e.target.value)} />
          </p>
          <p>
            Digite a altura: <br />
            <input type="number" value={altura} onChange={e => setAltura(e.target.value)} />
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