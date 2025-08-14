import { Link } from "react-router-dom";

export default function Para() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Pará!</h1>

            <p> 
                <img src="PA.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}