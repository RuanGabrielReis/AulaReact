import { Link } from "react-router-dom";

export default function SaoPaulo() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de São Paulo!</h1>

            <p> 
                <img src="SP.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}