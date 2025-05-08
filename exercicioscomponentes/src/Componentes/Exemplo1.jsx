export default function Exemplo1({numero1,numero2}) {
    let soma = Number(numero1) + Number(numero2);
    return (
        <div>
            A soma {numero1} + {numero2} é igual a {soma}
        </div>
    )
}