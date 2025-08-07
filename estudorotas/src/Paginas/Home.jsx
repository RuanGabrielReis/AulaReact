import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Estudo de Rotas no React</h1>

            <ul>
                <li><Link to="/sp">São Paulo</Link></li>
                <li><Link to="/rj">Rio de Janeiro</Link></li>
                <li><Link to="/mg">Minas Gerais</Link></li>
                <li><Link to="/sc">Santa Catarina</Link></li>
                <li><Link to="/pr">Paraná</Link></li>
                <li><Link to="/es">Espírito Santo</Link></li>
                <li><Link to="/rs">Rio Grande do Sul</Link></li>
                
            </ul>
        </div>
    );
}