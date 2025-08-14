import { Link } from "react-router-dom";

export default function Tocantins() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Tocantins!</h1>

            <p> 
                <img src="TO.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}