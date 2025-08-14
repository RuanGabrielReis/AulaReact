import { Link } from "react-router-dom";

export default function Acre() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Acre!</h1>

            <p> 
                <img src="AC.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}