export default App;
import Exemplo1 from "./paginas/Exercicio1";
import Exemplo2 from "./paginas/Exercicio2";
import Exemplo3 from "./paginas/Exercicio3";
import Exercicio4 from "./paginas/Exercicio4";
import Exercicio5 from "./paginas/Exercicio5";

function App() {
  return (
    <div>
      <h1>Estudo do CSS no React</h1>

      <Exemplo1/>
      <hr/>
      <Exemplo2/>
      <hr/>
      <Exemplo3/>
      <hr/>
      <Exercicio4 cor="red"/>
      <hr/>
      <Exercicio4 cor="purple"/>
      <hr/>
      <Exercicio5 nota1="3" nota2="2"/>
      <hr/>
      <Exercicio5 nota1="5" nota2="6.9"/>
      <hr/>
      <Exercicio5 nota1="4" nota2="8"/>
    </div>
  )
} 