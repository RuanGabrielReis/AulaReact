import { Link } from "react-router-dom";

export default function Piaui() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Piaui!</h1>

            <p> 
                <img src="PI.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}