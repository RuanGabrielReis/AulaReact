import { Link } from "react-router-dom";

export default function EspiritoSanto() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Espirito Santo!</h1>

            <p> 
                <img src="ES.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}