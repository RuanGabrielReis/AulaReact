import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio6()
{
  const [preco, setPreco] = useState(0);
  const [qtt, setQtt] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
    let subtotal = Number(qtt) * Number(preco);
    let desconto = subtotal *10/100;
    let total = subtotal - desconto;
    setResultado(
      <div>
        O subtotal é {subtotal} <br />
        O desconto é {desconto} <br />
        O total é {total} <br />
        
      </div>
    );
  }



  return (
    <div>
      <h1>Exercicio 4</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite a quantidade: <br />
            <input type="number" value={qtt} onChange={e => setQtt(e.target.value)} />
          </p>
          <p>
            Digite o preço: <br />
            <input type="number" value={preco} onChange={e => setPreco(e.target.value)} />
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