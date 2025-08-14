import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Estudo de Rotas no React</h1>

            <ul>
                <li><Link to="/ac">Acre</Link></li>
                <li><Link to="/al">Alagoas</Link></li>
                <li><Link to="/ap">Amapá</Link></li>
                <li><Link to="/am">Amazonas</Link></li>
                <li><Link to="/ba">Bahia</Link></li>
                <li><Link to="/ce">Ceará</Link></li>
                <li><Link to="/df">Distrito Federal</Link></li>
                <li><Link to="/es">Espírito Santo</Link></li>
                <li><Link to="/go">Goiás</Link></li>
                <li><Link to="/ma">Maranhão</Link></li>
                <li><Link to="/mt">Mato Grosso</Link></li>
                <li><Link to="/ms">Mato Grosso do Sul</Link></li>
                <li><Link to="/mg">Minas Gerais</Link></li>
                <li><Link to="/pa">Pará</Link></li>
                <li><Link to="/pb">Paraíba</Link></li>
                <li><Link to="/pr">Paraná</Link></li>
                <li><Link to="/pe">Pernambuco</Link></li>
                <li><Link to="/pi">Piauí</Link></li>
                <li><Link to="/rj">Rio de Janeiro</Link></li>
                <li><Link to="/rn">Rio Grande do Norte</Link></li>
                <li><Link to="/rs">Rio Grande do Sul</Link></li>
                <li><Link to="/ro">Rondônia</Link></li>
                <li><Link to="/rr">Roraima</Link></li>
                <li><Link to="/sc">Santa Catarina</Link></li>
                <li><Link to="/sp">São Paulo</Link></li>
                <li><Link to="/se">Sergipe</Link></li>
                <li><Link to="/to">Tocantins</Link></li>
            </ul>
        </div>
    );
}