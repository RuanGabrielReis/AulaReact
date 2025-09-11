import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio11()
{
  const [a1, setA1] = useState(0);
  const [r, setR] = useState(0);
  const [n, setN] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
    setA1(Number(a1));
    setR(Number(r));
    setN(Number(n));
    let aNAritmetica = a1 + (n-1)*r;
    let sNAritmetica = (a1 + aNAritmetica) * n / 2;
    
    let aNGeometrica = a1 * r**(n-1);
    let sNGeometrica = a1*(r**n - 1) / (r-1);
    let sIGeometrica = a1 / (1-r);

    setResultado(
      <div>
          <div style={{color:"red"}}>
              <br/>
          Aritmética: <br/><br/>
        O Termo Geral é de {aNAritmetica} <br />
        A Soma Finita é de {sNAritmetica} <br />
        A soma Infinita é de +/-∞ <br /><br/>
        </div>
        <div style={{color:"blue"}}>
        Geométrica: <br/><br/>
        O Termo Geral é de {aNGeometrica} <br />
        A Soma Finita é de {sNGeometrica} <br />
        A soma Infinita é de {sIGeometrica} <br /><br/>
        </div>
      </div>
    );
  }



  return (
    <div>
      <h1>Exercicio 11</h1>

      <div className="container">
        <form onSubmit={e => e.preventDefault()}>
          <p>
            Digite o termo inicial (a1): <br />
            <input type="number" value={a1} onChange={e => setA1(e.target.value)} />
          </p>
          <p>
            Digite a razão (r): <br />
            <input type="number" value={r} onChange={e => setR(e.target.value)} />
          </p>
          <p>
            Digite o número de termos (n): <br />
            <input type="number" value={n} onChange={e => setN(e.target.value)} />
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