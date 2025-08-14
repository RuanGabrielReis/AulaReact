import { Link } from "react-router-dom";

export default function Bahia() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Bahia!</h1>

            <p> 
                <img src="BA.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}