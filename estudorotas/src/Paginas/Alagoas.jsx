import { Link } from "react-router-dom";

export default function Alagoas() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Alagoas!</h1>

            <p> 
                <img src="AL.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}