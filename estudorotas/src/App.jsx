import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Paginas/Home"
import SaoPaulo from "./Paginas/SaoPaulo"
import RioJaneiro from "./Paginas/RioJaneiro"
import Parana from "./Paginas/Parana"
import RioGrandeSul from "./Paginas/RioGrandeSul"
import SantaCatarina from "./Paginas/SantaCatarina"
import MinasGerais from "./Paginas/MinasGerais"
import EspiritoSanto from "./Paginas/EspiritoSanto"

export default function App()   
{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Home/>} />
                    <Route path="/sp" element = {<SaoPaulo/>} />
                    <Route path="/rj" element = {<RioJaneiro/>} />
                    <Route path="/pr" element = {<Parana/>} />
                    <Route path="/rs" element = {<RioGrandeSul/>} />
                    <Route path="/sc" element = {<SantaCatarina/>} />
                    <Route path="/mg" element = {<MinasGerais/>} />
                    <Route path="/es" element = {<EspiritoSanto/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}