import { Link } from "react-router-dom";

export default function Pernambuco() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Pernambuco!</h1>

            <p> 
                <img src="PE.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}