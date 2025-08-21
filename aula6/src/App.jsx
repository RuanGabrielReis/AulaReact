import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Paginas/Home';
import Exemplo1 from './Paginas/Exemplo1';
import Exemplo2 from './Paginas/Exemplo2';
import Exercicio1 from './Paginas/Exercicio1';  
import Exercicio2 from './Paginas/Exercicio2';  
import Exercicio3 from './Paginas/Exercicio3';
import Exercicio4 from './Paginas/Exercicio4';
import Exercicio5 from './Paginas/Exercicio5';
import "./Paginas/estilos.css"
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exemplo1" element={<Exemplo1 />} />
        <Route path="/exemplo2" element={<Exemplo2 />} />
        <Route path="/exercicio1" element={<Exercicio1 />} />
        <Route path="/exercicio2" element={<Exercicio2 />} />
        <Route path="/exercicio3" element={<Exercicio3 />} />
        <Route path="/exercicio4" element={<Exercicio4 />} />
        <Route path="/exercicio5" element={<Exercicio5 />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App
