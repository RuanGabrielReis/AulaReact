export default function Exercicio4({tipo, base, altura}) {
    if (tipo == "retangulo"){
        let area = base*altura;
        if (base == altura) {
        return (
            <div>
                A área do quadrado é de {area}
            </div>
        )    
        } else {
        return (
            <div>
                A área do retangulo é de {area}
            </div>
        )
        }   
    } else if (tipo == "triangulo"){
        let area = base*altura/2;
        return (
            <div>
                A área do {tipo} é de {area}
            </div>
        )
    } else {
        return (
            <div>
                Tipo indefinido.
            </div>
        )
    }
}