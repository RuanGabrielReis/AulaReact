import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Paginas/Home"
import SaoPaulo from "./Paginas/SaoPaulo"
import RioJaneiro from "./Paginas/RioJaneiro"
import Parana from "./Paginas/Parana"
import RioGrandeSul from "./Paginas/RioGrandeSul"
import SantaCatarina from "./Paginas/SantaCatarina"
import MinasGerais from "./Paginas/MinasGerais"
import EspiritoSanto from "./Paginas/EspiritoSanto"
import Acre from "./Paginas/Acre"
import Alagoas from "./Paginas/Alagoas"
import Amapa from "./Paginas/Amapa"
import Amazonas from "./Paginas/Amazonas"
import Bahia from "./Paginas/Bahia"
import Ceara from "./Paginas/Ceara"
import DistritoFederal from "./Paginas/DistritoFederal"
import Goias from "./Paginas/Goias"
import Maranhao from "./Paginas/Maranhao"
import MatoGrosso from "./Paginas/MatoGrosso"
import MatoGrossoSul from "./Paginas/MatoGrossoSul"
import Para from "./Paginas/Para"
import Paraiba from "./Paginas/Paraiba"
import Pernambuco from "./Paginas/Pernambuco"
import Piaui from "./Paginas/Piaui"
import RioGrandeNorte from "./Paginas/RioGrandeNorte"
import Rondonia from "./Paginas/Rondonia"
import Roraima from "./Paginas/Roraima"
import Sergipe from "./Paginas/Sergipe"
import Tocantins from "./Paginas/Tocantins"

export default function App()   
{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ac" element={<Acre />} />
                    <Route path="/al" element={<Alagoas />} />
                    <Route path="/ap" element={<Amapa />} />
                    <Route path="/am" element={<Amazonas />} />
                    <Route path="/ba" element={<Bahia />} />
                    <Route path="/ce" element={<Ceara />} />
                    <Route path="/df" element={<DistritoFederal />} />
                    <Route path="/es" element={<EspiritoSanto />} />
                    <Route path="/go" element={<Goias />} />
                    <Route path="/ma" element={<Maranhao />} />
                    <Route path="/mt" element={<MatoGrosso />} />
                    <Route path="/ms" element={<MatoGrossoSul />} />
                    <Route path="/mg" element={<MinasGerais />} />
                    <Route path="/pa" element={<Para />} />
                    <Route path="/pb" element={<Paraiba />} />
                    <Route path="/pr" element={<Parana />} />
                    <Route path="/pe" element={<Pernambuco />} />
                    <Route path="/pi" element={<Piaui />} />
                    <Route path="/rj" element={<RioJaneiro />} />
                    <Route path="/rn" element={<RioGrandeNorte />} />
                    <Route path="/rs" element={<RioGrandeSul />} />
                    <Route path="/ro" element={<Rondonia />} />
                    <Route path="/rr" element={<Roraima />} />
                    <Route path="/sc" element={<SantaCatarina />} />
                    <Route path="/sp" element={<SaoPaulo />} />
                    <Route path="/se" element={<Sergipe />} />
                    <Route path="/to" element={<Tocantins />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}