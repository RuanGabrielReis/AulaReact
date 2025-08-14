import { Link } from "react-router-dom";

export default function Ceara() {
    return (
        <div>
            <h1>Seja bem-vindo ao estado de Ceará!</h1>

            <p> 
                <img src="CE.png" width={500} />
            </p>

            <p>
                <Link to="/">Voltar</Link>
            </p>
        </div>
    );
}