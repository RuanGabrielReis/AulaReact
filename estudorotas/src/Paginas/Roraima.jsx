import { Link } from "react-router-dom";

export default function Roraima() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Roraima!</h1>

            <p> 
                <img src="RR.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}