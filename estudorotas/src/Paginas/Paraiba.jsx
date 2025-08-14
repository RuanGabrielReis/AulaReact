import { Link } from "react-router-dom";

export default function Paraiba() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Paraíba!</h1>

            <p> 
                <img src="PB.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}