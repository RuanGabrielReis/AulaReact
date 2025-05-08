export default function Exercicio2({peso,altura}) {
    let imc = Number(peso) / (Number(altura) * Number(altura));
    return (
        <div>
            O IMC é {imc}
        </div>
    )
}