import { Link } from "react-router-dom";

export default function Goias() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Goiás!</h1>

            <p> 
                <img src="GO.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}