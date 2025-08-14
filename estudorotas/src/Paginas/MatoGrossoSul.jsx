import { Link } from "react-router-dom";

export default function MatoGrossoSul() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Mato Grosso do Sul!</h1>

            <p> 
                <img src="MS.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}