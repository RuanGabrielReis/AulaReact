import { Link } from "react-router-dom";

export default function Amapa() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Amapá!</h1>

            <p> 
                <img src="AP.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}