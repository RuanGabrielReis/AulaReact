import { Link } from "react-router-dom";

export default function Maranhao() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Maranhão!</h1>

            <p> 
                <img src="MA.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}